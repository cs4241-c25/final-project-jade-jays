import { initApp } from "./app";
import * as dotenv from "dotenv";

function start() {
  dotenv.config();
  if (
    !process.env.PORT ||
    !process.env.MONGO_USER ||
    !process.env.MONGO_PASS ||
    !process.env.MONGO_HOST
  ) {
    console.error("Please set all required environment variables.");
  }

  const app = initApp();
}
start();
