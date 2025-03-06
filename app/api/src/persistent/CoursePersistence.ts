import { CourseType } from "@repo/app-commons/types/persistent.types";
import mongoose, { Schema } from "mongoose";

const course = new mongoose.Schema<CourseType>({
  code: { type: String },
  title: { type: String },
  description: { type: String },
  instructors: { type: String },
  waitlist_capacity: { type: String },
  enrolled_capacity: { type: String },
  credits: Number,
  subject: { type: String },
  academic_level: { type: String },
  academic_terms_pattern: { type: [String] },
  offering_periods: { type: [String] },
  academic_period: { type: String },
  course_tags: [String], // String array
});

const Course = mongoose.model("Course", course, "courses");
export default Course;