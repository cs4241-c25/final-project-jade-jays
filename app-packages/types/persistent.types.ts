import { Types } from "mongoose";

export type SetLocalStorageValue<T> = (val: T | ((prevState: T) => T)) => void;

export type RangeType = { start: number; end: number };

export interface TableSectionDataType extends SectionType {
  start: number;
  end: number;
}

export type TablesType = {
  [key: string]: Array<TableSectionDataType[]>;
};

export interface ClientSubjectType {
  _id: string;
  type: string;
  code: string;
  department: string;
}

export interface ClientCourseType {
  _id: string;
  code: string;
  title: string;
  description: string;
  instructors: string;
  waitlist_capacity: string;
  enrolled_capacity: string;
  credits: number;
  subject: string;
  academic_level: string;
  academic_terms_pattern: string[];
  offering_periods: string[];
  academic_period: string;
  course_tags: string[]; // String array
}

export interface SectionType {
  _id?: Types.ObjectId;
  locations: string;
  instructional_format: string;
  delivery_mode: string;
  course: string;
  section_code: string;
  section_status: string;
  section_start_date: string;
  section_end_date: string;
  section_start_time: string;
  section_end_time: string;
  meeting_day_patterns: string;
  offering_period: string;
}

export interface SubjectType {
  _id?: Types.ObjectId;
  type: string;
  code: string;
  department: string;
}

export interface CourseType {
  _id?: Types.ObjectId;
  code: string;
  title: string;
  description: string;
  instructors: string;
  waitlist_capacity: string;
  enrolled_capacity: string;
  credits: number;
  subject: string;
  academic_level: string;
  academic_terms_pattern: string[];
  offering_periods: string[];
  academic_period: string;
  course_tags: string[]; // String array
  prereq: {
    id: string;
    req: string;
  }[][];
}

export type RawCourseType = {
  Course_Section_Start_Date: string;
  CF_LRV_Cluster_Ref_ID: string;
  Student_Course_Section_Cluster: string;
  Meeting_Patterns: string;
  Course_Title: string;
  Locations: string;
  Instructional_Format: string;
  Waitlist_Waitlist_Capacity: string;
  Course_Description: string;
  Public_notes: string;
  Subject: string;
  Delivery_Mode: string;
  Academic_Level: string;
  Section_Status: string;
  Credits: string;
  Section_Details: string;
  Instructors: string;
  Offering_Period: string;
  Starting_Academic_Period_Type: string;
  Course_Tags: string;
  Academic_Units: string;
  Course_Section: string;
  Enrolled_Capacity: string;
  Course_Section_End_Date: string;
  Meeting_Day_Patterns: string;
  Course_Section_Owner: string;
};
