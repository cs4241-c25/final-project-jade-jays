import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil";
import adminRoutes from "./routes/adminRouter";
import dataRoutes from "./routes/dataRouter";

export const createServer = (): express.Express => {
  const app = express();
  ConnectDB();
  app
    .disable("x-powered-by")
    .use(logger("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use("/src/admin/", adminRoutes)
    .use("/src/data/", dataRoutes);

  app.get('health-check', (req, res) => {
    res.status(200).send('connected');
  })

  return app;
};