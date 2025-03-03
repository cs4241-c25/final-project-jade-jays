import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure this is from "react-router-dom"
import { MantineProvider, createTheme } from "@mantine/core";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { AppLayout } from "@/components/AppLayout/AppLayout.tsx";
import { Courses } from "@/routes/Courses/Courses.tsx";
import { Schedule } from "@/routes/Schedule/Schedule.tsx";
import { Tracking } from "@/routes/Tracking";
import { FlowChart } from "@/routes/FlowChart/FlowChart.tsx";

const theme = createTheme({
  activeClassName: "",
  colors: {
    red: [
      "#ffeaef",
      "#fbd4da",
      "#f4a5b2",
      "#ef7488",
      "#ea4b64",
      "#e8324d",
      "#e82542",
      "#ce1934",
      "#b9112d",
      "#a20125",
    ],
    gray: [
      "#fbf3f5",
      "#e7e7e7",
      "#cdcdcd",
      "#b2b2b2",
      "#9a9a9a",
      "#8b8b8b",
      "#848484",
      "#717171",
      "#656565",
      "#5c5557",
    ],
  },
  primaryColor: "red",
});

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path={"/"} index element={<Courses />} />
              <Route path={"/schedule"} index element={<Schedule />} />
              <Route path={"/tracking"} index element={<Tracking />} />
              <Route path={"/flow"} index element={<FlowChart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </MantineProvider>
  );
}
