import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useSubject() {
  return useQuery({
    queryKey: ["subject"],
    queryFn: () =>
      axios
        .get("http://localhost:8080/api/subject/all")
        .then((res) => res.data),
  });
}

export async function getCourseData(subject_id: string) {
  const res = await axios.get(
    `http://localhost:8080/api/course/code:${subject_id}`,
  );
  return res.data;
}

export function useCourse(subject: string) {
  return useQuery({
    queryKey: [`course${subject}`],
    queryFn: () => getCourseData(subject),
  });
}

export async function getCourseObject(subject_id: string, code_id: string) {
  const res = await axios.get(
      `http://localhost:8080/api/singlecourse//${subject_id},${code_id}`,
  );
  return res.data;
}

export async function getCourse(subject: string, code: string) {
  return useQuery({
    queryKey: [`course${subject}`],
    queryFn: () => getCourseObject(subject, code),
  });
}
