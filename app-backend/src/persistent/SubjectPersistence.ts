import { SubjectType } from "app-packages/types/persistent.types";
import mongoose from "mongoose";

const subject = new mongoose.Schema<SubjectType>(
  {
    type: String,
    code: String,
    department: String,
    category: String,
  },
  { _id: false },
);

const Subject = mongoose.model("Subject", subject, "subjects");
export default Subject;