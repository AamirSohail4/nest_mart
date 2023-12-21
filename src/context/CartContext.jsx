/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import { cart_url } from "../config/env";

export const CartContext = createContext();
const myUserId = localStorage.getItem("userId");
// console.log("This My UserId===>", myUserId);
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState();
  const [cartItems, setCartItems] = useState();
  const [showPaymentMode, setshowPaymentMode] = useState();
  const [shipmentAddres, setShipmentAddres] = useState();
  async function CartItemDisplay() {
    const response = await fetch(
      `${cart_url}&tag=get_user_cart&intUserID=${localStorage.getItem(
        "userId"
      )}`
    );
    const bannerData = await response.json();
    // console.log("all cart item api respo", bannerData);
    const cartData = bannerData.data;
    setCartItem(cartData);
  }
  // show Payment modes
  async function PaymentModeDisplay() {
    const response = await fetch(
      `${cart_url}&tag=get_payment_modes&intCompanyID=1`
    );
    const paymentMode = await response.json();
    // console.log("all cart item api respo", bannerData);
    const responseData = paymentMode.data;
    setshowPaymentMode(responseData);
  }
  // console.log("Payment Modes", showPaymentMode);
  const DeleteCartSingleItem = async (item) => {
    let data = new FormData();
    data.append("intUserID", localStorage.getItem("userId"));
    data.append("intItemID", item.item.intID);
    data.append("strItemRemark", item.strItemRemarks);
    const response = await fetch(`${cart_url}&tag=delete_user_cart_item`, {
      method: "POST",
      body: data,
    });

    await response.json();
    CartItemDisplay();
  };

  const handleDeleteClick = async () => {
    try {
      let data = new FormData();
      data.append("intUserID", localStorage.getItem("userId"));

      const response = await fetch(`${cart_url}&tag=empty_user_cart`, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        // Assuming the server response contains the updated cart items
        const resData = await response.json();

        // Update the local state with the new cart items
        setCartItems(resData.updatedCartItems);
        CartItemDisplay();

        console.log("api res", resData);
      } else {
        console.error("Failed to delete items from the cart");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  };
  const fetchShipmentAddres = async () => {
    try {
      const response = await fetch(
        `${cart_url}&tag=get_user_shipment_address&intUserID=${myUserId}`
      );
      const data = await response.json();
      // console.log("This My Shipment Addres===>", data);
      setShipmentAddres(data.data[0]?.strShipmentAddress);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  // console.log("This My Shipment Addres===>", shipmentAddres);
  useEffect(() => {
    fetchShipmentAddres();
    CartItemDisplay();
    PaymentModeDisplay();
  }, [cartItems]);
  // console.log("This is Context Api Respons", contactNo);
  return (
    <CartContext.Provider
      value={{
        cartItem,
        CartItemDisplay,
        handleDeleteClick,
        DeleteCartSingleItem,
        shipmentAddres,
        fetchShipmentAddres,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
