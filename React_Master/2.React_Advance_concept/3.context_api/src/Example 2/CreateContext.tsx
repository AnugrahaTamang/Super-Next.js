import React, { createContext } from "react";
import One from "./One";
type Data = {
  name: string;
  age: number;
};
export const Data = createContext<Data | null>(null);
export const Data1 = createContext<Data | null>(null);
const CreateContext = () => {
  const name: string = "Vandai lama";
  const age: number = 23;
  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <One />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
};

export default CreateContext;
