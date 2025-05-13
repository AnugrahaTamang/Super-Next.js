import React, { useRef } from "react";

const FocusInput = () => {
  const name = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    name.current?.focus();
  };
  return (
    <div>
      <input type="text" placeholder="Enter your name" ref={name} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
