import React, { useEffect } from "react";

const Clothing = () => {
  fetch('/api/v1/navigation-tree')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  return (
    <div className="">
      <h1>hello</h1>
    </div>
  );
};

export default Clothing;
