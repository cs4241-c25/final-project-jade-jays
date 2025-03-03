import { Router, Request, Response } from "express";
import Course from "../persistent/CoursePersistence.js";

const router: Router = Router();

router.get("/::class", async (req: Request, res: Response) => {
  try {
    const params = req.params.class.split(",");
    const courseData = await Course.find({
      subject: params[0],
      code: params[1],
    })
      .select("-__v")
      .sort({ code: 1 });

    if (!courseData) {
      console.log("Course not found");
      throw new Error("Course Not Found");
    }

    res.send(JSON.stringify({ course: courseData }));
  } catch (error) {
    console.error("[ERROR] Cannot get public course listing.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

export default router;
