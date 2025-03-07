import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function fetchCourseXML() {
  return useQuery({
    queryKey: ["subject"],
    queryFn: () =>
      axios({
        url: "/api/data/all",
        method: "get",
        headers: {
          "Content-Type": "application/xml",
        }
      }).then((res) => res.data),
    enabled: true,
    retry: 4,
  });
}