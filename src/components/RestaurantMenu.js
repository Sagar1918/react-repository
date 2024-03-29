import React, { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <ShimmerUi />;

  const { name, cuisines, price, areaName } =
    resMenu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu">
      <div className="menu-header">
        <h1 className="hotel-name">{name}</h1>
        <p className="cuisine-name">{cuisines.join(", ")}</p>
        <p className="cuisine-name">{areaName}</p>
      </div>

      <h1 className="menu-list">Menu</h1>
      {categories.map((category, index) => (
        //Here, Now RestaurantCategory is a Controlled Component
        <RestaurantCategory
          key={index}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
