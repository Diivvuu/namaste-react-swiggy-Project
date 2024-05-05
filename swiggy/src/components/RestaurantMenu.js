import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, totalRatingsString, areaname } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  // const categories =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   );

  // console.log(categories);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4">{name}</h1>
      <div className="flex-col justify-center items-center">
        <h2 className="text-lg my-2">{cuisines.join(", ")}</h2>
        <h3 className="text-md my-2">{costForTwoMessage}</h3>
        <h3 className="text-md my-2">{areaname}</h3>
        <h3 className="text-md my-2">{totalRatingsString}</h3>
      </div>

  ))}
      {/* <ul className="my-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-md">
            {item.card.info.name} - Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}/-
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
