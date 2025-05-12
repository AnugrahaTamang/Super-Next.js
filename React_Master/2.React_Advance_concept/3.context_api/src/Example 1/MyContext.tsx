import React, { createContext } from "react";
import CompoenntOne from "./CompoenntOne";
type Data = {
  name: string;
  age: number;
};
export const DataOne = createContext<Data | null>(null);
export const DataTwo = createContext<Data | null>(null);
const MyContext = () => {
  const name: string = "Anugraha Tamang";
  const age: number = 22;
  return (
    <div>
      <DataOne.Provider value={name}>
        <DataTwo.Provider value={age}>
          <CompoenntOne />
        </DataTwo.Provider>
      </DataOne.Provider>
    </div>
  );
};

export default MyContext;
