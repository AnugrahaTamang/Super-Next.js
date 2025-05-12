import React, { useState } from "react";
import Counter from "./Component/Counter";
import UpdatingObject from "./Component/UpdatingObject";
import UpdatingArray from "./Component/UpdatingArray";
import ComponentOne from "./Sharing_State/ComponentOne";
import ComponentTwo from "./Sharing_State/ComponentTwo";
import ExampleOne from "./Passing Function as a value/ExampleOne";
import ExampleTwo from "./Passing Function as a value/ExampleTwo";

const App = () => {
  const [count, setcount] = useState<number>(0);
  return (
    <div>
      <h1>Note: Usestate Example 1....</h1>
      <Counter />
      <h1>Note: Usestate Example 2....</h1>
      <UpdatingObject />
      <h1>Note: Usestate Example 3...</h1>
      <UpdatingArray />
      <h1>Note: Sharing State....</h1>
      <ComponentOne count={count} onclickHandler={() => setcount(count + 1)} />
      <ComponentTwo count={count} onclickHandler={() => setcount(count - 1)} />
      <h1>Passing function as a value...</h1>
      <ExampleOne />
      <ExampleTwo />
    </div>
  );
};

export default App;
