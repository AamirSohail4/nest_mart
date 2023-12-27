import "animate.css";
import "./assets/css/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Router } from "./router/Router";
import { AppProvider } from "./context/AddresContext";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentMethod";

export const App = () => {
  return (
    <CartProvider>
      <PaymentProvider>
        <AppProvider>
          <Router />
        </AppProvider>
      </PaymentProvider>
    </CartProvider>
  );
};
