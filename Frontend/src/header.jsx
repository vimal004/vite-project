import React from "react";
import { Route } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./Utilities/button";
import "./index.css"; // Remove this line if not using custom styles
import LoginModal from "./Utilities/login";
import Profile from "./Utilities/profile";

const Header = ({ currmode, togglefunc, logtoggle, log, logfn }) => {
  const [lgn, setlgn] = useState("Login");
  const lgtoggle = () => {
    lgn === "Login" ? setlgn("Logout") : setlgn("Login");
  };

  useEffect(() => {
    console.log("Header rendered");
  }, []);

  return (
    <div
      className={
        currmode
          ? "flex justify-between items-center bg-gray-800 p-6 shadow-lg"
          : "flex justify-between items-center bg-white p-6 shadow-lg"
      }
    >
      <div className="flex items-center space-x-4">
        <img
          aria-placeholder="Logo"
          className="h-12 w-12 rounded-full"
          src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
          alt="Logo"
        />
        <h1
          className={
            currmode
              ? "text-2xl font-bold text-white"
              : "text-2xl font-bold text-gray-800"
          }
        >
          E-Shop
        </h1>
      </div>
      <div className="flex-grow mx-10">
        <div
          className={
            currmode
              ? "flex justify-center space-x-6 text-white"
              : "flex justify-center space-x-6 text-gray-700"
          }
        >
          <a href="https://www.meesho.com/api/v1/navigation-tree" className="hover:text-blue-500 transition duration-300">
            Today's Deals
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            New Releases
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Clothing
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Electronics
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Customer Service
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button name={"Cart"} mode={currmode} altname={"Cart"} />
        <input
          className="w-80 px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none

          focus:border-blue-500 transition duration-300"
          placeholder="Search for products, brands and more"
        />
        <Button
          name={"Dark Mode"}
          action={togglefunc}
          mode={currmode}
          altname={"Light Mode"}
        />
        {log ? (
          <Profile />
        ) : (
          <Button name={lgn} mode={currmode} action={logtoggle} altname={lgn} />
        )}
      </div>
    </div>
  );
};

export default Header;
