import { Panel, PanelGroup } from "react-resizable-panels";
import { useEffect, useState } from "react";
import classes from "@/styles/tracking.module.css";
import { getCourseData } from "@/hooks/data-fetches.ts";
import { BSCS } from "../components/CSDegree.ts";

export function Tracking() {
  const [panelRows, setPanelRows] = useState<JSX.Element[]>([]);
  const [categories, setCategories] = useState<Category[]>(BSCS.categories);
  const [courseDataMap, setCourseDataMap] = useState<Record<string, any[]>>({});
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]); // Changed to an array

  async function createTrackingSheet() {
    try {
      const courseDataEntries = await Promise.all(
        categories.flatMap((category) =>
          category.validSubjects.map((subject) => getCourseData(subject)),
        ),
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
    let selectionIndex = 0; // Track position in selectedCourses array

    for (let i = 0; i < categories.length; i++) {
      currentRow.push(
        <Panel key={categories[i].name} className={classes.panel}>
          <h3>{categories[i].name}</h3>
          {Array.from({ length: categories[i].requiredClasses }).map(
            (_, index) => {
              const courseIndex = selectionIndex++; // Assign and increment index
              return (
                <select
                  key={courseIndex}
                  value={selectedCourses[courseIndex] || ""}
                  onChange={(e) => {
                    setSelectedCourses((prev) => {
                      const newSelections = [...prev];
                      newSelections[courseIndex] = e.target.value;
                      return newSelections;
                    });
                  }}
                >
                  <option value="" disabled hidden>
                    Choose here
                  </option>
                  {categories[i].validSubjects.flatMap((subject) =>
                    (courseDataMap[subject] || []).map((course) => (
                      <option
                        key={course.subject + course.code}
                        value={course.subject + course.code}
                      >
                        {course.subject + course.code + " - " + course.title}
                      </option>
                    )),
                  )}
                </select>
              );
            },
          )}
        </Panel>,
      );

      if (currentRow.length === 3 || i === categories.length - 1) {
        rows.push(
          <PanelGroup key={i} direction="horizontal">
            {currentRow}
          </PanelGroup>,
        );
        currentRow = [];
      }
    }

    setPanelRows(rows);
  }, [courseDataMap, selectedCourses]); // Re-render when course data or selections change

  useEffect(() => {
    for (let requirement of BSCS.Requirements) {
      const found = requirement.courseIDs.some((r) =>
        selectedCourses.includes(r),
      );
      if (found) {
        requirement.met = true;
      } else {
        requirement.met = false;
      }
    }
    console.log(selectedCourses);
  }, [selectedCourses]);

  return (
    <>
      <PanelGroup direction={"vertical"}>{panelRows}</PanelGroup>
      <PanelGroup direction={"horizontal"}>
        <Panel className={classes.panel}>
          <h3>Requirements</h3>
          {BSCS.Requirements.map((value) => (
            <p
              key={value.description}
              style={{
                margin: 0,
                paddingTop: 0,
                marginBottom: 0,
                color: value.met ? "green" : "red",
              }}
            >
              {value.description}
            </p>
          ))}
        </Panel>
      </PanelGroup>
    </>
  );
}
