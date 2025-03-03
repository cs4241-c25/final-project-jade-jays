import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { readLocalStorageValue } from "@mantine/hooks";
import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { getSectionData } from "@/hooks/data-fetches.ts";
import scheduleClasses from "./schedule.module.css";
import panelClasses from "@/routes/panel.module.css";

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
    <PanelGroup
      style={{
        maxHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
      }}
      direction={"horizontal"}
    >
      <Panel
        style={{ overflow: "auto" }}
        className={panelClasses.panel}
        order={1}
      >
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
                  ></TimeTable>
                ) : undefined}
              </td>
            </tr>
          </tbody>
        </table>
      </Panel>
    </PanelGroup>
  );
}