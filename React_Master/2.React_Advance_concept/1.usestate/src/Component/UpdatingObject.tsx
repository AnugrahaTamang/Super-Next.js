import React, { useState } from "react";
type Data = {
  name: string;
  ratings: number;
};
const UpdatingObject = () => {
  const [data, setdata] = useState<Data>({
    name: "ramit",
    ratings: 22,
  });
  const ChangeRatings = () => {
    setdata({ ...data, ratings: 12 });
  };
  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Ratings: {data.ratings}</p>
      <button onClick={ChangeRatings}>Change Ratings</button>
    </div>
  );
};

export default UpdatingObject;
