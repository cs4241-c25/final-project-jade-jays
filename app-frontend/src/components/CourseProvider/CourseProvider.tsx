import { createContext, useContext, useEffect, useState } from "react";
import { CourseProviderProps } from "./CourseProvider.types.ts";
import axios from "axios";

export interface CourseContext {}

const CourseContext = createContext<CourseContext>({});

export function useCourseContext() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }: CourseProviderProps) {
  const [serverURL] = useState<string>("http://localhost:8080/api/course/all");
  const [courseData, setCourseData] = useState<CourseContext>({});

  useEffect(() => {
    axios({
      method: "get",
      url: serverURL,
      responseType: "json",
    })
      .then((res) => {
        console.log(res.data);
        setCourseData(res.data);
      })
      .catch((err) => console.log(err));
  }, [serverURL]);

  return (
    <CourseContext.Provider value={courseData}>
      {children}
    </CourseContext.Provider>
  );
}
