import React from "react";
import AllProduct from "./component/AllProduct";
import SpecificProduct from "./component/SpecificProduct";
import AddNewProduct from "./component/AddNewProduct";
import UpdateProduct from "./component/UpdateProduct";
import DeleteProduct from "./component/DeleteProduct";

const App = () => {
  return (
    <div>
      <h1>This is all about the RTK</h1>
      <AllProduct />
      <SpecificProduct />
      <AddNewProduct />
      <UpdateProduct />
      <DeleteProduct />
    </div>
  );
};

export default App;
