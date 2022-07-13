import React, { useState } from "react";
import { dataBase } from "./dataBase.js";

const Product = (props) => {
  const [products, setProducts] = useState(dataBase);

  const sneakers2 = props.sneakers12.map((e) => {
    return (
      <div className="card" key={props.key}>
        <div className="product-image">
          <img src={e.image} alt="logo" />
        </div>
        <div className="MainContent">
          <p>{e.name}</p>
          <p>{e.price}</p>
        </div>
      </div>
    );
  });
  return <>{sneakers2}</>;
};

export default Product;
