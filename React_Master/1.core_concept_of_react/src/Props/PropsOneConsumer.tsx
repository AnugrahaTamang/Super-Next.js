import React from "react";

const PropsOneConsumer = ({
  name,
  age,
  location,
}: {
  name: string;
  age: number;
  location: string;
}) => {
  return (
    <div>
      <p>Name: {name} </p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default PropsOneConsumer;
