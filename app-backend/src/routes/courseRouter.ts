import { Router, Request, Response } from "express";
import axios from "axios";

import Course from "../persistent/CoursePersistence.js";
import { RawCourseType, CourseType } from "@/util/persistent.types";

const router: Router = Router({});

router.get("/all", async (req: Request, res: Response) => {
  try {
    const data: { [key: string]: CourseType[] } = {};
    const courses = await Course.find({}).sort({ subject: 1 });
    courses.forEach((course: CourseType) => {
      if (!data[course.subject]) {
        data[course.subject] = [course];
      } else {
        data[course.subject].push(course);
      }
    });
    res.send(JSON.stringify({ success: true, data: data }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

// populates the database with completely new data
// SHOULD NOT BE CALLED CLIENT SIDE
router.get("/populate_database", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "get",
      url: "https://courselistings.wpi.edu/assets/prod-data.json",
      responseType: "json",
    });

    const courses: CourseType[] = [];
    const subject = new Set();
    response.data.Report_Entry.forEach((course_data: RawCourseType) => {
      courses.push({
        title: course_data.Course_Title,
        locations: course_data.Locations,
        instructional_format: course_data.Instructional_Format,
        meeting_day_patterns: course_data.Meeting_Day_Patterns,
        delivery_mode: course_data.Delivery_Mode,
        description: course_data.Course_Description,
        instructors: course_data.Instructors,
        waitlist_capacity: course_data.Waitlist_Waitlist_Capacity,
        enrolled_capacity: course_data.Enrolled_Capacity,
        credits: Number(course_data.Credits),
        subject: course_data.Subject,
        academic_level: course_data.Academic_Level,
        section: course_data.Course_Section,
        section_status: course_data.Section_Status,
        section_start_date: course_data.Course_Section_Start_Date,
        section_end_date: course_data.Course_Section_End_Date,
        section_details: course_data.Section_Details,
        offer_period: course_data.Offering_Period,
        academic_period: course_data.Starting_Academic_Period_Type,
        course_tags: course_data.Course_Tags.split(" :: "),
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

export default router;
