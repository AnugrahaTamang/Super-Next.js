import React, { Suspense } from "react";
import FetchTodo from "./USE/FetchTodo";
import Form from "./Actions/Form";
import UseFormStatus from "./useFormStatus/UseFormStatus";
import UseActionState from "./useActionState/UseActionState";
import One from "./useTransition/One";

const App = () => {
  return (
    <Suspense>
      {/* <FetchTodo /> */}
      <Form />
      <br />
      <br />
      <UseFormStatus />
      <h1>This is all about the useActionState....</h1>
      <UseActionState />
      <h1>This is all about the useTransition Hook</h1>
      <One />
    </Suspense>
  );
};

export default App;
