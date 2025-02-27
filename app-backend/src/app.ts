import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil.js";
import courseRoutes from "./route/courseRouter.js";

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

  app.use("/api/course/", courseRoutes);

  return app;
}
