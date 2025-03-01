import { Text, UnstyledButton } from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";
import { useCourse } from "@/hooks/data-fetches.ts";
import React from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import classes from "@/styles/courses.module.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useState } from "react";

type CourseViewProp = {
  subject: string;
};

type CourseListProp = {
  subject: string;
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType | undefined>>;
};

export function CourseView({ subject }: CourseViewProp) {
  const [currentCourse, setCurrentCourse] = useState<
    ClientCourseType | undefined
  >();

  return (
    <>
      <Panel
        style={{
          overflow: "auto",
        }}
        className={classes.panel}
        id={"course-list"}
        minSize={0}
        order={2}
      >
        <CourseList subject={subject} setCourse={setCurrentCourse} />
      </Panel>
      <PanelResizeHandle className={classes.panelHandle} />
      <Panel
        id={"course-info-group"}
        defaultSize={25}
        minSize={0}
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
            <Text size={"sm"}>
              {currentCourse
                ? returnDescription(currentCourse.description)
                : undefined}
            </Text>
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

function CourseList({ subject, setCourse, ...props }: CourseListProp) {
  const { isPending, isError, data, error } = useCourse(subject);
  const [active, setActive] = useState("");
  const ref = useClickOutside<HTMLDivElement>(() => setActive(""));

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <div ref={ref}>
        {data.courses
          ? data.courses.map((course: ClientCourseType) => {
              return (
                <CourseItem
                  key={course._id}
                  course={course}
                  active={active === course._id}
                  setActive={setActive}
                  setCourse={setCourse}
                  {...props}
                />
              );
            })
          : undefined}
      </div>
    </>
  );
}

type CourseItemProps<> = {
  course: ClientCourseType;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType | undefined>>;
};

function CourseItem({
  course,
  active,
  setActive,
  setCourse,
  ...props
}: CourseItemProps) {
  return (
    <UnstyledButton
      className={classes.courseItem}
      mod={active ? { active: true } : undefined}
      onClick={() => {
        setActive(course._id);
        setCourse(course);
      }}
      {...props}
    >
      <Text
        className={classes.courseCode}
        size={"sm"}
      >{`${course.subject} ${course.code}`}</Text>
      <Text size={"sm"}>{`${course.title}`}</Text>
    </UnstyledButton>
  );
}

function returnDescription(description: string) {
  if (description === "") {
    return "No description";
  }

  return description;
}