import React from 'react';
import Card from './Utilities/card';
import clothingImage from './Utilities/pexels-solliefoto-298863.jpg';
import Footer from './footer';

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-center text-3xl font-bold mt-7 mb-4">Shop Now!</h1>
      <div className="flex-grow flex flex-wrap justify-center items-center gap-6 p-2">
        <Card
          title="Clothing"
          description="Discover the latest trends in fashion."
          image={clothingImage}
        />
        <Card
          title="Electronic Gadgets"
          description="Explore a wide range of electronic gadgets."
          image="https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white_155003-1722.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716336000&semt=ais_user"
        />
        <Card
          title="Kitchen"
          description="Find kitchen essentials and appliances."
          image="https://c1.wallpaperflare.com/preview/370/450/397/spoon-fork-knife-kitchen.jpg"
        />
        <Card
          title="Sport Kits"
          image="https://i.pinimg.com/originals/c4/c6/09/c4c60940da2d250e5472fe2fbf85f3e7.jpg"
          description="Get ready for your favorite sports activities."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
