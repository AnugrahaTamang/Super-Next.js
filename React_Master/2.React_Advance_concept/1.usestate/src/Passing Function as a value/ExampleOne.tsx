import React, { useState } from "react";

const ExampleOne = () => {
  const [num, setnum] = useState<number>(() => {
    const initialdata = 12;
    return initialdata;
  });
  return (
    <div>
      <p>Number: {num}</p>
      <button onClick={() => setnum(num + 1)}>Increment</button>
    </div>
  );
};

export default ExampleOne;
