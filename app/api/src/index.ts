import { initApp } from "./app";
import dotenv from "dotenv/config";

function start() {
  if (
    !process.env.PORT ||
    !process.env.DATABASE_HOST ||
    !process.env.DATABASE_USER ||
    !process.env.DATABASE_PASS
  ) {
    console.error("Please set all required environment variables.");
  }

  const app = initApp();
  app.listen(process.env.PORT, () => {
    console.log(`API server listening on port ${process.env.PORT}`);
  });
}
start();