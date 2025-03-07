import { Text } from "@mantine/core";
import React from "react";

import { getTimeRangeArrayMilitaryFormat } from "app-packages/util/time.utils.ts";
import {
  RangeType,
  TableSectionDataType,
} from "app-packages/types/persistent.types.ts";
import { stringToDecimal } from "app-packages/util/util.ts";
import useElementDimensions from "@/hooks/use-element-dimensions.ts";
import classes from "./timetable.module.css";

interface TimeTableProps {
  title: string;
  colHeader: number[] | string[];
  defaultRange: RangeType;
  data: TableSectionDataType[][];
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
  const timeRange: string[] = getTimeRangeArrayMilitaryFormat(start, end);

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
          if (data[index] && data[index][0]) {
            const hash = stringToDecimal(data[index][0].course);
            let randomColor = Math.floor(hash * 16777215)
              .toString(16)
              .padStart(6, "0")
              .substring(0, 6);
            let hexColor = `#${randomColor}`;

            sections = data[index].map((section) => {
              return (
                <div
                  key={index + Math.random()}
                  className={classes.section}
                  style={{
                    top: `${(end - section.start) * ((height - headerRowHeight) / (end - start + 1)) - 3}px`,
                    height: `${(section.end - section.start) * ((height - headerRowHeight) / (end - start + 1))}px`,
                    width: `${(width - timeColWidth - borderSize) / colHeader.length}px`,
                    backgroundColor: hexColor,
                  }}
                >
                  <Text size={"xs"}>{section.course}</Text>
                  <Text size={"xs"}>
                    {section.section_start_time} - {section.section_end_time}
                  </Text>
                </div>
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