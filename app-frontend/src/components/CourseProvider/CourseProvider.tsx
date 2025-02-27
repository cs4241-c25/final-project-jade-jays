import React from 'react'
import { CourseProviderProps } from "./CourseProvider.types.ts";

export interface CourseContext {}

const CourseContext = React.createContext<CourseContext>({});

export function useCourseContext () {
    return React.useContext(CourseContext);
}

export function CourseProvider({ children }: CourseProviderProps) {
    return (
        <CourseContext.Provider value={{}}>
            {children}
        </CourseContext.Provider>
    )
}