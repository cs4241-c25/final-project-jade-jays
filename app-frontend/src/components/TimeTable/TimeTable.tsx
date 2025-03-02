import { getTimeRange } from "./TTTimeUtils.ts";
import { RangeType } from "./TimeTable.types.ts";
import React from "react";

import useElementDimensions from "@/hooks/useElementDimensions.ts";
import classes from "./timetable.module.css";

interface TimeTableProps {
  colHeader: number[] | string[];
  range: RangeType;
  style?: React.CSSProperties;
}

export function TimeTable({
  colHeader,
  range: { start, end },
}: TimeTableProps) {
  const { dimensions, ref } = useElementDimensions();
  const { x, y, height, width } = dimensions ?? {};
  const timeColWidth = 50,  headerRowHeight = 18; const borderSize = 0;
  const timeRange: string[] = getTimeRange(start, end);

  console.log(width, height, x, y);

  return (
    <div ref={ref} className={classes.tableContainer}>
      <table
        cellPadding={0}
        cellSpacing={0}
        style={{
          border: `${borderSize}px solid`,
        }}
        className={classes.table}>
        <tbody>
        {/* header */}
        <tr
          style={{
            height: `${headerRowHeight}px`,
          }}
        >
          <td></td>
          {width
            ? colHeader.map((time, index) => (
              <td
                key={time + index.toString() + Math.random().toString()}
                style={{
                  width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
                  textAlign: "center",
                }}
                className={classes.tableHeader}
              >
                {time}
              </td>
            ))
            : undefined}
        </tr>
        {/* time column */}
        <tr>
          <td
            style={{
              width: `${timeColWidth - borderSize}px`,
            }}
          >
            {height
              ? timeRange.map((time, index) => (
                <div
                  key={time + index + Math.random().toString()}
                  className={classes.timeColumn}
                  style={{
                    top: `${index * ((height - headerRowHeight - 1 - borderSize) / (end - start + 1)) + headerRowHeight}px`,
                    height: `${(height - headerRowHeight - 1 - borderSize) / (end - start + 1)}px`,
                    width: `${timeColWidth - borderSize}px`,
                  }}
                >
                  {time}
                </div>
              ))
              : undefined}
          </td>
          {width
            ? colHeader.map((col, i) => (
              <td
                key={col + i.toString()}
                style={{
                  width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
                }}
              ></td>
            ))
            : undefined}
        </tr>
        {/* grid */}
        <tr
          style={{
            height: '1px'
          }}
        >
          <td>
            {(height && width && x && y)
              ? timeRange.map((time, index) => (
                <div
                  key={time + index + Math.random().toString()}
                  className={classes.timeColumn}
                  style={{
                    top: `${index * ((height - 1 - headerRowHeight - borderSize) / (end - start + 1)) + headerRowHeight}px`,
                    left: `${timeColWidth}px`,
                    height: `${(height - headerRowHeight - 1 - borderSize) / (2 * (end - start + 1))}px`,
                    marginBottom: `${(height - headerRowHeight - 1 - borderSize) / (2 * (end - start + 1))}px`,
                    width: `${width - timeColWidth - borderSize}px`,
                  }}
                >
                </div>
              ))
              : undefined}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}