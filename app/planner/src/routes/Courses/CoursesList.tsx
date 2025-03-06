import { Text, ActionIcon, Box, Transition } from "@mantine/core"
import { mergeRefs, useHover, useWindowScroll } from "@mantine/hooks"
import { Plus } from "lucide-react"
import React from "react"

import { getTagFromAttributeValue } from "@/components/data-parse.util.ts"
import { useCourseContext } from "@/components/CourseProvider.tsx";
import { useStateContext } from "@/components/StateProvider.tsx";
import useElementDimensions from "@/hooks/use-element-dimensions.ts";
import courseListClasses from "./Courses.module.css"

const CourseItemMemo = React.memo(CourseItem);

export function CoursesList() {
  const { xmlDoc } = useCourseContext();
  const { currentSubject } = useStateContext();
  const courses = getTagFromAttributeValue(xmlDoc, 'abbrev', currentSubject);

  if (!courses) {
    return <></>
  }

  return (
    <div className={courseListClasses.courseContainer}>
      {courses.map((course: Element, index: number) => {
        const name = course.getAttribute("name");

        return (
          <CourseItemMemo
            key={`${name}${index}`}
            subject={currentSubject}
            course={course}
            className={courseListClasses.courseItem}>
          </CourseItemMemo>
        )
      })}
    </div>
  )
}

interface CourseItemProps extends React.HTMLProps<HTMLDivElement> {
  course: Element;
  subject: string;
}
function CourseItem({ subject, course, className }: CourseItemProps) {
  const label = course.getAttribute("name");
  const subjectAbbrev = subject;
  const courseNumber = course.getAttribute("number");

  return (
    <div className={className}>
      <ActionIcon
        className={`${courseListClasses.courseItemButton}`}
      >
        <Plus size={"1rem"} />
      </ActionIcon>
      <Text
        className={`
          ${courseListClasses.courseItemSection} 
          ${courseListClasses.courseCode}
        `}
        size={"sm"}
      >
        {`${subjectAbbrev} ${courseNumber}`}
      </Text>
      <div className={`${courseListClasses.termRibbon}`}>
        {["A", "B", "C", "D"].map(term => {
          const status = getStatus(term, course);
          return (
            <TermButton
              key={`${label}${subjectAbbrev}${courseNumber}${term}`}
              status={status}
              term={term}/>
          )
        })}
      </div>
      <Text
        className={`
          ${courseListClasses.courseItemSection} 
          ${courseListClasses.courseTitle}
        `}
        size={"sm"}>
        {label}
      </Text>
    </div>
  )
}

interface TermButtonProps extends React.HTMLProps<HTMLDivElement> {
  term: string;
  status: string;
}
function TermButton({ term, status, ...props } : TermButtonProps) {
  const { hovered, ref: hoverRef } = useHover();
  const { dimensions, ref: dimensionRef } = useElementDimensions();
  const { x, y } = dimensions ?? {};

  return (
    <Box
      mod={{ status: status }}
      className={`${courseListClasses.termButton}`}
      {...props}
    >
      {term}
      {x && y ? (
        <Transition
          mounted={hovered}
          transition={"fade"}
          duration={200}
          enterDelay={200}
          exitDelay={100}
          timingFunction="ease"
        >
          {(transitionStyle) => (
            <div
              className={courseListClasses.tooltip}
              style={{
                zIndex: 3,
                ...transitionStyle,
              }}
            >
              <Text size={"xs"}>{getTooltipDescription(status, term)}</Text>
            </div>
          )}
        </Transition>
      ) : undefined}
    </Box>
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