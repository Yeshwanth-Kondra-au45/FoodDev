import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StoreContext } from "./StoreContext";
import axios from "axios";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState(null);
  const [food_list, setFoodList] = useState([]);
  const url = "http://localhost:4000";

  const addToCart = (itemId) => {
    const updatedCartItems = { ...cartItems };
    if (!updatedCartItems[itemId]) {
      updatedCartItems[itemId] = 1;
    } else {
      updatedCartItems[itemId] += 1;
    }
    setCartItems(updatedCartItems);
  };
  const getFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await getFoodList();
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
      } else {
        setToken(null);
      }
    }
    loadData();
  }, []);
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        totalAmount +=
          cartItems[key] * food_list.find((item) => item._id === key).price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
