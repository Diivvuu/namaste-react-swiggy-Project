import React from "react";
import { CDN_URL } from "../assets/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructure info and sla with default empty objects
  const { info = {} } = resData;
  const { cloudinaryImageId, name, avgRating, costForTwo, areaName } = info;
  const OriginalCostForTwo = costForTwo.replace(/\D/g, "");
  const modifiedCostForTwo1 = parseFloat(OriginalCostForTwo);
  const modifiedCostForTwo2 = modifiedCostForTwo1 + 200;
  // Extract deliveryTime from sla
  // const { slaString } = sla;

  // Check if cuisines array is defined and not empty
  const cuisinesArray = info.cuisines || [];
  const cuisinesText =
    cuisinesArray.length > 0 ? cuisinesArray.join(", ") : "Unknown";

  return (
    <div className="flex-col justify-center items-center rounded-2xl bg-slate-200 w-[380px] h-[480px] pb-4 relative hover:scale-90 transition-all ease duration-500">
      <div className="flex justify-center items-center rounded-lg">
        <img
          className="pt-4 px-4 w-[370px] h-[240px] "
          alt="res-images"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="flex-col justify-center px-4">
        <div className="flex justify-between p-4 font-bold">
          <h3 className="font-custom font-bold text-gray-700 text-[22px] leading-7 mb-1">
            {name}
          </h3>
          <h4>{avgRating}⭐</h4>
        </div>
        <h4 className="flex justify-center items-center text-center text-slate-500">
          {cuisinesText}
        </h4>
        <div className="flex justify-between items-center px-4 py-2">
          <h4 className="text-[#3C3C4399] text-[17px] font-bold line-through">
          ₹{modifiedCostForTwo2} for Two{" "}
          </h4>
          <h4 className="text-[17px] font-bold text-[#0FB478]">{costForTwo}</h4>
        </div>
        <h4 className="flex justify-center items-center absolute bottom-5 left-[35%]">
          📍{areaName}
        </h4>
      </div>
    </div>

    // <!-- This is an example component -->
    // <div class="flex flex-nowrap items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2">
    //   <div class="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
    //     <div class="max-w-md mx-auto">
    //       <img
    //         class="h-[450px] w-[400px] object-cover"
    //         src={CDN_URL + cloudinaryImageId}
    //       />
    //       <div class="p-4 sm:p-6">
    //         <div className="flex justify-between items-center">
    //           <p class="font-bold text-gray-700 text-[22px] leading-7 mb-1">
    //             {name}
    //           </p>
    //           <a
    //             target="_blank"
    //             href="foodiesapp://food/1001"
    //             class="p-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#ffe6a1] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
    //           >
    //             {avgRating} ⭐
    //           </a>
    //         </div>
    //         <div class="flex flex-row">
    //           <p class="text-[#3C3C4399] text-[17px] mr-2 line-through">
    //             ₹{modifiedCostForTwo2} for Two
    //           </p>
    //           <p class="text-[17px] font-bold text-[#0FB478]">{costForTwo}</p>
    //         </div>
    //         <p class="text-[#7C7C80] font-[15px] mt-6">{cuisinesText}</p>
    //         <p class="text-[#7C7C80] font-[15px] mt-6">📍{areaName}</p>
    //         <p
    //           target="_blank"
    //           class="block mt-8 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 bg-[#dec6b1] transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
    //         >
    //           Visit Restaurant
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RestaurantCard;
