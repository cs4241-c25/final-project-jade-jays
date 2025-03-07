import { useContext, createContext, ReactNode } from "react";
import { useLocalStorage } from "@mantine/hooks";
import React from 'react';


const StateContext = createContext<any>(null);

export const useStateContext = () => {
  if (!StateContext) {
    throw new Error("useStateContext must be used within a <StateProvider />");
  }
  return useContext(StateContext);
};

export type StateProviderProps = {
  children: ReactNode;
};

export const StateProvider = ({ children }: StateProviderProps) => {
  const [ storedSubject, setStoredSubject ] = useLocalStorage({
    key: "subject",
    defaultValue: "CS",
  });
  const [ addedCourses, setAddedCourses ] = useLocalStorage<{ [key:string]: string }>({
    key: "added_courses",
    defaultValue: {},
  });

  return (
    <StateContext.Provider value={{
      currentSubject: storedSubject,
      setStoredSubject: setStoredSubject,
      addedCourses: addedCourses,
      setAddedCourses: setAddedCourses,
    }}>
      {children}
    </StateContext.Provider>
  );
};