import React from "react";
import Card from "./Utilities/card";

const Body = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-6">
      <Card
        title={"Clothing"}
        description={"Discover the latest trends in fashion."}
      />
      <Card
        title={"Electronic Gadgets"}
        description={"Explore a wide range of electronic gadgets."}
      />
      <Card
        title={"Kitchen"}
        description={"Find kitchen essentials and appliances."}
      />
      <Card
        title={"Sport Kits"}
        description={"Get ready for your favorite sports activities."}
      />
    </div>
  );
};

export default Body;

