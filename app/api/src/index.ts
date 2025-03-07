import { createServer } from "./app";

export const start = () => {
  if (
    !process.env.PORT ||
    !process.env.DATABASE_URL
  ) {
    throw new Error("Please set all environment variables.");
  }

  const app  = createServer({
    DATABASE_URL: process.env.DATABASE_URL,
  });
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
  });
  return app;
}

start();