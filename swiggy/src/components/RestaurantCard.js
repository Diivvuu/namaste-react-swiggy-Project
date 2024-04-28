import React from "react";
import { CDN_URL } from "../assets/constants";
import "./RestaurantCard.css";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure info and sla with default empty objects
  const { info = {} } = resData;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla = {} } = info;

  // Extract deliveryTime from sla
  const { slaString } = sla;

  // Check if cuisines array is defined and not empty
  const cuisinesArray = info.cuisines || [];
  const cuisinesText = cuisinesArray.length > 0 ? cuisinesArray.join(", ") : "Unknown";

  return (
    <div className="res-card">
      {cloudinaryImageId && (
        <img
          className="res-logo"
          alt="res-images"
          src={CDN_URL + cloudinaryImageId}
        />
      )}
      <h3>{name}</h3>
      <h4>{slaString || "Not available"}</h4>
      <h4>{cuisinesText}</h4>
      <h4>{avgRating} rating</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
