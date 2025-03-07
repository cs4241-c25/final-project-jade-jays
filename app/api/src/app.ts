import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil.js";
import adminRoutes from "./routes/adminRouter.js";
import courseRoutes from "./routes/courseRouter";
import subjectRoutes from "./routes/subjectRouter";
import sectionRoutes from "./routes/sectionRouter";
import singleCourseRoutes from "./routes/singleCourseRouter";

export const createServer = ({ DATABASE_URL } : { [key:string]: string }): express.Express => {
  const app = express();
  ConnectDB(DATABASE_URL);
  app
    .disable("x-powered-by")
    .use(logger("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors());

  app.use("/api/admin/", adminRoutes);
  app.use("/api/course/", courseRoutes);
  app.use("/api/subject/", subjectRoutes);
  app.use("/api/section/", sectionRoutes);
  app.use("/api/singlecourse/", singleCourseRoutes);

  app.get('/health-check', (req, res) => {
    res.status(200).send('connected');
  })

  return app;
}