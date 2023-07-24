import React, { useEffect, useState } from "react";

import "./Shopping.css";
import { data } from "autoprefixer";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
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
    addToDb(product.id);
    console.log(cart);
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart);
  }, []);
  return (
    <div className=" mt-5 shopContainer grid grid-cols-6 mx-auto">
      <div className="products-container col-span-4">
        <div className="grid grid-cols-3 gap-y-4 max-w-5xl gap-x-0 mx-auto">
          {products.map((product) => (
            <Product
              product={product}
              productAdd={productAdd}
              key={product.id}
            ></Product>
          ))}
        </div>
      </div>
      <div className="Cart-container sticky h-[650px] top-4 w-11/12 rounded-lg text-white bg-gray-800 col-span-2">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Shopping;
