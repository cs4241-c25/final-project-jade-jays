import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useState } from "react";

import { ClientSubjectType } from "app-packages/types/persistent.types.ts";
import { useSubject } from "@/hooks/data-fetches.ts";
import { CourseList } from "@/components/CourseList";
import { SidebarItem } from "@/components/SidebarItem";

import classes from "@/styles/courses.module.css";

export function Courses() {
  const [currentSubject, setCurrentSubject] = useState(
    "67c167c36a03c8261f15d9c8",
  );
  const { isPending, isError, data, error } = useSubject();

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
        style={{
          overflow: "auto",
        }}
        className={classes.panel}
        defaultSize={15}
        minSize={12}
        maxSize={20}
        order={1}
      >
        {data.subjects
          ? data.subjects.map((subject: ClientSubjectType) => {
              return (
                <SidebarItem
                  key={subject.type}
                  subject={subject}
                  onClick={() => setCurrentSubject(subject._id)}
                />
              );
            })
          : undefined}
      </Panel>
      <PanelResizeHandle className={classes.panelHandle} />
      <Panel
        style={{
          overflow: "auto",
        }}
        className={classes.panel}
        id={"course-list"}
        minSize={25}
        order={2}
      >
        <CourseList subject={currentSubject} />
      </Panel>
      <PanelResizeHandle className={classes.panelHandle} />
      <Panel
        id={"course-info-group"}
        defaultSize={15}
        maxSize={25}
        minSize={15}
        order={3}
      >
        <PanelGroup
          style={{ gap: "calc(var(--app-shell-padding)/4)" }}
          direction={"vertical"}
        >
          <Panel
            className={classes.panel}
            id={"course-description"}
            defaultSize={70}
            minSize={70}
            order={1}
          >
            Main
          </Panel>
          <PanelResizeHandle className={classes.panelHandle} />
          <Panel
            className={classes.panel}
            id={"courses-added"}
            defaultSize={30}
            minSize={15}
            order={1}
          >
            Main
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
}
