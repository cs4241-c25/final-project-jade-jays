import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { readLocalStorageValue } from "@mantine/hooks"
import React from 'react';

import { useCourseContext } from "@/components/CourseProvider.tsx"
import { useStateContext } from "@/components/StateProvider.tsx"
import { SubjectList } from "./SubjectList"
import { CoursesList } from "./CoursesList"
import { CourseInfo } from "./CourseInfo"
import { AddedCoursesList } from "@/routes/Courses/AddedCoursesList.tsx";
import panelClasses from "@/routes/panel.module.css"
import courseListClasses from "@/routes/Courses/Courses.module.css"

export function Courses() {
  const { xmlDoc, category } = useCourseContext();
  const { setStoredSubject, setAddedCourses } = useStateContext();
  const currentSubject = readLocalStorageValue<string>({ key: 'subject' });
  const [ selectedCourse, setSelectedCourse ] = React.useState<Element | null>(null);

  return (
    <PanelGroup
      style={{
        maxHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
        gap: "calc(var(--app-shell-padding)/4)",
      }}
      direction={"horizontal"}>
      <Panel
        style={{ overflow: "auto" }}
        className={`
          ${panelClasses.panel} 
          ${courseListClasses.subjectListContainer}
        `}
        defaultSize={15}
        order={1}>
        <SubjectList xmlDoc={xmlDoc} category={category} setStoredSubject={setStoredSubject} />
      </Panel>
      <PanelResizeHandle className={panelClasses.panelHandleVertical} />
      <Panel
        style={{ overflow: "auto" }}
        className={panelClasses.panel}
        order={2}>
        <CoursesList
          xmlDoc={xmlDoc}
          setAddedCourses={setAddedCourses}
          currentSubject={currentSubject}
          setSelectedCourse={setSelectedCourse}
        />
      </Panel>
      <PanelResizeHandle className={panelClasses.panelHandleVertical} />
      <Panel
        defaultSize={15}
        order={3}>
        <PanelGroup
          style={{ gap: "calc(var(--app-shell-padding)/4)" }}
          direction={"vertical"}>
          <Panel
            className={`
              ${panelClasses.panel} 
              ${courseListClasses.courseInfoContainer}
            `}
            defaultSize={70}
            order={4}>
            <CourseInfo
              selectedCourse={selectedCourse}
            />
          </Panel>
          <PanelResizeHandle className={panelClasses.panelHandleHorizontal} />
          <Panel
            className={panelClasses.panel}
            defaultSize={30}
            order={5}>
            <AddedCoursesList
              subject={currentSubject}
              setAddedCourses={setAddedCourses}
              setSelectedCourse={setSelectedCourse}
            />
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
}