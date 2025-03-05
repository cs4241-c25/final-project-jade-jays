import { Text, Flex, ActionIcon } from "@mantine/core";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionType } from "app-packages/types/persistent.types.ts";
import scheduleClasses from "./schedule.module.css";

interface SectionListProps {
  data?: SectionType[][];
}
export function SectionList({ data }: SectionListProps) {
  return (
    <div className={scheduleClasses.scheduleListContainer}>
      {data
        ? data.map((section: SectionType[]) => (
            <SectionDropdown data={section} />
          ))
        : undefined}
    </div>
  );
}

interface SectionDropdownProps {
  data: SectionType[];
}
function SectionDropdown({ data }: SectionDropdownProps) {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div>
      <Flex direction="row" gap={"sm"}>
        <ActionIcon onClick={() => setActive(!active)}>
          <ChevronDown />
        </ActionIcon>
        <Text className={scheduleClasses.courseTitle}>{data[0].course}</Text>
      </Flex>
      {active
        ? Object.values(data).map((section, index) => {
            return (
              <Flex
                key={index}
                className={scheduleClasses.sectionInfo}
                justify="space-between"
                direction="row"
              >
                <div>{section.section_code}</div>
                <div>{section.instructional_format}</div>
              </Flex>
            );
          })
        : undefined}
    </div>
  );
}
