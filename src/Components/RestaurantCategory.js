import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="w-1/2 mx-auto  my-4 shadow-lg bg-gray-50 p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItem && (
        <ItemList items={data?.itemCards} key={data?.card?.info?.id} />
      )}
    </div>
  );
};

export default RestaurantCategory;
