import { readLocalStorageValue } from "@mantine/hooks";
import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";
import React from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { useStateContext } from "@/components/StateProvider.tsx";
import { SectionList } from "@/routes/Scheduler/SectionList";
import scheduleClasses from "./scheduler.module.css";

export function Scheduler() {
  const courseList = readLocalStorageValue({ key: "added_courses" });
  const { xmlDoc } = useStateContext();

  return (
    <div
      style={{
        display: "flex",
        maxHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
      }}
    >
      <style>{`
        :root {
          --schedule-list-width: 20rem;
        }
      `}</style>
      <SectionList data={} />
      {/*<table cellPadding={0} cellSpacing={0}>*/}
      {/*  <tbody>*/}
      {/*    <tr>*/}
      {/*      <td className={scheduleClasses.grid}>*/}
      {/*        {data && data.timeTable["A"] ? (*/}
      {/*          <TimeTable*/}
      {/*            title={"A"}*/}
      {/*            colHeader={[*/}
      {/*              "MONDAY",*/}
      {/*              "TUESDAY",*/}
      {/*              "WEDNESDAY",*/}
      {/*              "THURSDAY",*/}
      {/*              "FRIDAY",*/}
      {/*            ]}*/}
      {/*            data={data.timeTable["A"]}*/}
      {/*            defaultRange={{ start: 8, end: 18 }}*/}
      {/*          />*/}
      {/*        ) : undefined}*/}
      {/*      </td>*/}
      {/*      <td style={{ right: 0 }} className={scheduleClasses.grid}>*/}
      {/*        {data && data.timeTable["B"] ? (*/}
      {/*          <TimeTable*/}
      {/*            title={"B"}*/}
      {/*            colHeader={[*/}
      {/*              "MONDAY",*/}
      {/*              "TUESDAY",*/}
      {/*              "WEDNESDAY",*/}
      {/*              "THURSDAY",*/}
      {/*              "FRIDAY",*/}
      {/*            ]}*/}
      {/*            data={data.timeTable["B"]}*/}
      {/*            defaultRange={{ start: 8, end: 18 }}*/}
      {/*          />*/}
      {/*        ) : undefined}*/}
      {/*      </td>*/}
      {/*      <td style={{ bottom: 0 }} className={scheduleClasses.grid}>*/}
      {/*        {data && data.timeTable["C"] ? (*/}
      {/*          <TimeTable*/}
      {/*            title={"C"}*/}
      {/*            colHeader={[*/}
      {/*              "MONDAY",*/}
      {/*              "TUESDAY",*/}
      {/*              "WEDNESDAY",*/}
      {/*              "THURSDAY",*/}
      {/*              "FRIDAY",*/}
      {/*            ]}*/}
      {/*            data={data.timeTable["C"]}*/}
      {/*            defaultRange={{ start: 8, end: 18 }}*/}
      {/*          />*/}
      {/*        ) : undefined}*/}
      {/*      </td>*/}
      {/*      <td*/}
      {/*        style={{ bottom: 0, right: 0 }}*/}
      {/*        className={scheduleClasses.grid}*/}
      {/*      >*/}
      {/*        {data && data.timeTable["D"] ? (*/}
      {/*          <TimeTable*/}
      {/*            title={"D"}*/}
      {/*            colHeader={[*/}
      {/*              "MONDAY",*/}
      {/*              "TUESDAY",*/}
      {/*              "WEDNESDAY",*/}
      {/*              "THURSDAY",*/}
      {/*              "FRIDAY",*/}
      {/*            ]}*/}
      {/*            data={data.timeTable["D"]}*/}
      {/*            defaultRange={{ start: 8, end: 18 }}*/}
      {/*          />*/}
      {/*        ) : undefined}*/}
      {/*      </td>*/}
      {/*    </tr>*/}
      {/*  </tbody>*/}
      {/*</table>*/}
    </div>
  );
}