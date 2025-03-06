import { createServer } from "./app";
import dotenv from "dotenv/config";

const app = createServer();
app.listen(process.env.PORT, () => {
  console.log(`API server listening on port ${process.env.PORT}`);
});

export default app;