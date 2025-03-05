import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil.js";
import adminRoutes from "./routes/adminRouter.js";
import courseRoutes from "./routes/courseRouter";
import subjectRoutes from "./routes/subjectRouter";
import sectionRoutes from "./routes/sectionRouter";
import singleCourseRoutes from "./routes/singleCourseRouter";

export function initApp(): express.Express {
  const app = express();
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    // Enabling CORs for all localhost origins
    cors({
      origin:
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
    }),
  );

  ConnectDB();

  app.use("/api/admin/", adminRoutes);
  app.use("/api/course/", courseRoutes);
  app.use("/api/subject/", subjectRoutes);
  app.use("/api/section/", sectionRoutes);
  app.use("/api/singlecourse/", singleCourseRoutes);

  return app;
}
