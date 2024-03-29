import { CDN_IMG_URL } from "../utils/constants";

const RestaurantComp = (props) => {
  const { resData } = props; //Destructuring the data with the passed key

  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "white" }}>
      <img
        alt="food-logo"
        className="res-logo"
        src={CDN_IMG_URL + cloudinaryImageId}
      />
      <h3 className="hotels-list">{name}</h3>
      <h4 className="hotels-list">
        {avgRating} <b> .</b> {sla?.slaString} mins
      </h4>
      <h4 className="cuisine">{cuisines.join(", ")}</h4>
    </div>
  );
};
export default RestaurantComp;
