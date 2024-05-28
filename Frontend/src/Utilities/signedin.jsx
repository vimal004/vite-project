import React, { useState, useEffect } from "react";

const SignedIn = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Hide the message after 2 seconds
    const timeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {showMessage && (
        <div className="bg-green-500 text-white p-4 rounded-md shadow-md transition-opacity duration-1000 ease-in-out">
          Sign In Successful!
        </div>
      )}
    </div>
  );
};

export default SignedIn;

