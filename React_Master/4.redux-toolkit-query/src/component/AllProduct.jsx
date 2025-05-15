import React from "react";
import { useGetAllProductQuery } from "../app/service/dummyData";

const AllProduct = () => {
  const { data, isError, isLoading } = useGetAllProductQuery();
  if (isError) {
    return <h1>O No......</h1>;
  }
  if (isLoading) {
    return <h1>Loading.......</h1>;
  }
  return (
    <div>
      {data?.products.map((p) => (
        <>
          <h1 key={p.id}>Product Title: {p.title}</h1>
          <p>{p.description}</p>
        </>
      ))}
    </div>
  );
};

export default AllProduct;
