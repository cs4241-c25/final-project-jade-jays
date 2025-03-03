import React, { useState, useContext, createContext } from "react";
import { useLocalStorage } from "@mantine/hooks";

import { ClientCourseType } from "../../../../app-packages/types/persistent.types.ts";

export function createCourseContext() {
  return createContext<ClientCourseType>();
}

export function useCourseContext() {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("Components must be within a <Courses/>");
  }
  return context;
}

export function useCourseData() {
  const [currentCourse, setCurrentCourse] = useState<ClientCourseType>();
  const [value, setValue, removeValue] = useLocalStorage<{
    [key: string]: ClientCourseType;
  }>({
    key: "added_course_list",
    defaultValue: {},
  });

  function addCourseToList() {
    const newValue = value;
    if (!newValue[data._id] && currentCourse) {
      newValue[data._id] = currentCourse;
    }
    setValue(newValue);
  }

  function setCourse() {
    setCurrentCourse(data);
  }

  return {
    currentCourse,
    addedCoursesList: value,
    addCourseToList: addCourseToList,
    setCourse: setCourse,
  };
}

const CourseContext = createCourseContext();

export type CourseProviderProps = {
  subject: string;
  children: React.ReactNode;
};
export function CourseProvider({ subject, children }: CourseProviderProps) {
  return <CourseContext.Provider>{children}</CourseContext.Provider>;
}
