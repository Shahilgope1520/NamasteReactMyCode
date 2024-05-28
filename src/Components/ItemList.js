import React from "react";
import { CDN_URL } from "../Utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            key={item?.card?.info?.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  - ₹
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="bg-black text-white rounded">Add +</button>
                </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                alt="No Preview"
                className="w-full"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
