import React from "react";

export type CourseProviderProps = {
  children: React.ReactNode;
};

export interface CourseType {
  _id?: { type: String };
  title: { type: String };
  locations: { type: String };
  instructional_format: { type: String };
  meeting_day_patterns: { type: String };
  delivery_mode: { type: String };
  description: { type: String };
  instructors: { type: String };
  waitlist_capacity: { type: String };
  enrolled_capacity: { type: String };
  credits: number;
  subject: { type: String };
  academic_level: { type: String };
  section: { type: String };
  section_status: { type: String };
  section_start_date: { type: String };
  section_end_date: { type: String };
  section_details: { type: String };
  offer_period: { type: String };
  academic_period: { type: String };
  course_tags: string[]; // String array
}
