import React, { useReducer } from "react";
type State = {
  count: number;
};
type Action = { type: "Increment" } | { type: "Decrement" };
const reducerOne = (state: State, action: Action): State => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      state;
  }
};
const Counter = () => {
  const initialValue: State = { count: 10 };
  const [state, dispatch] = useReducer(reducerOne, initialValue);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
