/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { shipAddres_url } from "../config/env";
import { userInfo_url } from "../config/env";

export const MyAccountContext = createContext({});

export const MyAccountProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  // console.log("user id globel =>>", userId);

  const [userAddress, setUserAddress] = useState();
  const [userinfo, setUserInfo] = useState({});

  async function userDetails() {
    // console.log("user id user details funtion===>", userId);
    const response = await fetch(
      `${shipAddres_url}&tag=get_user_shipment_address&intUserID=${userId}`
    );
    const bannerData = await response.json();

    setUserAddress(bannerData?.data);
  }
  async function userInfoDisplay() {
    // console.log("user id user info dispaly vvvvv===>", userId);
    const response = await fetch(
      `${userInfo_url}&tag=get_users&intID=${userId}`
    );
    const userData = await response.json();

    setUserInfo(userData?.data[0]);
  }

  // const handleManuClick = async (categoryId, seolink, intParentID) => {
  //   // console.log("Heelo", seolink, categoryId, intParentID);
  //   // navigate(`/Category?categoryId=${intParentID}&book_name=${seolink}`);
  //   try {
  //     setLoading(true);
  //     const response = await fetch(
  //       `${api_url}&tag=get_items_web&strCategorySEOLink=${seolink}`
  //     );

  //     if (response.ok) {
  //       const manudata = await response.json();
  //       setCategoryData(manudata.data);
  //       setCatParenID(intParentID);

  //       navigate("/Category");
  //       setLoading(false);
  //     } else {
  //       console.error("API request failed with status:", response.status);
  //     }
  //   } catch (error) {
  //     console.error("Error calling API:", error);
  //   }
  // };

  useEffect(() => {
    userDetails();
    userInfoDisplay();
  }, [userId]);
  // console.log("userinfouserinfouserinfouserinfouserinfo", userinfo);
  return (
    <MyAccountContext.Provider
      value={{
        userId,
        setUserId,
        userAddress,
        userinfo,
        userInfoDisplay,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyAccountContext.Provider>
  );
};
