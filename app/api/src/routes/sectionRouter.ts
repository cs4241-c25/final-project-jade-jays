import { Router, Request, Response } from "express";
import Section from "../persistent/SectionPersistence.js";

const router: Router = Router();

router.get("/code::abbrev-:code", async (req: Request, res: Response) => {
  try {
    const data = await Section.find({
      course: req.params.abbrev + req.params.code,
    });
    res.send(JSON.stringify({ sections: data }));
  } catch (error) {
    console.error("[ERROR] Cannot find section data.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

export default router;
