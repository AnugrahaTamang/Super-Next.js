import React from "react";

const ComponentTwo = ({
  count,
  onclickHandler,
}: {
  count: number;
  onclickHandler: () => void;
}) => {
  const Decrement = () => onclickHandler();
  return (
    <div>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default ComponentTwo;
