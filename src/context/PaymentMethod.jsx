/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, useContext } from "react";
import { cart_url, shipAddres_url } from "../config/env";
import { MyAccountContext } from "./AccountContext";
import { getShipmentAddressThunk } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

export const PaymentContext = createContext({});

// provider
export const PaymentProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { userId } = useContext(MyAccountContext);
  const [showPaymentMode, setshowPaymentMode] = useState();
  const [shipmentAddress, setShipmentAddress] = useState();

  const PaymentModeDisplay = async () => {
    const response = await fetch(
      `${cart_url}&tag=get_payment_modes&intCompanyID=1`
    );
    const paymentMode = await response.json();

    const responseData = paymentMode.data;
    setshowPaymentMode(responseData);
  };

  const fetchShipmentAddress = async () => {
    try {
      const response = await fetch(
        `${cart_url}&tag=get_user_shipment_address&intUserID=${userId}`
      );
      const data = await response.json();

      setShipmentAddress(data.data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  const deleteUserAddres = async (productId) => {
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("intID", productId?.intID);

    const response = await fetch(
      `${shipAddres_url}&tag=delete_user_shipment_address`,
      {
        method: "POST",
        body: data,
      }
    );
    if (response.ok) {
      dispatch(getShipmentAddressThunk(userId));
    }
  };
  useEffect(() => {
    PaymentModeDisplay();
    fetchShipmentAddress();
  }, [userId]);

  return (
    <PaymentContext.Provider
      value={{
        shipmentAddress,
        fetchShipmentAddress,
        deleteUserAddres,
        showPaymentMode,
        setShipmentAddress,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
