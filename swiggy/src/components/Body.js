import React, { useEffect, useState } from "react";
import "./Body.css";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import RestaurantContainer from "./RestaurantContainer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.33000&lng=75.58440&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search your Restaurant..."
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
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
