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
    `http://localhost:8080/api/course/id:${subject_id}`,
  );
  return res.data;
}

export function useCourse(subject_id: string) {
  return useQuery({
    queryKey: [`course${subject_id}`],
    queryFn: () => getCourseData(subject_id),
  });
}
