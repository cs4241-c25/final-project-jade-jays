import { SectionType } from "@repo/app-commons/types/persistent.types";
import mongoose from "mongoose";

const subject = new mongoose.Schema<SectionType>({
  locations: { type: String },
  instructional_format: { type: String },
  delivery_mode: { type: String },
  course: { type: String },
  section_code: { type: String },
  section_status: { type: String },
  section_start_date: { type: String },
  section_end_date: { type: String },
  section_start_time: { type: String },
  section_end_time: { type: String },
  meeting_day_patterns: { type: String },
  offering_period: { type: String },
});

const Section = mongoose.model("Section", subject, "sections");
export default Section;