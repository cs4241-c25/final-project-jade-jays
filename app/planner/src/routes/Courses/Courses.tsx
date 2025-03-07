import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

import { SubjectList } from "./SubjectList"
import { CoursesList } from "./CoursesList"
import panelClasses from "@/routes/panel.module.css";
import courseListClasses from "@/routes/Courses/Courses.module.css";

export function Courses() {

  return (
    <PanelGroup
      style={{
        maxHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
        gap: "calc(var(--app-shell-padding)/4)",
      }}
      direction={"horizontal"}
    >
      <Panel
        style={{ overflow: "auto" }}
        className={`
          ${panelClasses.panel} 
          ${courseListClasses.subjectListContainer}
        `}
        defaultSize={15}
        minSize={12}
        order={1}
      >
        <SubjectList />
      </Panel>
      <PanelResizeHandle className={panelClasses.panelHandle} />
      <Panel
        style={{ overflow: "auto" }}
        className={panelClasses.panel}
        minSize={12}
        order={1}
      >
        <CoursesList />
      </Panel>
    </PanelGroup>
  );
}