import React, { useEffect, useState } from "react";

import "./Shopping.css";
import { data } from "autoprefixer";
import Product from "../Product/Product";
const Shopping = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const productAdd = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(cart);
  };
  return (
    <div className="shopContainer grid grid-cols-6 mx-auto">
      <div className="products-container col-span-4">
        <div className="grid grid-cols-3 gap-y-4 my-5 max-w-5xl gap-x-0 mx-auto">
          {products.map((product) => (
            <Product
              product={product}
              productAdd={productAdd}
              key={product.id}
            ></Product>
          ))}
        </div>
      </div>
      <div className="Cart-container bg-yellow-600 col-span-2">
        <div className="w-9/12 mx-auto bg-blue-300">
          <h4 className="text-3xl font-medium my-6 text-center uppercase">
            order summery
          </h4>
          <h1 className="font-medium mt-28 text-2xl">
            Selected Items: {cart.length}
          </h1>
          <h1 className="font-medium mt-2 text-2xl">
            Total Price: ${cart.length}
          </h1>
          <h1 className="font-medium mt-2 text-2xl">
            Total Shipping Charge: ${cart.length}
          </h1>
          <h1 className="font-medium mt-2 text-2xl">Tax: ${cart.length}</h1>
          <h1 className="font-semibold mt-2 text-3xl">
            Grand Total: ${cart.length}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Shopping;
