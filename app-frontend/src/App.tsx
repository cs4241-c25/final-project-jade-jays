import { BrowserRouter, Routes, Route } from "react-router-dom"; // Ensure this is from "react-router-dom"
import { MantineProvider, createTheme } from "@mantine/core"

import { CourseProvider } from "@/components/CourseProvider/CourseProvider.tsx"
import { AppLayout } from "@/components/AppLayout/AppLayout.tsx"
import { Courses } from "@/routes/Courses"
import { Schedule } from "@/routes/Schedule"

const theme = createTheme({
    activeClassName: '',
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
            "#a20125"
        ],
        gray:[
            "#fbf3f5",
            "#e7e7e7",
            "#cdcdcd",
            "#b2b2b2",
            "#9a9a9a",
            "#8b8b8b",
            "#848484",
            "#717171",
            "#656565",
            "#5c5557"
        ]
    },
    primaryColor: 'red'
});

export default function App() {
    return (
        <MantineProvider theme={theme}>
            <CourseProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AppLayout/>}>
                            <Route path={'/'} index element={<Courses/>} />
                            <Route path={'/schedule'} index element={<Schedule/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </CourseProvider>
        </MantineProvider>
    );
}