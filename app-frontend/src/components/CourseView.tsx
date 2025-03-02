import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Text, Title, Box } from "@mantine/core";
import { useState } from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { CourseList } from "@/components/CourseList";
import classes from "@/styles/courses.module.css";

type CourseViewProp = {
  subject: string;
};

export function CourseView({ subject }: CourseViewProp) {
  const [currentCourse, setCurrentCourse] = useState<
    ClientCourseType | undefined
  >();

  return (
    <>
      <Panel
        style={{ overflow: "auto" }}
        className={classes.panel}
        id={"course-list"}
        minSize={0}
        order={2}
      >
        <CourseList subject={subject} setCourse={setCurrentCourse} />
      </Panel>
      <PanelResizeHandle className={classes.panelHandle} />
      <Panel id={"course-info-group"} defaultSize={25} minSize={0} order={3}>
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
            <Box>
              {currentCourse ? (
                <>
                  <Title order={5}>{currentCourse.title}</Title>
                  <Text size={"sm"}>
                    {returnDescription(currentCourse.description)}
                  </Text>
                </>
              ) : undefined}
            </Box>
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
    </>
  );
}

function returnDescription(description: string) {
  if (description === "") {
    return "No description";
  }

  return description;
}
