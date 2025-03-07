import { Text, ActionIcon, Box } from "@mantine/core";
import { useClickOutside, readLocalStorageValue, mergeRefs } from "@mantine/hooks";
import { memo } from "react";
import { Plus } from "lucide-react";
import React from "react";

import { ClientCourseType, SetLocalStorageValue } from "app-packages/types/persistent.types.ts";
import classes from "@/routes/Courses/courses.module.css";

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
  const ref = useClickOutside<HTMLUListElement>(() => setCourse(null));

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
  setCourse: React.Dispatch<React.SetStateAction<ClientCourseType>>;
  setAddedCourseList: SetLocalStorageValue<{ [key: string]: ClientCourseType }>;
  style?: React.CSSProperties;
};

function CourseItem({
  course,
  setCourse,
  setAddedCourseList,
}: CourseItemProps) {
  return (
    <li
      className={classes.courseItem}
      onClick={() => {
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
  innerRef?: React.ForwardedRef<HTMLDivElement>;
};
function TermButton({ term, course, innerRef, ...props }: TermRibbonProps) {
  const status = React.useMemo(() => getStatus(term, course), [term, course]);

  return (
    <Box
      ref={mergeRefs(hoverRef, dimensionRef)}
      mod={{ status: status }}
      className={`${classes.termButton}`}
      {...props}
    >
      {term}
    </Box>
  );
}

function getStatus(term: string, course: ClientCourseType) {
  if (term === course.academic_period[0]) {
    return "available";
  }

  const [seats, capacity] = course.enrolled_capacity.split("/");
  if (seats >= capacity) {
    return "under-waitlist";
  }

  return "not-available";
}