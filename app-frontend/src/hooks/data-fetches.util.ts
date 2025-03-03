import {
  TableSectionDataType,
  TablesType,
  SectionType,
} from "app-packages/types/persistent.types.ts";
import { convertTimeStringToInteger } from "app-packages/util/time.utils.ts";

export function parseSectionData(results: any[]) {
  const timeTable: TablesType = {
    A: [[], [], [], [], []],
    B: [[], [], [], [], []],
    C: [[], [], [], [], []],
    D: [[], [], [], [], []],
  };
  const sectionList: SectionType[][] = [];

  for (const queryResult of results) {
    if (!queryResult.data) {
      return;
    }

    const course: SectionType[] = [];
    queryResult.data.sections.map((sectionData: SectionType, index) => {
      course.push(sectionData);
      sectionData.meeting_day_patterns.split("-").map((day) => {
        if (
          !sectionData.section_start_time.length ||
          !sectionData.section_end_time.length
        ) {
          return;
        }

        const start = convertTimeStringToInteger(
          sectionData.section_start_time,
        );
        const end = convertTimeStringToInteger(sectionData.section_end_time);
        const sectionTimes = timeTable[sectionData.section_code[0]];

        if (!sectionTimes) {
          return;
        }

        determineSection(day, start, end, sectionData, sectionTimes);
      });
    });

    sectionList.push(course);
  }

  return {
    timeTable,
    sectionList: sectionList,
  };
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
        const currentSection = { start: start, end: end, ...section };
        if (checkConflictingTimes(currentSection, section_times[0])) {
          break;
        }
        section_times[0].push(currentSection);
      }
      break;
    case "T":
      {
        const currentSection = { start: start, end: end, ...section };
        if (checkConflictingTimes(currentSection, section_times[1])) {
          break;
        }
        section_times[1].push(currentSection);
      }
      break;
    case "W":
      {
        const currentSection = { start: start, end: end, ...section };
        if (checkConflictingTimes(currentSection, section_times[2])) {
          break;
        }
        section_times[2].push(currentSection);
      }
      break;
    case "R":
      {
        const currentSection = { start: start, end: end, ...section };
        if (checkConflictingTimes(currentSection, section_times[4])) {
          break;
        }
        section_times[4].push(currentSection);
      }
      break;
    case "F":
      {
        const currentSection = { start: start, end: end, ...section };
        if (checkConflictingTimes(currentSection, section_times[4])) {
          break;
        }
        section_times[4].push(currentSection);
      }
      break;
  }
}

function checkConflictingTimes(
  currentSection: TableSectionDataType,
  section_times: TableSectionDataType[],
) {
  let conflict = false;
  for (const section of section_times) {
    if (
      currentSection.start > section.start &&
      currentSection.start < section.end
    ) {
      conflict = true;
      break;
    }

    if (currentSection.end > section.start) {
      conflict = true;
      break;
    }
  }
  return conflict;
}
