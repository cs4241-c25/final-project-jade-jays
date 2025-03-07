import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil";
import adminRoutes from "./routes/adminRouter";
import dataRoutes from "./routes/dataRouter";

export const createServer = ({ DATABASE_URL } : { [key:string]: string }): express.Express => {
  const app = express();
  ConnectDB(DATABASE_URL);
  app
    .disable("x-powered-by")
    .use(logger("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use("/api/admin/", adminRoutes)
    .use("/api/data/", dataRoutes);

  app.get('/health-check', (req, res) => {
    res.status(200).send('connected');
  })

  return app;
};