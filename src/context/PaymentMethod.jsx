/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { cart_url } from "../config/env";

export const PaymentContext = createContext({});

// provider
export const PaymentProvider = ({ children }) => {
  const currentUserId = localStorage.getItem("userId");
  const [showPaymentMode, setshowPaymentMode] = useState();
  const [shipmentAddress, setShipmentAddress] = useState();

  const PaymentModeDisplay = async () => {
    const response = await fetch(
      `${cart_url}&tag=get_payment_modes&intCompanyID=1`
    );
    const paymentMode = await response.json();
    // console.log(paymentMode);
    const responseData = paymentMode.data;
    setshowPaymentMode(responseData);
  };

  const fetchShipmentAddress = async () => {
    try {
      const response = await fetch(
        `${cart_url}&tag=get_user_shipment_address&intUserID=${currentUserId}`
      );
      const data = await response.json();

      setShipmentAddress(data.data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  fetchShipmentAddress();
  useEffect(() => {
    PaymentModeDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        shipmentAddress,
        fetchShipmentAddress,
        showPaymentMode,
        setShipmentAddress,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
