import React from "react";
interface Data {
  name: string;
  location: string;
}
const PropsExampleTwo = ({ data }: { data: Data }) => {
  return (
    <div>
      {data.map((d: Data) => {
        return (
          <li key={Math.random()}>
            Name: {d.name} Location: {d.location}
          </li>
        );
      })}
    </div>
  );
};

export default PropsExampleTwo;
