import { Router, Request, Response } from "express";
import Subject from "../persistent/SubjectPersistence.js";

const router: Router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const subjectData = await Subject.find({})
      .select("-__v")
      .sort({ subject: 1 });
    res.send(JSON.stringify({ subjects: subjectData }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

export default router;
