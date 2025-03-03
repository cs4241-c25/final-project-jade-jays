import { getTimeRange } from "./TTTimeUtils.ts";
import { RangeType } from "./TimeTable.types.ts";
import { Table } from "@mantine/core";
import React from "react";

import classes from "./timetable.module.css";

interface TimeTableProps {
  range: RangeType;
  style?: React.CSSProperties;
}

export function TimeTable({ range, style }: TimeTableProps) {
  function getCell(start: number, end: number) {
    const times = Array(end);
    for (let i = start; i < end + 1; i++) {
      times[i] = i;
    }

    return times.map((time) => (
      <Table.Tr key={time}>
        <Table.Td>{getMilitaryTimeFormat(time)}</Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
    ));
  }

  return (
    <Table style={style} className={classes.table}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Monday</Table.Th>
          <Table.Th>Tuesday</Table.Th>
          <Table.Th>Wednesday</Table.Th>
          <Table.Th>Thursday</Table.Th>
          <Table.Th>Friday</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{getCell(range.start, range.end)}</Table.Tbody>
    </Table>
  );
}

function getMilitaryTimeFormat(time: number) {
  if (time - 12 == 0) return `${time}:00 PM`;
  else if (time - 12 > 0) return `${time - 12}:00 PM`;
  return `${time}:00 AM`;
}
