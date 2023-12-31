/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { shipAddres_url } from "../config/env";

export const MyAccountContext = createContext();

export const UserDetailProvider = ({ children }) => {
  const currentUserId = localStorage.getItem("userId");

  const [userAddress, setUserAddress] = useState();

  async function userDetails() {
    const response = await fetch(
      `${shipAddres_url}&tag=get_user_shipment_address&intUserID=${currentUserId}`
    );
    const bannerData = await response.json();

    setUserAddress(bannerData?.data[0]);
  }

  useEffect(() => {
    userDetails();
  }, []);
  return (
    <MyAccountContext.Provider value={{ userAddress }}>
      {children}
    </MyAccountContext.Provider>
  );
};
