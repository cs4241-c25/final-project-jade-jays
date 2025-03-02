import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";
import { Grid } from "@mantine/core";

export function Schedule() {
  return (
    <Grid
      gutter={"sm"}
      style={{
        minHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
      }}
    >
      <Grid.Col span={12}>
        <TimeTable
          style={{
            minHeight:
              "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
          }}
          range={{ start: 8, end: 18 }}
        ></TimeTable>
      </Grid.Col>
      {/*<Grid.Col span={6}>*/}
      {/*  <TimeTable*/}
      {/*    style={{*/}
      {/*      minHeight:*/}
      {/*        "calc((100vh - var(--app-shell-header-height) - 4 * var(--app-shell-padding)) / 2)",*/}
      {/*    }}*/}
      {/*    range={{ start: 8, end: 18 }}*/}
      {/*  ></TimeTable>*/}
      {/*</Grid.Col>*/}
      {/*<Grid.Col span={6}>*/}
      {/*  <TimeTable*/}
      {/*    style={{*/}
      {/*      minHeight:*/}
      {/*        "calc((100vh - var(--app-shell-header-height) - 4 * var(--app-shell-padding)) / 2)",*/}
      {/*    }}*/}
      {/*    range={{ start: 8, end: 18 }}*/}
      {/*  ></TimeTable>*/}
      {/*</Grid.Col>*/}
      {/*<Grid.Col span={6}>*/}
      {/*  <TimeTable*/}
      {/*    style={{*/}
      {/*      minHeight:*/}
      {/*        "calc((100vh - var(--app-shell-header-height) - 4 * var(--app-shell-padding)) / 2)",*/}
      {/*    }}*/}
      {/*    range={{ start: 8, end: 18 }}*/}
      {/*  ></TimeTable>*/}
      {/*</Grid.Col>*/}
    </Grid>
  );
}