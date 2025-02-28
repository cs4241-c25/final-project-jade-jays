import { useCourse } from "@/hooks/data-fetches.ts";
import { Text, UnstyledButton } from "@mantine/core";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import classes from "@/styles/courses.module.css";

type CourseListProp = {
  subject: string;
};

export function CourseList({ subject, ...props }: CourseListProp) {
  const { isPending, isError, data, error } = useCourse(subject);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {data.courses
        ? data.courses.map((course: ClientCourseType) => {
            return (
              <UnstyledButton
                key={course._id}
                className={classes.sidebarPanelItem}
                {...props}
              >
                <Text size={"sm"}>{`${course.code}`}</Text>
              </UnstyledButton>
            );
          })
        : undefined}
    </>
  );
}
