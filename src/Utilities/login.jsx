import React from 'react';

const LoginModal = ({ show, handleClose, currmode }) => {
  const handleModalClick = (e) => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center transition-opacity duration-200 ${show ? '' : 'opacity-0 pointer-events-none'}`} onClick={handleClose}>
      <div className={`absolute inset-0 ${currmode ? 'bg-gray-800' : 'bg-white'} ${currmode ? 'bg-opacity-75' : 'bg-opacity-50'}`} />
      <div className={`bg-white ${currmode ? 'text-white' : 'text-gray-700'} p-8 rounded-lg shadow-lg max-w-md relative`} onClick={handleModalClick}>
        <button className={`absolute top-3 right-3 ${currmode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}`} onClick={handleClose}>
          &times;
        </button>
        <h2 className={`text-3xl font-bold ${currmode ? 'text-gray-200' : 'text-gray-700'} mb-6 text-center`}>Sign in</h2>
        <form className="space-y-5">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Email or phone"
              className={`w-full p-3 border ${currmode ? 'border-gray-600' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`w-full p-3 border ${currmode ? 'border-gray-600' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
              required
            />
          </div>
          <button type="submit" className={`w-full ${currmode ? 'bg-gray-600 text-white' : 'bg-black text-white'} py-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}>
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
