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

const router: Router = Router();

// populates the database with completely new data
router.get("/populate_database", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://courselistings.wpi.edu/assets/prod-data.json",
      responseType: "json",
    });

    const subjects: { [key: string]: SubjectType } = {};
    response.data.Report_Entry.forEach((course_data: RawCourseType) => {
      course_data.Subject.split("; ").forEach((subject) => {
        const code = course_data.Course_Title.split(" ")[0];
        if (!subjects[code]) {
          subjects[code] = {
            type: subject,
            code: course_data.Course_Title.split(" ")[0],
            department: course_data.Course_Section_Owner,
          };
        }
      });
    });

    await Subject.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    const subjects_data = await Subject.insertMany(Object.values(subjects));
    if (subjects_data) {
      console.log("[STATUS] Data successfully added");
    }

    const courses: { [key: string]: CourseType } = {};
    const sections: SectionType[] = [];
    const timeRangeRegex = /([0-1])*([0-9]):([0-5]){2}( )*(AM|PM)/g;
    const classSectionRegex = /([A-Z]){1,}( )*([0-9]){2,}(-)*/g;

    await Promise.all(
      response.data.Report_Entry.map((course_data: RawCourseType) => {
        const [code, title] = course_data.Course_Title.split(" - ");
        const [code_abbrev, code_number] = code.split(" ");

        Subject.findOne({ code: code_abbrev }).then((subject) => {
          let section_start_time = "",
            section_end_time = "";
          let section_code = "";

          const section_time_matches =
            course_data.Section_Details.match(timeRangeRegex);
          if (section_time_matches) {
            [section_start_time, section_end_time] = section_time_matches;
          }

          const section_code_matches =
            course_data.Course_Section.match(classSectionRegex);
          if (section_code_matches) {
            section_code = section_code_matches[1];
          }

          if (
            subject &&
            subject._id &&
            !courses[`${code_abbrev}${code_number}`]
          ) {
            courses[`${code_abbrev}${code_number}`] = {
              code: code_number,
              title: title,
              description: course_data.Course_Description,
              instructors: course_data.Instructors,
              waitlist_capacity: course_data.Waitlist_Waitlist_Capacity,
              enrolled_capacity: course_data.Enrolled_Capacity,
              credits: Number(course_data.Credits),
              subject: subject._id,
              academic_level: course_data.Academic_Level,
              offer_period: course_data.Offering_Period,
              academic_period: course_data.Starting_Academic_Period_Type,
              course_tags: course_data.Course_Tags.split(" :: "),
            };
          }

          sections.push({
            locations: course_data.Locations,
            instructional_format: course_data.Instructional_Format,
            meeting_day_patterns: course_data.Meeting_Day_Patterns,
            delivery_mode: course_data.Delivery_Mode,
            section_code: section_code,
            section_status: course_data.Section_Status,
            section_start_date: course_data.Course_Section_Start_Date,
            section_end_date: course_data.Course_Section_End_Date,
            section_start_time: section_start_time,
            section_end_time: section_end_time,
          });
        });
      }),
    );

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
