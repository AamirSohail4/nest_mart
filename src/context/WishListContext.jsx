/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, createContext, useContext } from "react";
import { shipAddres_url } from "../config/env";
import { MyAccountContext } from "./AccountContext";
import { getAllWishlistItemsThunk } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
export const WishListContext = createContext({});

export const WishListProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { userId } = useContext(MyAccountContext);

  const addToWishList = async (productId) => {
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("intItemID", productId);

    const response = await fetch(
      `${shipAddres_url}&tag=add_user_wishlist_item`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      dispatch(getAllWishlistItemsThunk(userId));
    }
  };
  const deleteWishlist = async (productId) => {
    console.log("product Id", productId.intID);
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("intItemID", productId?.intID);

    const response = await fetch(
      `${shipAddres_url}&tag=delete_user_wishlist_item`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      dispatch(getAllWishlistItemsThunk(userId));
    }
  };

  useEffect(() => {}, [userId]);

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        deleteWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
