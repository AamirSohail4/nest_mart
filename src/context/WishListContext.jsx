import { useEffect, createContext, useState } from "react";
import { shipAddres_url } from "../config/env";
// import { useNavigate } from "react-router-dom";

export const WishListContext = createContext({});
const currentUserId = localStorage.getItem("userId");

// provider
export const WishListProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [wishListItem, setWishListItem] = useState();

  // use this function for product add into cart
  const addToWishList = async (productId) => {
    console.log("ddd", productId);
    let data = new FormData();
    data.append("intUserID", currentUserId);
    data.append("intItemID", productId);

    const response = await fetch(
      `${shipAddres_url}&tag=add_user_wishlist_item`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      WishListDisplay();
    }
  };

  // fetch all Wish List  items from db
  const WishListDisplay = async () => {
    const response = await fetch(
      `${shipAddres_url}&tag=get_user_wishlist&intUserID=${currentUserId}`
    );
    const wishListItem = await response.json();

    setWishListItem(wishListItem.data);
  };

  //   const deleteAllCartItems = async () => {
  //     let data = new FormData();
  //     data.append("intUserID", currentUserId);
  //     const response = await fetch(`${cart_url}&tag=empty_user_cart`, {
  //       method: "POST",
  //       body: data,
  //     });

  //     if (response.ok) {
  //       cartItemDisplay();
  //     }
  //   };

  //delete single cart item api
  const deleteWishlist = async (productId) => {
    console.log("product Id", productId);
    let data = new FormData();
    data.append("intUserID", currentUserId);
    data.append("intItemID", productId?.intID);

    const response = await fetch(
      `${shipAddres_url}&tag=delete_user_wishlist_item`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      WishListDisplay();
    }
  };

  useEffect(() => {
    WishListDisplay();
  }, []);

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        wishListItem,
        deleteWishlist,
        // cartItemDisplay,
        // deleteAllCartItems,
        // deleteSingleCartItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
