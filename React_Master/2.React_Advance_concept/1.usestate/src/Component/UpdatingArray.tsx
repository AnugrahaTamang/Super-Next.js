import React, { useState } from "react";

const UpdatingArray = () => {
  const [data, setdata] = useState<string[]>(["ramit", "vandai"]);
  const addOne = () => {
    setdata([...data, "amisha"]);
  };
  const RemoveOne = () => {
    setdata((d) => d.filter((d) => d !== "ramit"));
  };
  const UpdateOne = () => {
    setdata((d) => d.map((d) => (d == "ramit" ? "ram" : d)));
  };
  return (
    <div>
      <h1>Updating Array in react...</h1>
      {data.map((d) => {
        return <li key={Math.random()}>{d}</li>;
      })}
      <button onClick={addOne}>AddOne</button>
      <button onClick={RemoveOne}>RemoveOne</button>
      <button onClick={UpdateOne}>UpdateOne</button>
    </div>
  );
};

export default UpdatingArray;
