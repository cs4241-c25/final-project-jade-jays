import { getTimeRange } from "./TTTimeUtils.ts";
import { RangeType } from "./TimeTable.types.ts";
import { Table } from "@mantine/core";
import classes from "../../styles/timetable.module.css";

interface TimeTableProps {
  range: RangeType;
}

export function TimeTable({ range }: TimeTableProps) {
  const { start, end } = range;

  function getCell(start: number, end: number) {
    const times = ["8", "9", "10", "11"];
    return times.map((time) => (
      <Table.Tr key={time}>
        <Table.Td>{time}</Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
        <Table.Td></Table.Td>
      </Table.Tr>
    ));
  }

  return (
    <Table className={classes.table}>
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
      <Table.Tbody>{getCell(start, end)}</Table.Tbody>
    </Table>
  );
}
