import React, { useState } from "react";

const ExampleTwo = () => {
  const [randomnum, setrandomnum] = useState<number>(() => {
    return Math.floor(Math.random() * 100);
  });
  return (
    <div>
      <h1>Random Number: {randomnum}</h1>
      <button onClick={() => setrandomnum(Math.floor(Math.random() * 100))}>
        Generate Random Number...
      </button>
    </div>
  );
};

export default ExampleTwo;
