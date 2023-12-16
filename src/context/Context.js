import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    // Fetch or set initial products
    // Example: fetchProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // Your side effect logic when cartItems change
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    console.log(items);
    // Add logic to update cartItems based on the product and quantity
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    console.log(items);
    // Add logic to remove the specified product from cartItems
  };

  const handleCartProductQuantity = (type, quantity) => {
    // Add logic to handle changes in product quantity in the cart
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};
