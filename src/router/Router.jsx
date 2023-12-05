import { Routes, Route } from "react-router-dom";
import { FrontendLayout } from "../layouts/FrontendLayout";
import { Home } from "../pages/home/Home";
import { SingleProduct } from "../pages/single-product/SingleProduct";
import { ShopCart } from "../pages/cart/ShopCart";
import { ShopWishlist } from "../pages/cart/ShopWishlist";
import { ShopCompare } from "../pages/cart/ShopCompare";
import { ShopCheckout } from "../pages/cart/ShopCheckout";
import { Login } from "../pages/login/Login";
import { Register } from "../pages/login/Register";
// import { AllProduct } from "../pages/allproduct/AllProduct";
// import { SingleProduct } from "../pages/allproduct/SingleProduct";
// import { PopularProductsTabs } from "../pages/allproduct/PopularProducts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="single-product" element={<SingleProduct />} />
        <Route path="shop-cart" element={<ShopCart />} />
        <Route path="shop-wishlist" element={<ShopWishlist />} />
        <Route path="shop-compare" element={<ShopCompare />} />
        <Route path="shop.checkout" element={<ShopCheckout />} />
        <Route path="login-page" element={<Login />} />
        <Route path="register-page" element={<Register />} />
        {/* <Route path="popularProduct" element={<PopularProducts />} /> */}
        {/* <Route path="allproduct" element={<AllProduct />} />
        <Route path="singleproduct/:id" element={<SingleProduct />} /> */}
      </Route>
    </Routes>
  );
};
