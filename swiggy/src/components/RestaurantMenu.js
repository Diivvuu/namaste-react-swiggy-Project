import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    areaname,
    avgRating,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="flex justify-center items-center m-4">
      <div className="flex-col items-center justify-center shadow-lg rounded-3xl bg-slate-200 p-4 w-5/12">
        <h1 className="text-center text-3xl text-slate-700 font-bold my-4">
          {name}
        </h1>
        <div className="flex-col justify-center items-center">
          <h2 className="text-center underline hover:underline-offset-4 transition-all ease duration-1000 text-lg my-2">
            {cuisines.join(", ")}
          </h2>
          <h3 className="text-md my-2">{areaname}</h3>
          <div className="flex justify-center items-center gap-4">
            <h3 className="text-slate-800 text-md my-2">{avgRating}</h3>
            <h3 className="text-md my-2">{totalRatingsString}</h3>
            <h3>•</h3>
            <h3 className="text-md my-2">{costForTwoMessage}</h3>
          </div>
          <h3 className="text-center text-md my-2">
            Delivery in : {sla.slaString}
          </h3>
        </div>

        {categories.map((category) => (
          <RestaurantCategory info={category?.card?.card} />
        ))}
        {/* ))} */}
        {/* <ul className="my-4">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="text-md">
            {item.card.info.name} - Rs.
            {(item.card.info.price || item.card.info.defaultPrice) / 100}/-
          </li>
        ))}
      </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
