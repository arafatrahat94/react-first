import React, { useEffect, useState } from "react";

import "./Shopping.css";
import { data } from "autoprefixer";
import Product from "../Product/Product";
const Shopping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shopContainer grid grid-cols-5 mx-auto">
      <div className="products-container col-span-4">
        <div className="grid grid-cols-3 gap-y-4 my-5 max-w-5xl gap-x-4 mx-auto">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
      <div className="Cart-container col-span-1">
        <h4>order summery</h4>
      </div>
    </div>
  );
};

export default Shopping;
