/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const addToCart = (itemId) => {
        const updatedCartItems = { ...cartItems }
        if (!updatedCartItems[itemId]) {
            updatedCartItems[itemId] = 1
        } else {
            updatedCartItems[itemId] += 1
        }
        setCartItems(updatedCartItems)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0){

                totalAmount += cartItems[key] * food_list.find(item => item._id === key).price;
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
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider