import { Router, Request, Response } from "express";
import axios from "axios";

import {
  RawCourseType,
  CourseType,
  SubjectType,
} from "app-packages/types/persistent.types";
import Course from "../persistent/CoursePersistence.js";
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

    const courses: CourseType[] = [];
    const subjects: { [key: string]: SubjectType } = {};
    response.data.Report_Entry.forEach((course_data: RawCourseType) => {
      course_data.Subject.split("; ").forEach((subject) => {
        if (!subjects[subject]) {
          subjects[subject] = {
            type: subject,
            abbreviation: course_data.Course_Title.split(" ")[0],
            department: course_data.Course_Section_Owner,
          };
        }
      });
    });

    await Subject.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    if (await Subject.insertMany(Object.values(subjects))) {
      console.log("[STATUS] Data successfully added");
    }

    const timeRangeRegex = /([0-1])*([0-9]):([0-5]){2}( )*(AM|PM)/g;
    const classSectionRegex = /([A-Z]){1,}( )*([0-9]){2,}(-)*/g;
    response.data.Report_Entry.forEach((course_data: RawCourseType) => {
      console.log(course_data.Subject);
      Subject.findOne({ type: course_data.Subject }).then((subject) => {
        const [code, title] = course_data.Course_Title.split(" - ");
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

        if (subject && subject._id) {
          courses.push({
            code: code,
            title: title,
            locations: course_data.Locations,
            instructional_format: course_data.Instructional_Format,
            meeting_day_patterns: course_data.Meeting_Day_Patterns,
            delivery_mode: course_data.Delivery_Mode,
            description: course_data.Course_Description,
            instructors: course_data.Instructors,
            waitlist_capacity: course_data.Waitlist_Waitlist_Capacity,
            enrolled_capacity: course_data.Enrolled_Capacity,
            credits: Number(course_data.Credits),
            subject: subject._id,
            academic_level: course_data.Academic_Level,
            section_code: section_code,
            section_status: course_data.Section_Status,
            section_start_date: course_data.Course_Section_Start_Date,
            section_end_date: course_data.Course_Section_End_Date,
            section_start_time: section_start_time,
            section_end_time: section_end_time,
            offer_period: course_data.Offering_Period,
            academic_period: course_data.Starting_Academic_Period_Type,
            course_tags: course_data.Course_Tags.split(" :: "),
          });
        }
      });
    });

    await Course.deleteMany({});
    console.log("[STATUS] Database successfully dumped.");

    if (await Course.insertMany(courses)) {
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
