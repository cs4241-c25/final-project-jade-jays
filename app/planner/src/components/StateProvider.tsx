import { useContext, createContext, ReactNode } from "react";
import { useLocalStorage } from "@mantine/hooks";


const StateContext = createContext<any>(null);

export const useStateContext = () => {
  if (!StateContext) {
    throw new Error("useStateContext must be used within a <StateProvider />");
  }
  return useContext(StateContext);
};

type StateProviderProps = {
  children: ReactNode;
};
export const StateProvider = ({ children }: StateProviderProps) => {
  const [ storedSubject, setStoredSubject ] = useLocalStorage({
    key: "subject",
    defaultValue: "CS",
  });

  return (
    <StateContext.Provider value={{
      currentSubject: storedSubject,
      setStoredSubject: setStoredSubject,
    }}>
      {children}
    </StateContext.Provider>
  );
};