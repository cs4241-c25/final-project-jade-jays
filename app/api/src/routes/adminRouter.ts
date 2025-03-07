import { Router, Request, Response } from "express";
import axios from "axios";

import {
  RawCourseType,
  CourseType,
  SubjectType,
  SectionType,
} from "app-packages/types/persistent.types";
import Course from "../persistent/CoursePersistence.js";
import Section from "../persistent/SectionPersistence.js";
import Subject from "../persistent/SubjectPersistence.js";
import getPrereqs from "@/Prereqs/getPrereqs";

const router: Router = Router();

// BEEFY function to populate the database with completely new data
router.get("/populate_database", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://courselistings.wpi.edu/assets/prod-data.json",
      responseType: "json",
    });

    const subjects: { [key: string]: SubjectType } = {};
    response.data.Report_Entry.map((courseData: RawCourseType) => {
      const subject = courseData.Subject.split("; ")[0];
      const code = courseData.Course_Title.split(" ")[0];

      // there's a bug with philosophy. Need more checks for data validation
      if (!subjects[code]) {
        subjects[code] = {
          type: subject,
          code: courseData.Course_Title.split(" ")[0],
          department: courseData.Course_Section_Owner,
        };
      }
    });

    await Subject.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    const subjects_data = await Subject.insertMany(Object.values(subjects));
    if (subjects_data) {
      console.log("[STATUS] Data successfully added");
    }

    // Parsing Courses and Sections data
    const courses: { [key: string]: CourseType } = {};
    const sections: SectionType[] = [];
    const timeRangeRegex = /([0-1])*([0-9]):([0-5]){2}( )*(AM|PM)/g;
    const classSectionRegex = /([A-Z]){1,}( )*([0-9]){2,}(-)*/g;

    // sort the data
    const sortedCourses = response.data.Report_Entry.sort(
      (a: RawCourseType, b: RawCourseType) => {
        if (a.Course_Title > b.Course_Title) return 1;
        else if (a.Course_Title < b.Course_Title) return -1;
        return 0;
      },
    );

    // doing this instead of maps so that we can use Set object to determine
    // which term the course is available for
    for (let i: number = 0; i < sortedCourses.length; i++) {
      const courseData: RawCourseType = sortedCourses[i];
      const [code, title] = courseData.Course_Title.split(" - ");
      const [code_abbrev, code_number] = code.split(" ");

      const terms: Set<string> = new Set();
      const offeringPeriod: Set<string> = new Set();
      for (let j: number = i; j < sortedCourses.length - 1; j++) {
        const sectionData = sortedCourses[j];

        Subject.findOne({ code: code_abbrev }).then((subject) => {
          let section_start_time = "",
            section_end_time = "";
          let section_code = "";

          const section_time_matches =
            sectionData.Section_Details.match(timeRangeRegex);
          if (section_time_matches) {
            [section_start_time, section_end_time] = section_time_matches;
          }

          const section_code_matches =
            sectionData.Course_Section.match(classSectionRegex);
          if (section_code_matches) {
            section_code = section_code_matches[1];
          }

          sections.push({
            locations: sectionData.Locations,
            instructional_format: sectionData.Instructional_Format,
            meeting_day_patterns: sectionData.Meeting_Day_Patterns,
            delivery_mode: sectionData.Delivery_Mode,
            course: code_abbrev + code_number,
            section_code: section_code,
            section_status: sectionData.Section_Status,
            section_start_date: sectionData.Course_Section_Start_Date,
            section_end_date: sectionData.Course_Section_End_Date,
            section_start_time: section_start_time,
            section_end_time: section_end_time,
            offering_period: sectionData.Offering_Period,
          });
        });

        const offering_period = sectionData.Offering_Period;
        if (!offeringPeriod.has(offering_period)) {
          offeringPeriod.add(offering_period);
        }

        const term = sectionData.Offering_Period.replace(
          /([0-9]){1,4}\s*(Spring|Fall)*/g,
          "",
        )
          .replace(/Term/g, "")
          .trim();
        if (!terms.has(term)) {
          terms.add(term);
        }

        if (sortedCourses[j + 1].Course_Title !== courseData.Course_Title) {
          i = j;
          break;
        }
      }

      if (!courses[`${code_abbrev}${code_number}`]) {
        const reqs = getPrereqs(code_abbrev, code_number);

        courses[`${code_abbrev}${code_number}`] = {
          code: code_number,
          title: title,
          description: courseData.Course_Description.replace(
            /<br\s*\/>/g,
            " ",
          ).replace(/<(\/)*([a-z])*\s*([a-z]:\s*(")*[a-z]("*))*\s*>/g, ""),
          instructors: courseData.Instructors,
          waitlist_capacity: courseData.Waitlist_Waitlist_Capacity,
          enrolled_capacity: courseData.Enrolled_Capacity,
          credits: Number(courseData.Credits),
          subject: code_abbrev,
          academic_level: courseData.Academic_Level,
          academic_terms_pattern: Array.from(terms),
          offering_periods: Array.from(terms),
          academic_period: courseData.Starting_Academic_Period_Type,
          course_tags: courseData.Course_Tags.split(" :: "),
          prereq: reqs,
        };
      }
    }

    await Section.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    if (await Section.insertMany(sections)) {
      console.log("[STATUS] Data successfully added");
    }

    await Course.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    if (await Course.insertMany(Object.values(courses))) {
      console.log("[STATUS] Data successfully added");
      res.send(JSON.stringify({ success: true }));
    }
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

router.get("/dump/:type", async (req, res) => {
  try {
    switch (req.params.type) {
      case "subject":
        {
          await Subject.deleteMany({});
          console.log("[STATUS] Database successfully dumped.");
        }
        break;
      case "course":
        {
          await Course.deleteMany({});
          console.log("[STATUS] Database successfully dumped.");
        }
        break;
    }

    res.send(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

export default router;
