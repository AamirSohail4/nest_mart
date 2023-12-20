// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { AppProvider } from "./context/AddresContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </CartProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
