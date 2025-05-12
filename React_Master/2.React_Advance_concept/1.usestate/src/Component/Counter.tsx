import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState<number>(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
