import mongoose from "mongoose";
import dotenv from "dotenv/config";

export function ConnectDB(database_url: string | undefined) {
  if (!database_url) throw new Error("MongoDB URL is missing");

  mongoose
    .connect(database_url)
    .then((value) => {
      console.log("[STATUS] Database Connected");
    })
    .catch((error) => {
      console.error("[ERROR] Connection failed");
      console.log(error);
    });
}