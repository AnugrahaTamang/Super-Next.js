import React, { useReducer } from "react";
type FormData = {
  name: string;
  age: number;
};
const initialdata: FormData = {
  name: "",
  age: 0,
};
type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "RESET" };
const reducerOne = (state: FormData, action: FormAction): FormData => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "RESET":
      return initialdata;
    default:
      state;
  }
};
const Form = () => {
  const [state, dispatch] = useReducer(reducerOne, initialdata);
  return (
    <div>
      <h1>This is all about the form:</h1>
      <input
        type="text"
        value={state.name}
        placeholder="Enter your name..."
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <input
        type="number"
        value={state.age}
        placeholder="Enter your age..."
        onChange={(e) => dispatch({ type: "SET_AGE", payload: e.target.value })}
      />
      <button type="submit">submit</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <section>
        <h1>Name: {state.name}</h1>
        <h1>Age: {state.age}</h1>
      </section>
    </div>
  );
};

export default Form;
