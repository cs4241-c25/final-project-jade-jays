import { readLocalStorageValue } from "@mantine/hooks";
import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";
import { useState } from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { getSectionData } from "@/hooks/data-fetches.ts";
import { SectionList } from "@/routes/Schedule/SectionList";
import scheduleClasses from "./schedule.module.css";

export function Schedule() {
  const value: { [key: string]: ClientCourseType } = readLocalStorageValue({
    key: "added_course_list",
  });
  const { data, isPending, isError } = getSectionData(value);

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

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
      <SectionList data={data} />
      <table cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td className={scheduleClasses.grid}>
              {data && data["A"] ? (
                <TimeTable
                  title={"A"}
                  colHeader={[
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                  ]}
                  data={data["A"]}
                  defaultRange={{ start: 8, end: 18 }}
                />
              ) : undefined}
            </td>
            <td style={{ right: 0 }} className={scheduleClasses.grid}>
              {data && data["B"] ? (
                <TimeTable
                  title={"B"}
                  colHeader={[
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                  ]}
                  data={data["B"]}
                  defaultRange={{ start: 8, end: 18 }}
                />
              ) : undefined}
            </td>
            <td style={{ bottom: 0 }} className={scheduleClasses.grid}>
              {data && data["C"] ? (
                <TimeTable
                  title={"C"}
                  colHeader={[
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                  ]}
                  data={data["C"]}
                  defaultRange={{ start: 8, end: 18 }}
                />
              ) : undefined}
            </td>
            <td
              style={{ bottom: 0, right: 0 }}
              className={scheduleClasses.grid}
            >
              {data && data["D"] ? (
                <TimeTable
                  title={"D"}
                  colHeader={[
                    "MONDAY",
                    "TUESDAY",
                    "WEDNESDAY",
                    "THURSDAY",
                    "FRIDAY",
                  ]}
                  data={data["D"]}
                  defaultRange={{ start: 8, end: 18 }}
                />
              ) : undefined}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
