import React from "react";
import "./index.css"; // Remove this line if not using custom styles

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          aria-placeholder="Logo"
          className="h-12"
          src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
          alt="Logo"
        />
        <h1 className="text-2xl font-bold text-gray-800">E-Shop</h1>
      </div>
      <div className="flex-grow mx-10">
        <div className="flex justify-center space-x-6 text-gray-700">
          <a href="#" className="hover:text-blue-500 transition duration-300">
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
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Cart
        </button>
        <input
          className="w-80 px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none

          focus:border-blue-500 transition duration-300"
          placeholder="Search for products, brands and more"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Dark Mode
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
