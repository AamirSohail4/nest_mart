/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { cart_url } from "../config/env";
// import { useNavigate } from "react-router-dom";

export const CartContext = createContext({});
const currentUserId = localStorage.getItem("userId");

// provider
export const CartProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [cartItem, setCartItem] = useState();

  // use this function for product add into cart
  const addToCart = async (productId, quantity) => {
    console.log("ddd", productId);
    let data = new FormData();
    data.append("intUserID", currentUserId);
    data.append("intItemID", productId);
    data.append("dblItemQty", quantity);
    data.append("strItemRemarks", "");
    const response = await fetch(`${cart_url}&tag=add_user_cart_item`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      cartItemDisplay();
    }
  };

  // fetch all cart items from db
  const cartItemDisplay = async () => {
    const response = await fetch(
      `${cart_url}&tag=get_user_cart&intUserID=${currentUserId}`
    );
    const cartItems = await response.json();
    setCartItem(cartItems.data);
  };

  const deleteAllCartItems = async () => {
    let data = new FormData();
    data.append("intUserID", currentUserId);
    const response = await fetch(`${cart_url}&tag=empty_user_cart`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      cartItemDisplay();
    }
  };

  // delete single cart item api
  const deleteSingleCartItem = async (product) => {
    let data = new FormData();
    data.append("intUserID", currentUserId);
    data.append("intItemID", product?.item?.intID);
    data.append("strItemRemark", product?.strItemRemarks);
    const response = await fetch(`${cart_url}&tag=delete_user_cart_item`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      cartItemDisplay();
    }
  };

  useEffect(() => {
    cartItemDisplay();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        cartItemDisplay,
        deleteAllCartItems,
        deleteSingleCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
