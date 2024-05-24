import React from "react";

const Footer = ({currmode}) => {
  // Function to handle the smooth scroll to top
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white py-6 border-t border-gray-300 shadow-lg">
      <div className="text-center mb-4">
        <a
          href="#"
          onClick={scrollToTop} // Attach the smooth scroll function
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          <span className="mr-2">Back to the top</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
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
