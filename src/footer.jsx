import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-6 border-t border-gray-300 shadow-lg">
      <div className="text-center mb-4">
        <a className="text-black hover:text-blue-500 transition duration-300 cursor-pointer">
          Back to the top
        </a>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="#"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Conditions of Use & Sale
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-blue-500 transition duration-300"
        >
          Privacy Notice
        </a>
      </div>
      <div className="text-center text-gray-600">
        <h6>© 1996-2024, Eshop.com, Inc. or its affiliates</h6>
      </div>
    </div>
  );
};

export default Footer;

