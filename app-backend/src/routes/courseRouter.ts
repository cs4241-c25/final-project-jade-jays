import { Router, Request, Response } from "express";
import Course from "../persistent/CoursePersistence.js";

const router: Router = Router();

router.get("/code::code", async (req: Request, res: Response) => {
  try {
    const courseData = await Course.find({
      subject: req.params.code,
    })
      .select("-__v")
      .sort({ code: 1 });

    if (!courseData) {
      throw new Error("Course Not Found");
    }

    res.send(JSON.stringify({ courses: courseData }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

export default router;
