import { useContext, createContext, ReactNode } from "react";

import { fetchCourseXML } from "@/hooks/data-fetches.ts";
import { getAll, getAllSubjectsCategory } from "@/components/data-parse.util.ts"

const CourseContext = createContext<any>(null);

export const useCourseContext = () => {
  if (!CourseContext) {
    throw new Error("useCourseContext must be used within a <Course />");
  }
  return useContext(CourseContext);
};

type CourseProviderProps = {
  children: ReactNode;
};
export const CourseProvider = ({ children }: CourseProviderProps) => {
  const { status, data, error } = fetchCourseXML();

  if (status === "pending") {
    return <span>Loading...</span>
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>
  }

  const xmlDoc = new DOMParser().parseFromString(data, "text/xml");
  const subjects = getAll(xmlDoc);
  const category = getAllSubjectsCategory(xmlDoc);

  return (
    <CourseContext.Provider value={{
      xmlDoc: xmlDoc,
      subjects: subjects,
      category: category,
    }}>
      {children}
    </CourseContext.Provider>
  );
};