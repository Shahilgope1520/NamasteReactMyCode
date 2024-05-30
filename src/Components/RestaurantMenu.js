import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(-1);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (data) =>
        data?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {category?.map((item, index) => (
        <RestaurantCategory
          key={item?.card?.card?.name}
          data={item?.card?.card}
          showItem={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
