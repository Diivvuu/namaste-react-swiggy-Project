import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../assets/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.33000&lng=75.58440&restaurantId=324765&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
      MENU_URL + resId
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, totalRatingsString, areaname } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(areaname);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h3>{areaname}</h3>
      <h3>{totalRatingsString}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
