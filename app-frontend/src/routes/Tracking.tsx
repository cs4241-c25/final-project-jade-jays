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
    "AR", "EN", "TH", "MU", "AB", "CN", "EN", "GN", "SP",
    "EN", "WR", "RH", "HI", "HU", "INTL", "PY", "RE",
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
  validSubjects: ["PE", "WPE"],
  requiredClasses: 4,
};

const BSCS: Degree = {
  name: "Computer Science",
  categories: [CS, HUA, MA, PE],
};

export function Tracking() {
  const [panelRows, setPanelRows] = useState<JSX.Element[]>([]);
  const [categories, setCategories] = useState<Category[]>(BSCS.categories);
  const [courseDataMap, setCourseDataMap] = useState<Record<string, any[]>>({});

  async function createTrackingSheet() {
    try {
      const courseDataEntries = await Promise.all(
          categories.flatMap((category) =>
              category.validSubjects.map((subject) => getCourseData(subject))
          )
      );

      const courseData: Record<string, any[]> = {};
      courseDataEntries.forEach((data, index) => {
        const subject = categories.flatMap((cat) => cat.validSubjects)[index];
        courseData[subject] = data.courses;
      });

      setCourseDataMap(courseData);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  }

  useEffect(() => {
    createTrackingSheet();
  }, []);

  useEffect(() => {
    if (Object.keys(courseDataMap).length === 0) return;

    const rows: JSX.Element[] = [];
    let currentRow: JSX.Element[] = [];

    for (let i = 0; i < categories.length; i++) {
      currentRow.push(
          <Panel key={categories[i].name} className={classes.panel}>
            {categories[i].name}
            {Array.from({ length: categories[i].requiredClasses }).map((_, index) => (
                <select key={index}>
                  <option value="" selected disabled hidden>Choose here</option>
                  {categories[i].validSubjects.flatMap((subject) =>
                      (courseDataMap[subject] || []).map((course) => (
                          <option selected={false}
                                  key={course.subject + course.code}>{course.subject + course.code + " - " + course.title}</option>
                      ))
                  )}
                </select>
            ))}
          </Panel>
      );

      if (currentRow.length === 3 || i === categories.length - 1) {
        rows.push(
            <PanelGroup key={i} direction="horizontal">
              {currentRow}
            </PanelGroup>
        );
        currentRow = [];
      }
    }

    setPanelRows(rows);
  }, [courseDataMap]);

  return (
      <>
        <PanelGroup direction={"vertical"}>{panelRows}</PanelGroup>
      </>
  );
}
