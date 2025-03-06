import { Text, TextProps } from "@mantine/core"
import React from 'react'

import { getTagsFromAttributeValue } from "@/components/data-parse.util.ts"
import { useCourseContext } from "@/components/CourseProvider"
import { useStateContext } from "@/components/StateProvider"
import courseListClasses from "./Courses.module.css"

export function SubjectList() {
  const { xmlDoc, category } = useCourseContext();
  const { setStoredSubject } = useStateContext();

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
            {getTagsFromAttributeValue(xmlDoc, 'category', category)
              .map((subject: Element, index: number) => {
              const name = subject.getAttribute("name");
              const abbrev = subject.getAttribute("abbrev");
              return (
                <SubjectItem
                  key={`${name}${index}`}
                  label={name}
                  size={"sm"}
                  className={courseListClasses.subjectItem}
                  onClick={() => setStoredSubject(abbrev)}>
                </SubjectItem>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export interface SubjectItemProps extends TextProps {
  className?: string;
  label: string | null | undefined;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
function SubjectItem({ label, className, onClick, ...props }: SubjectItemProps) {
  return (
    <Text
      className={`${className}`}
      onClick={onClick}
      {...props}>
      {label}
    </Text>
  )
}