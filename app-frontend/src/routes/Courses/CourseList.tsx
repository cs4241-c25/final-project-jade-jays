import { Text, ActionIcon, Box, Tooltip } from "@mantine/core";
import { useClickOutside, readLocalStorageValue, useHover } from "@mantine/hooks";
import { useState, memo } from "react";
import { Plus } from "lucide-react";
import React from "react";

import {
  ClientCourseType,
  SetLocalStorageValue,
} from "app-packages/types/persistent.types.ts";
import classes from "@/routes/Courses/courses.module.css";
import useElementDimensions from "@/hooks/use-element-dimensions.ts";

export const CourseListMemo = memo(CourseList);
export const CourseItemMemo = memo(CourseItem);
export const TermButtonMemo = memo(TermButton);

type CourseListProp = {
  status: string;
  data: { courses: ClientCourseType[] };
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType>>;
  setAddedCourseList: SetLocalStorageValue<{ [key: string]: ClientCourseType }>;
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
  setAddedCourseList: SetLocalStorageValue<{ [key: string]: ClientCourseType }>;
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

const mergeRefs = (...refs) => {
  return node => {
    for (const ref of refs) {
      ref.current = node
    }
  }
}

type TermRibbonProps = {
  term: string;
  course: ClientCourseType;
  innerRef?: React.ForwardedRef<HTMLDivElement>;
};
function TermButton({ term, course, innerRef, ...props }: TermRibbonProps) {
  const { hovered, ref: hoverRef } = useHover();
  const { dimensions, ref: dimensionRef } = useElementDimensions();
  const { x, y } = dimensions ?? {};

  const status = React.useMemo(
    () => getStatus(term, course),
    [term, course]
  );

  return (
    <Box
      ref={mergeRefs(hoverRef, dimensionRef)}
      mod={{ status: status }}
      className={`${classes.termButton}`}
      {...props}
    >
      {term}
      {hovered ? (
        <div
          className={classes.tooltip}
          style={{
            top: `calc(${y}px + 2.25rem)`,
            left: `calc(${x}px + 0.25rem)`,
          }}>
          <Text size={"xs"}>
            {getTooltipDescription(status, term)}
          </Text>
        </div>
      ) : undefined}
    </Box>
  );
}

function getStatus(term: string, course: ClientCourseType) {
  if (term === course.academic_period[0]) {
    return 'available';
  }

  const [seats, capacity] = course.enrolled_capacity.split("/");
  if (seats >= capacity) {
    return 'under-waitlist';
  }

  return 'not-available';
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