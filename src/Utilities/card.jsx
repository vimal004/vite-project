import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-300 m-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 hover:text-gray-400 delay-90 cursor-pointer">
          {title}
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
