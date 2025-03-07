import { initApp } from "./app.js";
import dotenv from "dotenv/config";

function start() {
  if (
    !process.env.PORT ||
    !process.env.MONGO_HOST ||
    !process.env.MONGO_USER ||
    !process.env.MONGO_PASS ||
    !process.env.MONGO_LOCAL
  ) {
    console.error("Please set all required environment variables.");
  }

  const app = initApp();
  app.listen(process.env.PORT, () => {
    console.log(`API server listening on port ${process.env.PORT}`);
  });
}
start();
