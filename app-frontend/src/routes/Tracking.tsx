import { Panel, PanelGroup } from "react-resizable-panels";
import { useEffect, useState } from "react";
import classes from "@/styles/tracking.module.css";
import {getCourseData, getCourseDataTracking} from "@/hooks/data-fetches.ts";
import { BSCS } from "../components/CSDegree.ts";
import {Requirement} from "@/components/DegreeLayout.ts";

if (!localStorage.getItem("selectedCourses")) {
  localStorage.setItem("selectedCourses", "");
}

export function localToArray() {
  const stored = localStorage.getItem("selectedCourses");
  if (stored) {
    const splitted = stored.split(";");
    const returnArray = [];
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[i] !== "undefined") {
        returnArray[i] = splitted[i];
      } else {
        returnArray[i] = undefined;
      }
    }
    console.log("Retrieved", returnArray);
    return returnArray;
  } else {
    return [];
  }
}

export function arrayToLocal(selectedCourses: string[]) {
  let transformed = "";
  for (let i = 0; i < selectedCourses.length; i++) {
    transformed += selectedCourses[i] + ";";
  }
  transformed = transformed.substring(0, transformed.length - 1);
  console.log("Original", selectedCourses);
  console.log("Sending", transformed);
  localStorage.setItem("selectedCourses", transformed);
}

export function Tracking() {
  const [panelRows, setPanelRows] = useState<JSX.Element[]>([]);
  const [categories, setCategories] = useState<Category[]>(BSCS.categories);
  const [courseDataMap, setCourseDataMap] = useState<Record<string, any[]>>({});
  const [selectedCourses, setSelectedCourses] = useState<string[]>(localToArray()); // Changed to an array

  async function createTrackingSheet() {
    try {
      const courseDataEntries = await Promise.all(
          categories.flatMap((category) =>
              category.validSubjects.map((subject) => getCourseDataTracking(subject)),
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
                              arrayToLocal(newSelections);
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

      if (currentRow.length === 4 || i === categories.length - 1) {
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
    for (const requirement of BSCS.Requirements) {
      handleRequirement(requirement)
    }
    console.log(selectedCourses);
    console.log(selectedCourses.filter(_ => true).length);
  }, [selectedCourses]);

  function handleRequirement(requirement: Requirement) {
    if (requirement.type === "choose1") {
      const found = requirement.courseIDs.some((r) =>
          selectedCourses.includes(r),
      );
      requirement.met = found;
    } else if (requirement.type === "studyArea") {
      let coursesTaken = 0;
      for (const level of requirement.levels) {
        for (const course of selectedCourses) {
          if (course !== undefined) {
            if (course.startsWith(level)) {
              coursesTaken++;
            }
          }
        }
        requirement.met = coursesTaken >= requirement.requiredClasses;
        if (requirement.met) {break}
        if (!requirement.overlap) {
          coursesTaken = 0;
        }
      }
    } else if (requirement.type === "parentRequirement") {
      for (const child of requirement.childRequirements) {
        handleRequirement(child)
        if (child.met) {
          requirement.met = true
          break
        }
        requirement.met = false;
      }
    } else if (requirement.type === "uniqueClasses") {
      const courseTitles: string[] = selectedCourses
          .filter((course) => course !== undefined)
          .map((course) => {
            const subject = course.substring(0, 2);
            const code = course.substring(2);
            const courseData = courseDataMap[subject]?.find((c) => c.code === code);
            return courseData?.title || "";
          })
          .filter((title) => title !== "");

      const uniqueTitles = new Set(courseTitles);
      requirement.met = uniqueTitles.size === courseTitles.length;
    } else if (requirement.type === "maxCourses") {
      const count = selectedCourses
          .filter((course) => course !== undefined)
          .filter((course) => course.startsWith(requirement.subject))
          .filter((course) => course.substring(2).startsWith(requirement.levelPrefix))
          .length;

      requirement.met = count <= requirement.maxAllowed;
    }
  }

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
