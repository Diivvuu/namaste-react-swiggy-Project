import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure info and sla with default empty objects
  const { info = {} } = resData;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla = {} } = info;

  // Extract deliveryTime from sla
  const { slaString } = sla;

  // Check if cuisines array is defined and not empty
  const cuisinesArray = info.cuisines || [];
  const cuisinesText =
    cuisinesArray.length > 0 ? cuisinesArray.join(", ") : "Unknown";

  return (
    <div className="res-card w-[400px] h-[380px] hover:scale-90 transition-all ease duration-500 p-5 bg-slate-400 rounded-e-full">
      {cloudinaryImageId && (
        <img
          className="w-[350px] h-[240px] rounded-lg"
          alt="res-images"
          src={CDN_URL + cloudinaryImageId}
        />
      )}
      <div className="px-2">
        <h3 className="font-custom font-bold text-lg text-slate-800">{name}</h3>
        <div className=" font-bold">
          <h4>
            {avgRating} rating • {slaString || "Not available"}
          </h4>
        </div>
        <h4 className="text-slate-500">{cuisinesText}</h4>
        {/* <h4>{costForTwo}</h4> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
