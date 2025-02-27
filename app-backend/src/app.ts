import express from "express";
import logger from "morgan";

import { ConnectDB } from "./util/DatabaseUtil.js";
import courseRoutes from "./route/courseRouter.js";

export function initApp(): express.Express {
  const app = express();
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  ConnectDB();

  app.use("/api/course/", courseRoutes);

  return app;
}
