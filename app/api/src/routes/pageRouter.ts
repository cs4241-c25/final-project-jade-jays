import path from "path";
import express, { Request, Response } from "express";

const router = express.Router();

router.use(express.static(path.resolve(__dirname, "/build")));

router.get(/.*/, (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, "/build/index.html"));
});
