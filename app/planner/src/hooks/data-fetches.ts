import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function fetchCourseXML() {
  return useQuery({
    queryKey: ["subject"],
    queryFn: () =>
      axios({
        url: "http://localhost:8080/api/data/all", // for local use!!
        method: "get",
        headers: {
          "Content-Type": "application/xml",
        }
      }).then((res) => res.data),
    enabled: true,
    retry: 4,
  });
}