import { Text, ActionIcon, Box, Tooltip } from "@mantine/core";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import { useState, memo } from "react";
import { useClickOutside } from "@mantine/hooks";
import { useCourse } from "@/hooks/data-fetches.ts";
import { Plus } from "lucide-react";
import React from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import classes from "@/styles/courses.module.css";

type CourseListProp = {
  subject: string;
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType | undefined>>;
};

const CourseItemMemo = memo(CourseItem);
const TermButtonMemo = memo(TermButton);

export function CourseList({ subject, setCourse, ...props }: CourseListProp) {
  const { isPending, isError, data, error } = useCourse(subject);
  const [active, setActive] = useState("");
  const ref = useClickOutside<HTMLUListElement>(() => setActive(""));

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <ul className={classes.courseListContainer} ref={ref}>
        {data.courses
          ? data.courses.map((course: ClientCourseType, index: number) => (
              <CourseItemMemo
                key={index}
                course={course}
                setActive={setActive}
                setCourse={setCourse}
                {...props}
              />
            ))
          : undefined}
      </ul>
    </>
  );
}

type CourseItemProps<> = {
  course: ClientCourseType;
  active?: boolean;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType | undefined>>;
  style?: React.CSSProperties;
};

function CourseItem({
  course,
  setActive,
  setCourse,
  ...props
}: CourseItemProps) {
  const [status, setStatus] = useState<string>("not-available");

  return (
    <li
      className={classes.courseItem}
      onClick={() => {
        setActive(course._id);
        setCourse(course);
      }}
      {...props}
    >
      <ActionIcon className={`${classes.courseItemButton}`}>
        <Plus size={"1rem"} />
      </ActionIcon>
      <Text
        className={`${classes.courseItemSection} ${classes.courseCode}`}
        size={"sm"}
      >{`${course.subject} ${course.code}`}</Text>
      <div className={`${classes.termRibbon}`}>
        <TermButtonMemo status={status} term={"A"} course={course} {...props} />
        <TermButtonMemo status={status} term={"B"} course={course} {...props} />
        <TermButtonMemo status={status} term={"C"} course={course} {...props} />
        <TermButtonMemo status={status} term={"D"} course={course} {...props} />
      </div>
      <Text
        className={`${classes.courseItemSection} ${classes.courseTitle}`}
        size={"sm"}
      >{`${course.title}`}</Text>
    </li>
  );
}

type TermRibbonProps = {
  status: string;
  term: string;
  course: ClientCourseType;
};
function TermButton({ status, term, course, ...props }: TermRibbonProps) {
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
