import { readLocalStorageValue } from "@mantine/hooks";
import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";
import React from "react";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { getAll } from "@/components/data-parse.util.ts"
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
      <SectionList  />
      <table cellPadding={0} cellSpacing={0}>
        <tbody>
          <tr>
            <td className={scheduleClasses.grid}>
              <TimeTable
                title={"A"}
                colHeader={[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                ]}
                defaultRange={{ start: 8, end: 18 }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}