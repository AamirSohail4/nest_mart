import "animate.css";
import "./assets/css/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Router } from "./router/Router";
import { AppProvider } from "./context/AddresContext";
import { CartProvider } from "./context/CartContext";
import { PaymentProvider } from "./context/PaymentMethod";
import { UserDetailProvider } from "./context/AccountContext";
import { WishListProvider } from "./context/WishListContext";

export const App = () => {
  return (
    <WishListProvider>
      <CartProvider>
        <UserDetailProvider>
          <PaymentProvider>
            <AppProvider>
              <Router />
            </AppProvider>
          </PaymentProvider>
        </UserDetailProvider>
      </CartProvider>
    </WishListProvider>
  );
};
