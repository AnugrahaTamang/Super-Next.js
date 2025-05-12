import React, { type FC } from "react";
type UserProps = {
  isLoggedIn: boolean;
  name: string;
};
const ExampleOne: React.FC<UserProps> = ({ isLoggedIn, name }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, {name}</h1> : <h1>Please log in...</h1>}
    </div>
  );
};

export default ExampleOne;
