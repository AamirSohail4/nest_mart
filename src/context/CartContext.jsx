/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, createContext, useContext } from "react";
import { cart_url } from "../config/env";
import { MyAccountContext } from "./AccountContext";
import { getAllCartItemsThunk } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export const CartContext = createContext({});

// provider

export const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { userId } = useContext(MyAccountContext);

  const addProducts = async (productId, quantity) => {
    if (userId !== null) {
      let data = new FormData();
      data.append("intUserID", userId);
      data.append("intItemID", productId);
      data.append("dblItemQty", quantity);
      data.append("strItemRemarks", "");
      const response = await fetch(`${cart_url}&tag=update_user_cart_item`, {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        dispatch(getAllCartItemsThunk(userId));
      }
      //   setSelectedProductDesc(productDesc);
      //   setTimeout(() => {
      //     setSelectedProductDesc("");
      //   }, 4000);
      // } else {
      //   // alert("please first Login");
      //   navigate("/login");
      // }
    }
  };

  const addToCart = async (productId, quantity) => {
    console.log("quantity", quantity);
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("intItemID", productId);
    data.append("dblItemQty", quantity);
    data.append("strItemRemarks", "");
    const response = await fetch(`${cart_url}&tag=update_user_cart_item`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      dispatch(getAllCartItemsThunk(userId));
    }
  };

  const deleteAllCartItems = async () => {
    let data = new FormData();
    data.append("intUserID", userId);
    const response = await fetch(`${cart_url}&tag=empty_user_cart`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      dispatch(getAllCartItemsThunk(userId));
    }
  };

  // delete single cart item api
  const deleteSingleCartItem = async (product) => {
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("intItemID", product?.item?.intID);
    data.append("strItemRemark", product?.strItemRemarks);
    const response = await fetch(`${cart_url}&tag=delete_user_cart_item`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      dispatch(getAllCartItemsThunk(userId));
    }
  };

  useEffect(() => {}, [userId]);

  return (
    <CartContext.Provider
      value={{
        addProducts,

        addToCart,
        deleteAllCartItems,
        deleteSingleCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
