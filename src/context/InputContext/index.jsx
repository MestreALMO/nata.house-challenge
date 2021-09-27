import { createContext, useState, useContext } from "react";

const InputContext = createContext();

export default function InputProvider({ children }) {
  const [inputData, setInputData] = useState(0);

  return (
    <InputContext.Provider value={{ inputData, setInputData }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInput() {
  const context = useContext(InputContext);
  const { inputData, setInputData } = context;
  return { inputData, setInputData };
}
