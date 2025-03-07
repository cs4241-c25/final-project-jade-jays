import {Request, Response, Router} from "express";
import axios from "axios";

import Course from "../persistent/CoursePersistence";
import Section from "../persistent/SectionPersistence";
import Subject from "../persistent/SubjectPersistence";

const router: Router = Router();



export default router;