import { Panel, PanelGroup } from "react-resizable-panels";
import { useEffect, useState } from "react";
import classes from "@/styles/tracking.module.css";
import { getCourseData } from "@/hooks/data-fetches.ts";

type Degree = {
  name: string;
  categories: Category[];
};

type Category = {
  name: string;
  validSubjects: string[];
  requiredClasses: number;
};

const CS: Category = {
  name: "Computer Science",
  validSubjects: ["CS"],
  requiredClasses: 18,
};
const HUA: Category = {
  name: "Humanities and Arts",
  validSubjects: [
    "AR",
    "EN",
    "TH",
    "MU",
    "AB",
    "CN",
    "EN",
    "GN",
    "SP",
    "EN",
    "WR",
    "RH",
    "HI",
    "HU",
    "INTL",
    "PY",
    "RE",
  ],
  requiredClasses: 6,
};
const MA: Category = {
  name: "Mathematics",
  validSubjects: ["MA"],
  requiredClasses: 7,
};
const PE: Category = {
  name: "Physical Education",
  validSubjects: ["PE, WPE"],
  requiredClasses: 4,
};

const BSCS: Degree = {
  name: "Computer Science",
  categories: [CS, HUA, MA, PE],
};

export function Tracking() {
  const [panelsRows, setPanelRows] = useState([]);
  const [subjects, setSubjects] = useState(["67c2237ae95a42965244c0f2"]);
  const [categories, setCategories] = useState<Category[]>([]);

  async function createTrackingSheet() {
    try {
      for (let category in BSCS.categories) {
      }
      // Wait for all course data to resolve
      const courseDataArray = await Promise.all(subjects.map(getCourseData));

      // Store data in an object mapped by subject
      /*
            const subjectDataMap = subjects.reduce((acc, subject, index) => {
                acc[subject] = courseDataArray[index];
                return acc;
            }, {} as Record<string, string[]>);

            console.log("Subject Data Map:", subjectDataMap);

            {subjectDataMap[subject]?.map((collegeClass) => (
                                <option key={collegeClass}>{collegeClass}</option>
                            ))}

             */
      //console.log(courseDataArray[0]);

      // Create panel rows after data is set
      const rows = [];
      let currentRow = [];
      for (let i = 0; i < subjects.length; i++) {
        console.log(courseDataArray[0].courses);
        currentRow.push(
          <Panel key={subjects[i]} className={classes.panel}>
            {subjects[i]}
            <select>
              {courseDataArray[i].courses.map((courseData) => (
                <option key={courseData._id}>{courseData.code}</option>
              ))}
            </select>
          </Panel>,
        );

        // Every 3 subjects, push a new PanelGroup and reset the row
        if (currentRow.length === 3 || i === subjects.length - 1) {
          rows.push(
            <PanelGroup key={i} direction="horizontal">
              {currentRow}
            </PanelGroup>,
          );
          currentRow = []; // Reset for the next row
        }
      }
      setPanelRows(rows);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  }

  useEffect(() => {
    createTrackingSheet();
  }, []);

  return (
    <>
      <PanelGroup direction={"horizontal"}>
        <select id={"DegreeSelector"}></select>
      </PanelGroup>
      <PanelGroup direction={"vertical"}>{panelsRows}</PanelGroup>
    </>
  );
}
