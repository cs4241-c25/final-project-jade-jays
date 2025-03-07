import { mergeRefs, useHover, readLocalStorageValue } from "@mantine/hooks"
import { Plus } from "lucide-react"
import React from "react"

import { getTagFromAttributeValue } from "@/components/data-parse.util.ts"
import courseListClasses from "./Courses.module.css"


interface CourseListProps extends React.HTMLProps<HTMLDivElement> {
  xmlDoc: XMLDocument;
  currentSubject: any;
  setAddedCourses: (course: string[]) => void;
  setSelectedCourse: (course: Element) => void;
}
export const CoursesList = React.memo(function CoursesList(
  { xmlDoc, setAddedCourses, currentSubject, setSelectedCourse }: CourseListProps
) {
  const courses = getTagFromAttributeValue(xmlDoc, 'abbrev', currentSubject);

  if (!courses) {
    return <></>
  }

  return (
    <div className={courseListClasses.courseContainer}>
      {courses.map((course: Element, index: number) => {
        const name = course.getAttribute("name");

        return (
          <CourseItem
            key={`${name}${index}`}
            subject={currentSubject}
            course={course}
            clickCB={() => {
              const newValue = readLocalStorageValue<string[]>({key: 'added_courses'});
              if (name && !newValue[name]) {
                newValue[name] = course.outerHTML;
              }
              setAddedCourses(newValue);
            }}
            setSelectedCourse={setSelectedCourse}
            className={courseListClasses.courseItem}>
          </CourseItem>
        )
      })}
    </div>
  )
});

export interface CourseItemProps extends React.HTMLProps<HTMLDivElement> {
  course: Element;
  subject: string;
  compact?: boolean;
  icon?: React.ReactNode;
  clickCB?: () => void;
  setSelectedCourse?: (course: Element) => void;
}
export const CourseItem = React.memo(function CourseItem(
  { course, subject, compact, icon, clickCB: addCourse, setSelectedCourse, className }: CourseItemProps
) {
  const label = React.useMemo(() => course.getAttribute("name"), []);
  const courseNumber = React.useMemo(() => course.getAttribute("number"), []);

  return (
    <div
      className={className}
      onClick={(setSelectedCourse) ? ()=>setSelectedCourse(course) : undefined}>
      <button
        className={`${courseListClasses.courseItemButton}`}
        onClick={(addCourse) ? (event) => {
          event.stopPropagation();
          addCourse();
        } : undefined}>
        {(icon) ?
          icon : <Plus size={"1rem"} />
        }
      </button>
      <a className={`
          ${courseListClasses.courseItemSection} 
          ${courseListClasses.courseCode}
        `}>
        {`${subject} ${courseNumber}`}
      </a>
      <div className={`${courseListClasses.termRibbon}`}>
        {["A", "B", "C", "D"].map(term => {
          const status = getStatus(term, course);
          return (
            <TermButton
              key={`${label}${subject}${courseNumber}${term}`}
              status={status}
              term={term}/>
          )
        })}
      </div>
      {compact ?
        undefined :
        <a className={`
          ${courseListClasses.courseItemSection} 
          ${courseListClasses.courseTitle}
        `}>
          {label}
        </a>
      }
    </div>
  )
});

export interface TermButtonProps extends React.HTMLProps<HTMLDivElement> {
  term: string;
  status: string;
}
export function TermButton({ term, status, ...props } : TermButtonProps) {

  return (
    <div
      data-status={status}
      className={`${courseListClasses.termButton}`}
      {...props}
    >
      {term}
    </div>
  );
}

function getTooltipDescription(status: string, term: string) {
  let label = "";
  switch (status) {
    case "available":
    {
      label = `Course is available for ${term} Term`;
    }
      break;
    case "not-available":
    {
      label = `Course not offered for ${term} Term`;
    }
      break;
    case "under-waitlist":
    {
      label = `There are no seats left for ${term} Term `;
    }
      break;
    case "closed":
    {
      label = "";
    }
      break;
  }
  return label;
}

function getStatus(term: string, course: Element) {
  const period = course.getAttribute("academic_period")
  if (period && term === period[0]) {
    return "available";
  }

  const enrolled = course.getAttribute("enrolled")
  if (enrolled) {
    const [seats, capacity] = enrolled.split("/");
    if (seats >= capacity) {
      return "under-waitlist";
    }
  }

  return "not-available";
}