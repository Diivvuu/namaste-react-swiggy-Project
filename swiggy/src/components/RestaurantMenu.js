import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString, areaname } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">{name}</h1>
      <h2 className="text-lg my-2">{cuisines.join(", ")}</h2>
      <h3 className="text-md my-2">{costForTwoMessage}</h3>
      <h3 className="text-md my-2">{areaname}</h3>
      <h3 className="text-md my-2">{totalRatingsString}</h3>
      <ul className="my-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-md">
            {item.card.info.name} - Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}/-
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
