import {Request, Response, Router} from "express";
import axios from "axios";

import Course from "../persistent/CoursePersistence";
import Section from "../persistent/SectionPersistence";
import Subject from "../persistent/SubjectPersistence";

const router: Router = Router();

router.post("/login", async (req: Request, res: Response) => {
    // Implement local strategy here
});

export default router;