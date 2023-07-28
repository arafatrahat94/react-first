import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSquareCaretRight,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="header lg:h-20 w-full bg-gray-800 text-white flex justify-center  items-center">
      <div className="flex  lg:gap-[480px] mx-auto">
        <div className="lg:max-w-2xl w-[300px] md:w-[690px] lg:w-auto  flex justify-start items-center ">
          <img
            className="text-white w-32 items-start transform hover:-hue-rotate-180 hover:scale-90 duration-700"
            src="src\images\Logo.svg"
            alt=""
          />
        </div>
        <div className="lg:flex  lg:static lg:justify-center items-end">
          <div
            onClick={() => setNavOpen(!navOpen)}
            className="p-4 lg:hidden focus:ring ring-white flex justify-end"
          >
            <span>
              {navOpen === true ? (
                <FontAwesomeIcon
                  className="w-8 h-8 "
                  icon={faSquareCaretRight}
                />
              ) : (
                <FontAwesomeIcon
                  className="focus:ring ring-white w-8 h-8"
                  icon={faBars}
                />
              )}
            </span>
          </div>
          <ul
            className={`lg:text-xl  mt-4 lg:mt-0 lg:flex lg:justify-center px-10 lg:px-auto mx-auto py-4  bg-gray-800 rounded-lg text-xl lg:bg-transparent lg:items-end absolute lg:static ${
              navOpen === true ? "right-2" : "-right-72"
            } duration-500`}
          >
            <li className="lg:ps-7 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500  ">
              <a
                className="py-2 lg:py-0 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500"
                href=""
              >
                Order
              </a>
            </li>
            <li className="lg:ps-7 py-2 lg:py-0 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Order Review</a>
            </li>
            <li className="lg:ps-7 py-2 lg:py-0 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Manage Inventory</a>
            </li>
            <li className="lg:ps-7 py-2 lg:py-0 cursor-pointer transform hover:scale-110 duration-500 hover:text-pink-500">
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
