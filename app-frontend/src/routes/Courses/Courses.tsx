import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";
import { useLocalStorage } from "@mantine/hooks";

import { ClientSubjectType } from "app-packages/types/persistent.types.ts";
import { getSubjectData } from "@/hooks/data-fetches.ts";
import { SidebarItem } from "@/routes/Courses/SidebarItem.tsx";
import { CourseView } from "@/routes/Courses/CourseView.tsx";

import panelClasses from "@/routes/panel.module.css";

export function Courses() {
  const [currentSubject, setCurrentSubject] = useLocalStorage({
    key: "subject",
    defaultValue: "ACC",
  });
  const { isPending, isError, data, error } = getSubjectData();

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
        className={panelClasses.panel}
        defaultSize={15}
        minSize={12}
        order={1}
      >
        {data.subjects
          ? data.subjects.map((subject: ClientSubjectType) => {
              return (
                <SidebarItem
                  key={subject._id}
                  subject={subject}
                  onClick={() => setCurrentSubject(subject.code)}
                />
              );
            })
          : undefined}
      </Panel>
      <PanelResizeHandle className={panelClasses.panelHandle} />
      <CourseView />
    </PanelGroup>
  );
}
