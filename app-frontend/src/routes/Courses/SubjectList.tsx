import { Text } from "@mantine/core"

import { getSubjectsFromCategoryString} from "@/components/data-parse.util.ts";
import { useCourseContext } from "@/components/CourseProvider"
import courseListClasses from "./Courses.module.css"

export function SubjectList() {
  const { xmlDoc, category } = useCourseContext();

  return (
    <>
      {category.map((category: string, index: number) => {
        return (
          <div key={`${category}${index}}`}
            className={courseListClasses.category}>
            <Text
              className={courseListClasses.departmentName}
              size={"md"}>
              {category}
            </Text>
            {getSubjectsFromCategoryString(xmlDoc, category)
              .map((subject: Element, index: number) => {
              const name = subject.getAttribute("name");
              return (
                <Text
                  key={`${name}${index}`}
                  className={courseListClasses.subjectItem}
                  size={"sm"}>
                  {name}
                </Text>
              );
            })}
          </div>
        );
      })}
    </>
  );
}