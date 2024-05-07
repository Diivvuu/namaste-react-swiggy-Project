import React from "react";
import { ITEM_API } from "../assets/constants";
import vegLogo from "../assets/veg-icon.webp";
import nonVegLogo from "../assets/nonVeg-icon.webp";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <span className="flex justify-between items-center py-4 px-8 mt-4 bg-slate-200 shadow-lg w-6/12 mx-auto rounded-2xl">
            <div className="flex-col w-9/12">
              <span>
                {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                  <img className="w-4 my-2" src={vegLogo} />
                ) : (
                  <img className="w-4 my-2" src={nonVegLogo} />
                )}
              </span>
              <h2 className="font-bold font-custom text-xl">
                {item.card?.info?.name}
              </h2>
              <div className="flex gap-2 text-lg">
                <h3 className="line-through text-slate-600">
                  ₹
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100 +
                    100}
                </h3>
                <h3 className="">
                  ₹
                  {(item.card?.info?.price || item.card?.info?.defaultPrice) /
                    100}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{item?.card?.info?.description}</p>
            </div>
            <img
              className="w-36 rounded-lg"
              src={ITEM_API + item?.card?.info?.imageId}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
