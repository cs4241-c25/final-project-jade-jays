import { readLocalStorageValue } from '@mantine/hooks'
import { Minus } from 'lucide-react'
import React from 'react'

import { CourseItem } from './CoursesList'
import courseListClasses from "@/routes/Courses/Courses.module.css";

interface AddedCoursesListProps {
  subject: string
  setAddedCourses: (course: { [key:string]: string }) => void;
  setSelectedCourse: (course: Element) => void;
}
export function AddedCoursesList({ subject, setAddedCourses, setSelectedCourse } : AddedCoursesListProps) {
  const list = readLocalStorageValue<{ [key:string]: string }>({ key: 'added_courses' });

  return (
    <>
      {Object.values(list).map((course) => {
        const parsedCourse = new DOMParser().parseFromString(course, 'text/xml').documentElement;
        const name = parsedCourse.getAttribute("name");
        return (
          <CourseItem
            key={course}
            icon={<Minus size={"1rem"} />}
            compact={true}
            subject={subject}
            course={parsedCourse}
            setSelectedCourse={setSelectedCourse}
            clickCB={() => {
              if (name && list[name]) {
                delete list[name];
                setAddedCourses(list);
              }
            }}
            className={courseListClasses.courseItem}>
          </CourseItem>
        )
      })}
    </>
  )
};