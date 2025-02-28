import { SubjectType } from "app-packages/types/persistent.types";
import mongoose from "mongoose";

const subject = new mongoose.Schema<SubjectType>({
  type: String,
  abbreviation: String,
  department: String,
});

const Subject = mongoose.model("Subject", subject, "subjects");
export default Subject;
