import React, { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.33000&lng=75.58440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline, please check your internent connection.
      </h1>
    );

  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body bg-slate-300">
      <div className="flex justify-between items-center p-12">
        <div>
          <input
            type="text"
            placeholder="Search your Restaurant..."
            className="bg-white w-80 p-2 rounded-2xl border-4 border-slate-700"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className=" w-40 font-bold text-2xl p-2 text-black"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <input
          placeholder="who are you ordering for"
          className="p-2 border-4 border-slate-700 rounded-2xl"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button
          className="bg-slate-700 py-2 px-4 border-4 border-slate-700 text-white rounded-2xl"
          onClick={() => {
            // filter logic
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );

            setfilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap gap-12 justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurants/" + restaurant.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
