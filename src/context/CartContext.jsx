/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from 'react';
import { cart_url } from '../config/env';
import { MyAccountContext } from './AccountContext';

export const CartContext = createContext({});

// provider
export const CartProvider = ({ children }) => {
  const { userId } = useContext(MyAccountContext);
  const [cartItem, setCartItem] = useState();

  const addToCart = async (productId, quantity) => {
    console.log('quantity', quantity);
    let data = new FormData();
    data.append('intUserID', userId);
    data.append('intItemID', productId);
    data.append('dblItemQty', quantity);
    data.append('strItemRemarks', '');
    const response = await fetch(`${cart_url}&tag=update_user_cart_item`, {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      cartItemDisplay();
    }
  };

  // fetch all cart items from db
  const cartItemDisplay = async () => {
    const response = await fetch(
      `${cart_url}&tag=get_user_cart&intUserID=${userId}`
    );
    const cartItems = await response.json();
    setCartItem(cartItems.data);
  };

  const deleteAllCartItems = async () => {
    let data = new FormData();
    data.append('intUserID', userId);
    const response = await fetch(`${cart_url}&tag=empty_user_cart`, {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      cartItemDisplay();
    }
  };

  // delete single cart item api
  const deleteSingleCartItem = async (product) => {
    let data = new FormData();
    data.append('intUserID', userId);
    data.append('intItemID', product?.item?.intID);
    data.append('strItemRemark', product?.strItemRemarks);
    const response = await fetch(`${cart_url}&tag=delete_user_cart_item`, {
      method: 'POST',
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
