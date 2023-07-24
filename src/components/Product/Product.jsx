import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // console.log(props.productAdd);
  let { img, category, name, price } = props["product"];
  const productAdd = props.productAdd;
  return (
    <div className="">
      <div>
        <div className="relative product flex w-80 h-[550px] my-auto flex-col rounded-xl mx-auto bg-clip-border text-gray-700 ring-2 ring-gray-400">
          <div className="relative mx-auto my-5 w-72 h-72 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white ">
            <img src={img} className="flex-shrink-0 w-full" />
          </div>
          <div className="p-6">
            <h5 className="mb-2 block h-12 pb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {name}
            </h5>
            <p className="block pt-2 font-sans text-xl font-medium leading-relaxed text-inherit antialiased">
              Price: ${price}
            </p>
          </div>
          <div className="p-6 mx-auto bottom-0  pt-0">
            <button
              onClick={() => productAdd(props.product)}
              className="select-none focus:ring-2 ring-gray-600 rounded-lg bg-gray-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md   hover:bg-white hover:border-2 border-gray-600 hover:text-gray-600 transition-all hover:shadow-lg hover:shadow-gray-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Add To Cart <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
