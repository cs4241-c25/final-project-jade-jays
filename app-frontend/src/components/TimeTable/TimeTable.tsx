import { getTimeRange } from "./TTTimeUtils.ts";
import { RangeType } from "./TimeTable.types.ts";
import React from "react";

import useElementDimensions from "@/hooks/useElementDimensions.ts";
import classes from "./timetable.module.css";

type timeSectionType = {
  day: string;
  start: number;
  end: number;
};

interface TimeTableProps {
  title: string;
  colHeader: number[] | string[];
  defaultRange: RangeType;
  data: timeSectionType[][];
  style?: React.CSSProperties;
}

export function TimeTable({
  colHeader,
  defaultRange: { start, end },
  data,
}: TimeTableProps) {
  const { dimensions, ref } = useElementDimensions();
  const { height, width } = dimensions ?? {};

  const timeColWidth = 50;
  const headerRowHeight = 18;
  const borderSize = 0;
  const timeRange: string[] = getTimeRange(start, end);

  function Header() {
    return (
      <tr
        style={{
          height: `${headerRowHeight}px`,
        }}
      >
        <td></td>
        {width
          ? colHeader.map((day) => (
              <td
                key={day}
                style={{
                  width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
                }}
                className={classes.tableHeader}
              >
                {day}
              </td>
            ))
          : undefined}
      </tr>
    );
  }

  function TimeColumn() {
    return (
      <td
        style={{
          width: `${timeColWidth - borderSize}px`,
        }}
      >
        {height
          ? timeRange.map((time, index) => (
              <div
                key={time}
                className={classes.timeColumn}
                style={{
                  top: `${index * ((height - headerRowHeight - borderSize) / (end - start + 1)) + headerRowHeight}px`,
                  height: `${(height - headerRowHeight - borderSize) / (end - start + 1)}px`,
                  width: `${timeColWidth - borderSize}px`,
                }}
              >
                {time}
              </div>
            ))
          : undefined}
      </td>
    );
  }

  function DayColumns() {
    return width && height
      ? colHeader.map((col, index) => {
          let sections: React.ReactNode[] = [];
          if (data[index]) {
            sections = data[index].map((section) => {
              return (
                <div
                  key={index + section.day}
                  className={classes.section}
                  style={{
                    top: `${(section.end - section.start) * ((height - headerRowHeight) / (end - start + 1) - 2)}px`,
                    height: `${(section.end - section.start) * ((height - headerRowHeight) / (end - start + 1)) - 1}px`,
                    width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
                  }}
                ></div>
              );
            });
          }

          return (
            <td
              key={col + index.toString()}
              style={{
                width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
              }}
              className={classes.dayColumn}
            >
              <div
                style={{
                  display: "block",
                  position: "relative",
                }}
              >
                {sections}
              </div>
            </td>
          );
        })
      : undefined;
  }

  function BackgroundGrid() {
    return (
      <tr
        style={{
          height: "1px",
        }}
      >
        <td>
          {height && width
            ? timeRange.map((time, index) => (
                <div
                  key={time + index + Math.random().toString()}
                  className={classes.tableGrid}
                  style={{
                    top: `${index * ((height - headerRowHeight - borderSize) / (end - start + 1)) + headerRowHeight}px`,
                    left: `${timeColWidth}px`,
                    height: `${(height - headerRowHeight - borderSize) / (2 * (end - start + 1))}px`,
                    marginBottom: `${(height - headerRowHeight - borderSize) / (2 * (end - start + 1))}px`,
                    width: `${width - timeColWidth - borderSize}px`,
                  }}
                ></div>
              ))
            : undefined}
        </td>
      </tr>
    );
  }

  return (
    <div ref={ref} className={classes.tableContainer}>
      <table
        cellPadding={0}
        cellSpacing={0}
        style={{
          border: `${borderSize}px solid`,
        }}
        className={classes.table}
      >
        <tbody>
          <Header />
          <tr>
            <TimeColumn />
            <DayColumns />
          </tr>
          <BackgroundGrid />
        </tbody>
      </table>
    </div>
  );
}
