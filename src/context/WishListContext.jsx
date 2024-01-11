/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, createContext, useState, useContext } from "react";
import { shipAddres_url } from "../config/env";

import { MyAccountContext } from "./AccountContext";

export const WishListContext = createContext({});

// provider

export const WishListProvider = ({ children }) => {
  const { userId } = useContext(MyAccountContext);
  // const [loading, setLoading] = useState(false);
  // console.log('mmmmm', userId);
  // const navigate = useNavigate();
  const [wishListItem, setWishListItem] = useState();
  // const [searchCategory, setSearchCategory] = useState();

  // use this function for product add into cart
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
      console.log("mmmm", response);
      WishListDisplay();
    }
  };

  // fetch all Wish List  items from db
  const WishListDisplay = async () => {
    const response = await fetch(
      `${shipAddres_url}&tag=get_user_wishlist&intUserID=${userId}`
    );
    const wishListItem = await response.json();

    setWishListItem(wishListItem.data);
    // console.log('my wishilist', wishListItem);
  };

  // const SerchCategoryClick = async (selectedCategoryId, searchQuery) => {
  //   try {
  //     navigate("/categories");
  //     setLoading(true);
  //     const response = await fetch(
  //       `${relateProd_url}&tag=get_items_web&intCategoryID=${selectedCategoryId}&strSearch=${searchQuery}`
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const myQueryData = await response.json();
  //     setLoading(false);
  //     if (myQueryData.status === "1") {
  //       setSearchCategory(myQueryData.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

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
      WishListDisplay();
    }
  };

  useEffect(() => {
    WishListDisplay();
  }, [userId]);

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        wishListItem,
        deleteWishlist,

        // deleteAllCartItems,
        // deleteSingleCartItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
