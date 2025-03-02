import { Panel, PanelGroup } from "react-resizable-panels";
import { useEffect, useState } from "react";
import classes from "@/styles/tracking.module.css";
import { getCourseData } from "@/hooks/data-fetches.ts";
import { SidebarItem } from "@/components/SidebarItem.tsx";
import { ClientSubjectType } from "app-packages/types/persistent.types.ts";

export function Tracking() {
    const [panelsRows, setPanelRows] = useState([]);
    const [subjects, setSubjects] = useState(["67c2237ae95a42965244c0f2"]);
    const [subjectClasses, setSubjectClasses] = useState({});

    async function createTrackingSheet() {
        try {
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
            console.log(courseDataArray[0]);

            // Create panel rows after data is set
            const rows = [];
            let currentRow = [];
            for (let i = 0; i < subjects.length; i++) {
                currentRow.push(
                    <Panel key={subjects[i]} className={classes.panel}>
                        {subjects[i]}
                        <select>
                            {courseDataArray[i].map((courseData) => (
                                <option key={courseData} value={courseData}></option>
                            ))}
                        </select>
                    </Panel>
                );

                // Every 3 subjects, push a new PanelGroup and reset the row
                if (currentRow.length === 3 || i === subjects.length - 1) {
                    rows.push(
                        <PanelGroup key={i} direction="horizontal">
                            {currentRow}
                        </PanelGroup>
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