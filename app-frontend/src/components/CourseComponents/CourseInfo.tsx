import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { Box, Text, Title, ActionIcon } from "@mantine/core";
import { readLocalStorageValue } from "@mantine/hooks";
import { Minus } from "lucide-react";

import {
  ClientCourseType,
  setLocalStorageValue,
} from "app-packages/types/persistent.types.ts";
import { TermButtonMemo } from "@/components/CourseComponents/CourseList.tsx";
import classes from "@/styles/courses.module.css";

type CourseInfoProps = {
  status: string;
  course: ClientCourseType | undefined;
  setAddedCourseList: setLocalStorageValue<{ [key: string]: ClientCourseType }>;
};
export function CourseInfo({
  status,
  course,
  setAddedCourseList,
}: CourseInfoProps) {
  return (
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
        {status === "isLoading" ? (
          <span>Loading...</span>
        ) : status === "isError" ? (
          <span>Error</span>
        ) : (
          <Box>
            {course ? (
              <>
                <Title order={5}>{course.title}</Title>
                <Text size={"sm"}>{returnDescription(course.description)}</Text>
              </>
            ) : undefined}
          </Box>
        )}
      </Panel>
      <PanelResizeHandle className={classes.panelHandle} />
      <Panel
        className={classes.panel}
        id={"courses-added"}
        defaultSize={30}
        minSize={15}
        order={1}
      >
        <AddedCourseList setAddedCourseList={setAddedCourseList} />
      </Panel>
    </PanelGroup>
  );
}

type AddedCourseListProps = {
  setAddedCourseList: setLocalStorageValue<{ [key: string]: ClientCourseType }>;
};
function AddedCourseList({ setAddedCourseList }: AddedCourseListProps) {
  const value = readLocalStorageValue<{ [key: string]: ClientCourseType }>({
    key: "added_course_list",
  });

  return (
    <>
      {value
        ? Object.entries(value).map(([key, course]) => {
            return (
              <AddedCourseListItem
                key={key}
                course={course}
                setAddedCourseList={setAddedCourseList}
              />
            );
          })
        : undefined}
    </>
  );
}

type AddedCourseListItemProps = {
  course: ClientCourseType;
  setAddedCourseList: setLocalStorageValue<{ [key: string]: ClientCourseType }>;
};
function AddedCourseListItem({
  course,
  setAddedCourseList,
}: AddedCourseListItemProps) {
  return (
    <div>
      <li className={classes.courseItem}>
        <ActionIcon
          className={`${classes.courseItemButton}`}
          onClick={() => {
            const newValue = readLocalStorageValue<{
              [key: string]: ClientCourseType;
            }>({
              key: "added_course_list",
            });
            delete newValue[course._id];
            setAddedCourseList(newValue);
          }}
        >
          <Minus size={"1rem"} />
        </ActionIcon>
        <Text
          className={`${classes.courseItemSection} ${classes.courseCode}`}
          size={"sm"}
        >{`${course.subject} ${course.code}`}</Text>
        <div className={`${classes.termRibbon}`}>
          <TermButtonMemo term={"A"} course={course} />
          <TermButtonMemo term={"B"} course={course} />
          <TermButtonMemo term={"C"} course={course} />
          <TermButtonMemo term={"D"} course={course} />
        </div>
      </li>
    </div>
  );
}

function returnDescription(description: string) {
  if (description === "") {
    return "No description";
  }

  return description;
}
