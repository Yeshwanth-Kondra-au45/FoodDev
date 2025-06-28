/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext.js";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you.</h2>
      <div className="food-display-list">
        {food_list.map((food, index) => {
          if (food.category === category || category === "All") {
            return (
              <FoodItem
                key={index}
                id={food._id}
                name={food.name}
                description={food.description}
                image={food.image}
                price={food.price}
                category={category}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
