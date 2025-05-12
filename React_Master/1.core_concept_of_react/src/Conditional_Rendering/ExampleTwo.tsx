import React from "react";
const age: number = 22;
const ExampleTwo = () => {
  if (age < 12) {
    return <h1>You are not eligible to visit Nepal...</h1>;
  }
  if (age > 12) {
    return <h1>You are eligible to visit Nepal...</h1>;
  }
};

export default ExampleTwo;
