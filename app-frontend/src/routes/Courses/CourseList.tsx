import { Text, ActionIcon, Box } from "@mantine/core";
import { useClickOutside, readLocalStorageValue } from "@mantine/hooks";
import { useState, memo } from "react";
import { Plus } from "lucide-react";
import React from "react";

import {
  ClientCourseType,
  setLocalStorageValue,
} from "../../../../app-packages/types/persistent.types.ts";
import classes from "@/routes/Courses/courses.module.css";

export const CourseListMemo = memo(CourseList);
export const CourseItemMemo = memo(CourseItem);
export const TermButtonMemo = memo(TermButton);

type CourseListProp = {
  status: string;
  data: { courses: ClientCourseType[] };
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType>>;
  setAddedCourseList: setLocalStorageValue<{ [key: string]: ClientCourseType }>;
};

function CourseList({
  status,
  data,
  setCourse,
  setAddedCourseList,
}: CourseListProp) {
  const [active, setActive] = useState("");
  const ref = useClickOutside<HTMLUListElement>(() => setActive(""));

  return (
    <>
      <ul className={classes.courseListContainer} ref={ref}>
        {status === "isLoading" ? (
          <span>Loading...</span>
        ) : status === "isError" ? (
          <span>Error</span>
        ) : data ? (
          data.courses.map((course: ClientCourseType, index: number) => (
            <CourseItemMemo
              key={index}
              course={course}
              setActive={setActive}
              setCourse={setCourse}
              setAddedCourseList={setAddedCourseList}
            />
          ))
        ) : undefined}
      </ul>
    </>
  );
}

type CourseItemProps<> = {
  course: ClientCourseType;
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType>>;
  setAddedCourseList: setLocalStorageValue<{ [key: string]: ClientCourseType }>;
  style?: React.CSSProperties;
};

function CourseItem({
  course,
  setActive,
  setCourse,
  setAddedCourseList,
}: CourseItemProps) {
  return (
    <li
      className={classes.courseItem}
      onClick={() => {
        setActive(course._id);
        setCourse(course);
      }}
    >
      <ActionIcon
        className={`${classes.courseItemButton}`}
        onClick={() => {
          const newValue = readLocalStorageValue<{
            [key: string]: ClientCourseType;
          }>({ key: "added_course_list" });
          if (!newValue[course._id]) {
            newValue[course._id] = course;
            setAddedCourseList(newValue);
          }
        }}
      >
        <Plus size={"1rem"} />
      </ActionIcon>
      <Text
        className={`${classes.courseItemSection} ${classes.courseCode}`}
        size={"sm"}
      >
        {`${course.subject} ${course.code}`}
      </Text>
      <div className={`${classes.termRibbon}`}>
        <TermButtonMemo term={"A"} course={course} />
        <TermButtonMemo term={"B"} course={course} />
        <TermButtonMemo term={"C"} course={course} />
        <TermButtonMemo term={"D"} course={course} />
      </div>
      <Text
        className={`${classes.courseItemSection} ${classes.courseTitle}`}
        size={"sm"}
      >
        {`${course.title}`}
      </Text>
    </li>
  );
}

type TermRibbonProps = {
  term: string;
  course: ClientCourseType;
};
function TermButton({ term, course, ...props }: TermRibbonProps) {
  const [status, setStatus] = useState<string>("not-available");

  return (
    <Box
      mod={{ status: status }}
      className={`${classes.termButton}`}
      {...props}
    >
      {term}
    </Box>
  );
}

function getTooltipDescription(status: string, term: string) {
  let label = "";
  switch (status) {
    case "available":
      {
        label = `Course is available for ${term} Term`;
      }
      break;
    case "not-available":
      {
        label = `Course not offered for ${term} Term`;
      }
      break;
    case "under-waitlist":
      {
        label = `There are no seats left for ${term} Term `;
      }
      break;
    case "closed":
      {
        label = "";
      }
      break;
  }
  return label;
}
