// LoginModal.js
import React from 'react';

const LoginModal = ({ show, handleClose }) => {
  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ${show ? '' : 'hidden'}`} onClick={handleClose}>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={handleClose}>
          &times;
        </button>
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Sign in</h2>
        <form className="space-y-5">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Email or phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Next
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot email?</a>
        </div>
        <div className="mt-6 text-center text-gray-500">
          Not your computer? Use Guest mode to sign in privately. <a href="#" className="text-blue-500 hover:underline">Learn more</a>
        </div>
        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;


