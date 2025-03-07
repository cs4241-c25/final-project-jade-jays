import { Text, Title } from '@mantine/core'
import React from 'react'

interface CourseInfoProps {
  selectedCourse: Element | null;
}
export const CourseInfo = React.memo(function CourseInfo({
  selectedCourse
} : CourseInfoProps) {
  const description = selectedCourse?.getAttribute("description");
  const name = selectedCourse?.getAttribute("name");

  return (
    <>
      <Title order={5}>{name}</Title>
      <Text>
        {description}
      </Text>
    </>
  )
});