import express from "express";
import logger from "morgan";

export function initApp() {
  const app = express();
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  return app;
}
