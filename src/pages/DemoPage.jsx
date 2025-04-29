import { createContext, useState } from "react";
import Child from "../components/Child";
import Parent from "../components/Parent";

export const myContext = createContext();

export default function DemoPage() {
  const [number, setNumber] = useState(8);

  return (
    <>
      <myContext.Provider value={{number, setNumber}}>
        <Parent />
        <Child />
      </myContext.Provider>
    </>
  );
}
