import {
  TableSectionDataType,
  TablesType,
} from "app-packages/types/persistent.types.ts";
import { convertTimeStringToInteger } from "../../../app-packages/util/time.utils.ts";
import { SectionType } from "app-packages/types/persistent.types.ts";

export function parseSectionData(results: any[]) {
  const timeTable: TablesType = {
    A: [[], [], [], [], []],
    B: [[], [], [], [], []],
    C: [[], [], [], [], []],
    D: [[], [], [], [], []],
  };

  for (const queryResult of results) {
    if (!queryResult.data) {
      return;
    }

    queryResult.data.sections.map((section: SectionType) => {
      section.meeting_day_patterns.split("-").map((day) => {
        if (
          !section.section_start_time.length ||
          !section.section_end_time.length
        ) {
          return;
        }

        const start = convertTimeStringToInteger(section.section_start_time);
        const end = convertTimeStringToInteger(section.section_end_time);
        const sectionTimes = timeTable[section.section_code[0]];

        if (!sectionTimes) {
          return;
        }

        determineSection(day, start, end, section, sectionTimes);
      });
    });
  }

  return timeTable;
}

function determineSection(
  day: string,
  start: number,
  end: number,
  section: SectionType,
  section_times: TableSectionDataType[][],
) {
  switch (day) {
    case "M":
      {
        section_times[0].push({ start: start, end: end, ...section });
      }
      break;
    case "T":
      {
        section_times[1].push({ start: start, end: end, ...section });
      }
      break;
    case "W":
      {
        section_times[2].push({ start: start, end: end, ...section });
      }
      break;
    case "R":
      {
        section_times[3].push({ start: start, end: end, ...section });
      }
      break;
    case "F":
      {
        section_times[4].push({ start: start, end: end, ...section });
      }
      break;
  }
}
