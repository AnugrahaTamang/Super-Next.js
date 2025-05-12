import React from "react";
import MyContext from "./Example 1/MyContext";
import CreateContext from "./Example 2/CreateContext";

const App = () => {
  return (
    <div>
      <MyContext />
      <h1>Example Two of the context api</h1>
      <CreateContext />
    </div>
  );
};

export default App;
