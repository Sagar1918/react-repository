import React from "react";
import { MENU_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between items-center my-5 p-4 shadow-lg border-gray-200 border-b-4"
        >
          <div>
            <div>{item.card.info.name}</div>
            <div>
              ₹
              {Math.floor(
                item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100
              )}
            </div>
            <div className="text-gray-400 text-sm mt-4">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-24 rounded-lg">
            <img src={MENU_IMG + item.card.info.imageId} />
            <button onClick={() => handleAddItem(item)}>Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
