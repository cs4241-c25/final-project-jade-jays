import { readLocalStorageValue, useLocalStorage } from "@mantine/hooks";
import { Panel, PanelResizeHandle } from "react-resizable-panels";

import { ClientCourseType } from "app-packages/types/persistent.types.ts";
import { CourseListMemo } from "@/routes/Courses/CourseList.tsx";
import { CourseInfo } from "@/routes/Courses/CourseInfo.tsx";
import { getCourseData } from "@/hooks/data-fetches.ts";
import panelClasses from "@/routes/panel.module.css";

export function CourseView() {
  const subject = readLocalStorageValue<string>({ key: "subject" });
  const { status, data } = getCourseData(subject);
  const [currentCourse, setCurrentCourse] = useLocalStorage<ClientCourseType>({
    key: "course",
  });
  const [addedCourseList, setAddedCourseList] = useLocalStorage<{
    [key: string]: ClientCourseType;
  }>({
    key: "added_course_list",
    defaultValue: {},
  });

  return (
    <>
      <Panel
        style={{ overflow: "auto" }}
        className={panelClasses.panel}
        id={"course-list"}
        minSize={0}
        order={2}
      >
        <CourseListMemo
          status={status}
          data={data}
          setCourse={setCurrentCourse}
          setAddedCourseList={setAddedCourseList}
        />
      </Panel>
      <PanelResizeHandle className={panelClasses.panelHandle} />
      <Panel id={"course-info-group"} defaultSize={25} minSize={0} order={3}>
        <CourseInfo
          status={status}
          course={currentCourse}
          setAddedCourseList={setAddedCourseList}
        />
      </Panel>
    </>
  );
}
