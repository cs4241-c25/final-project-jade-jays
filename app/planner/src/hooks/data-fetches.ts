import { useQuery, useQueries } from "@tanstack/react-query";
import axios from "axios";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { parseSectionData } from "./data-fetches.util.ts";

export function getSubjectData() {
  return useQuery({
    queryKey: ["subject"],
    queryFn: () =>
      axios
        .get("http://localhost:8080/api/subject/all")
        .then((res) => res.data),
  });
}

export async function fetchCourseData(subject_id: string) {
  const res = await axios.get(
    `http://localhost:8080/api/course/code:${subject_id}`,
  );
  return res.data;
}

export function getCourseData(subject: string) {
  return useQuery({
    queryKey: [`section${subject}`],
    queryFn: () => fetchCourseData(subject),
  });
}

export async function getCourseDataTracking(subject_id: string) {
  const res = await axios.get(
      `http://localhost:8080/api/course/code:${subject_id}`,
  );
  return res.data;
}

export function getSectionData(data: { [key: string]: ClientCourseType }) {
  return useQueries({
    queries: Object.values(data).map((course: ClientCourseType) => {
      return {
        queryKey: [`section${course._id}${course.subject}-${course.code}`],
        queryFn: () =>
          axios
            .get(
              `http://localhost:8080/api/section/code:${course.subject}-${course.code}`,
            )
            .then((res) => res.data),
      };
    }),
    combine: (results) => {
      return {
        data: parseSectionData(results),
        isPending: results.some((result) => result.isPending),
        isError: results.some((result) => result.isError),
        error: results.some((result) => result.error),
      };
    },
  });
}

export async function getCourseObject(subject_id: string, code_id: string) {
  const res = await axios.get(
    `http://localhost:8080/api/singlecourse/:${subject_id},${code_id}`,
  );
  return res.data.course[0];
}
