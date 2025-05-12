import React from "react";

const ComponentOne = ({
  count,
  onclickHandler,
}: {
  count: number;
  onclickHandler: () => void;
}) => {
  const Increment = () => onclickHandler();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default ComponentOne;
