import React from "react";

const RestaurantCategory = ({ info }) => {
  return (
    <div className="flex justify-center">
      <h2 className="font-bold text-lg">{info.title}</h2>
    </div>
  );
};

export default RestaurantCategory;
