import { Text, TextProps } from "@mantine/core"
import React from 'react'

import { getTagsFromAttributeValue } from "@/components/data-parse.util.ts"
import courseListClasses from "./Courses.module.css"


interface SubjectListProps extends React.HTMLProps<HTMLDivElement> {
  xmlDoc: XMLDocument;
  category: any;
  setStoredSubject: (abbrev: any) => void;
}
export const SubjectList = React.memo(function SubjectList({ xmlDoc, category, setStoredSubject } : SubjectListProps) {

  return (
    <>
      {category.map((category: string, index: number) => {
        return (
          <div key={`${category}${index}}`}
            className={courseListClasses.category}>
            <a className={courseListClasses.departmentName}>
              {category}
            </a>
            {getTagsFromAttributeValue(xmlDoc, 'category', category)
              .map((subject: Element, index: number) => {
              const name = subject.getAttribute("name");
              const abbrev = subject.getAttribute("abbrev");
              return (
                <SubjectItem
                  key={`${name}${index}`}
                  label={name}
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
});

export interface SubjectItemProps {
  className?: string;
  label: string | null | undefined;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const SubjectItem = React.memo(function SubjectItem({ label, className, onClick, ...props }: SubjectItemProps) {
  return (
    <div
      className={`${className}`}
      onClick={onClick}
      {...props}>
      {label}
    </div>
  )
});