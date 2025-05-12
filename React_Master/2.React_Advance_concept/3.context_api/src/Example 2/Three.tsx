import React, { useContext } from "react";
import { Data, Data1 } from "./CreateContext";

const Three = () => {
  const name = useContext(Data);
  const age = useContext(Data1);
  return (
    <div>
      <h1>
        My name is {name}. I am {age} years old.
      </h1>
    </div>
  );
};

export default Three;
