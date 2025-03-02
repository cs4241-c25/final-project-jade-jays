import {Panel, PanelGroup, PanelResizeHandle} from "react-resizable-panels";
import { TimeTable } from "@/components/TimeTable/TimeTable.tsx";

import scheduleClasses from "./schedule.module.css";
import panelClasses from "@/routes/panel.module.css"

export function Schedule() {
  return (
    <PanelGroup
      style={{
        maxHeight:
          "calc(100vh - var(--app-shell-header-height) - 2 * var(--app-shell-padding))",
        gap: "calc(var(--app-shell-padding)/4)",
      }}
      direction={"horizontal"}
    >
      {/*<Panel*/}
      {/*  style={{*/}
      {/*    overflow: "auto",*/}
      {/*  }}*/}
      {/*  className={panelClasses.panel}*/}
      {/*  order={1}*/}
      {/*>*/}
      {/*  Main*/}
      {/*</Panel>*/}
      {/*<PanelResizeHandle className={panelClasses.panelHandle} />*/}
      <Panel
        style={{ overflow: "auto" }}
        className={panelClasses.panel}
        order={1}
      >
        <table cellPadding={0} cellSpacing={0}>
          <tbody>
          <tr>
            <td className={scheduleClasses.grid}>
              <TimeTable
                colHeader={[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                ]}
                range={{ start: 8, end: 18 }}
              ></TimeTable>
            </td>
            <td style={{ right: "0" }} className={scheduleClasses.grid}>
              <TimeTable
                colHeader={[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                ]}
                range={{ start: 8, end: 18 }}
              ></TimeTable>
            </td>
          </tr>
          <tr>
            <td style={{ bottom: "0" }} className={scheduleClasses.grid}>
              <TimeTable
                colHeader={[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                ]}
                range={{ start: 8, end: 18 }}
              ></TimeTable>
            </td>
            <td style={{ bottom: "0", right: "0" }} className={scheduleClasses.grid}>
              <TimeTable
                colHeader={[
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                ]}
                range={{ start: 8, end: 18 }}
              ></TimeTable>
            </td>
          </tr>
          </tbody>
        </table>
      </Panel>
    </PanelGroup>
  );
}