import { Router, Request, Response } from "express";
import { XMLBuilder } from "fast-xml-parser";

import Subject from "../persistent/SubjectPersistence";
import Course from "../persistent/CoursePersistence";
import Section from "../persistent/SectionPersistence";

const router: Router = Router();

router.get("/all", async (req: Request, res: Response) => {
  try {
    const subjectData = await Subject.find(
      {},
      { _id: 0, __v: 0 },
      { lean: true },
    );
    const data = await Promise.all(
      subjectData.map(async (subject) => {
        const courses = await getCourseData(subject.code);
        return {
          $name: subject.type,
          $abbrev: subject.code,
          $department: subject.department,
          $category: subject.category,
          course: courses,
        };
      }),
    );

    const builder = new XMLBuilder({
      attributeNamePrefix: "$",
      ignoreAttributes: false,
      arrayNodeName: "subject",
      indentBy: "    ",
      format: true,
    });
    const result = `<?xml version="1.0"?>
      <script>
        ${builder.build(data)}
      </script>
    `;

    res.set("Content-Type", "text/xml").send(result);
  } catch (error) {
    console.error("[ERROR] Cannot find section data.");
    console.log(error);
    res.send(JSON.stringify({ success: false }));
  }
});

// some helper functions
async function getCourseData(subject_id: string) {
  const courseData = await Course.find(
    { subject: subject_id },
    { _id: 0, __v: 0 },
    { lean: true },
  );
  return await Promise.all(
    courseData.map(async (course) => {
      const course_id = course.subject + course.code;
      const sections = await getSectionData(course_id);
      return {
        $description: course.description,
        $name: course.title,
        $number: course.code,
        $credits: course.credits,
        $enrolled: course.enrolled_capacity,
        $waitlist: course.waitlist_capacity,
        $academic_terms: course.academic_terms_pattern.join(' '),
        $academic_period: course.academic_period,
        section: sections,
      };
    }),
  );
}

async function getSectionData(course_id: string) {
  const sectionData = await Section.find(
    { course: course_id },
    { _id: 0, __v: 0 },
    { lean: true },
  );
  return sectionData.map((section) => {
    return {
      $location: section.locations,
      $format: section.instructional_format,
      $code: section.section_code,
      $status: section.section_status,
    };
  });
}

export default router;