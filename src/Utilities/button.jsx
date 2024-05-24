import React from 'react';

const Button = ({ name, action }) => {
  return (
    <div
      onClick={action}
      className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"
      style={{ minWidth: '100px' }}
    >
      <button className="w-full">{name}</button>
    </div>
  );
};

export default Button;
