import { createServer } from "./app";
import dotenv from "dotenv/config";

export const app  = createServer();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).send("express");
})