import { CourseType } from "@/util/persistent.types";
import mongoose from "mongoose";

const course = new mongoose.Schema<CourseType>({
  title: String,
  locations: String,
  instructional_format: String,
  meeting_day_patterns: String,
  delivery_mode: String,
  description: String,
  instructors: String,
  waitlist_capacity: String,
  enrolled_capacity: String,
  credits: Number,
  subject: String,
  academic_level: String,
  section: String,
  section_status: String,
  section_start_date: Date,
  section_end_date: Date,
  section_details: String,
  offer_period: String,
  academic_period: String,
  course_tags: [String], // String array
});

const Course = mongoose.model("Course", course, "courses");
export default Course;
