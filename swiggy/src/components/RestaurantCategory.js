import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ info }) => {
  const [showIndex, setshowIndex] = useState();
  const handleClick = () => {
    setshowIndex(!showIndex);
  };
  return (
    <div className="my-12">
      <div
        className="flex justify-between bg-slate-400 w-6/12 py-10 px-8 mx-auto shadow-lg rounded-2xl"
        onClick={handleClick}
      >
        <span className="font-bold text-lg ">
          {info.title} ({info.itemCards.length})
        </span>
        <span>🔻</span>
      </div>
      <div>{showIndex && <ItemList items={info?.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
