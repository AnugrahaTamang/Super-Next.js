import React from "react";
import { DataOne, DataTwo } from "./MyContext";

const ComponentThree = () => {
  return (
    <div>
      {
        <DataOne.Consumer>
          {(name) => {
            return (
              <DataTwo.Consumer>
                {(age) => {
                  return (
                    <h1>
                      My name is {name}. My age is {age}.
                    </h1>
                  );
                }}
              </DataTwo.Consumer>
            );
          }}
        </DataOne.Consumer>
      }
    </div>
  );
};

export default ComponentThree;
