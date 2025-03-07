import { readLocalStorageValue } from '@mantine/hooks'
import React from 'react'

import { CourseItem } from './CoursesList'
import courseListClasses from "@/routes/Courses/Courses.module.css";

interface AddedCoursesListProps {
  subject: string
}
export function AddedCoursesList({ subject } : AddedCoursesListProps) {
  const list = readLocalStorageValue<{ [key:string]: string }>({ key: 'added_courses' });

  return (
    <>
      {Object.values(list).map((course) => {
        const parsedCourse = new DOMParser().parseFromString(course, 'text/xml').documentElement;
        return (
          <CourseItem
            key={course}
            compact={true}
            subject={subject}
            course={parsedCourse}
            clickCB={() => {
            }}
            className={courseListClasses.courseItem}>
          </CourseItem>
        )
      })}
    </>
  )
};