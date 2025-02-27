import { useCourseContext } from "@/components/CourseProvider/CourseProvider";
import { TimeTable } from "@/components/TimeTable/TimeTable";
import { Grid } from '@mantine/core'

export function Schedule() {
    const courses = useCourseContext();

    return (
        <div style={{
            minHeight: "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
        }}>
            <Grid gutter={"sm"}>
                <Grid.Col span={6}>
                    <TimeTable
                        range={{start: 8, end: 18}}
                    ></TimeTable>
                </Grid.Col>
                <Grid.Col span={6}>
                    <TimeTable
                        range={{start: 8, end: 18}}
                    ></TimeTable>
                </Grid.Col>
            </Grid>
        </div>
    );
}