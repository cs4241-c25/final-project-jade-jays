import { TablesType } from "app-packages/types/persistent.types.ts";

import scheduleClasses from "./schedule.module.css";

interface SectionListProps {
  data?: TablesType;
}
export function SectionList({ data }: SectionListProps) {
  return (
    <div className={scheduleClasses.scheduleListContainer}>
      {data
        ? Object.values(data).map((data) => {
            console.log(data.flat(2));
            return data
              .flat(2)
              .map((section, index) => <div key={index}>{section.course}</div>);
          })
        : undefined}
    </div>
  );
}
