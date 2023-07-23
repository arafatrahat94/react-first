import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header h-20 bg-gray-800 text-white flex justify-center  items-center">
      <div className="grid grid-cols-2 gap-80 mx-auto">
        <div className="max-w-2xl flex justify-start items-center ">
          <img
            className="text-white w-32 items-start transform hover:-hue-rotate-180 hover:scale-90 duration-700"
            src="src\images\Logo.svg"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
          <ul className="text-xl flex justify-center items-end ">
            <li className="ps-7 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500  ">
              <a className="" href="">
                Order
              </a>
            </li>
            <li className="ps-7 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Order Review</a>
            </li>
            <li className="ps-7 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Manage Inventory</a>
            </li>
            <li className="ps-7 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
