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
import { About } from "../pages/about/About";
import { MyAccount } from "../pages/myAccount/MyAccount";
import { PrivacyPolicy } from "../pages/privacyPolicy/PrivacyPolicy";
import { Contact } from "../pages/contact/Contact";
import { PurchaseGuide } from "../pages/purchaseGuide/PurchaseGuide";
import { Terms } from "../pages/termsAndServices/Terms";
import { PageNotFound } from "../pages/pagenotFound/PageNotFound";
import { ProductsGrid } from "../pages/allproduct/ProductsGrid";
import { QuickView } from "../pages/cart/QuickView";
import { Teacher } from "../pages/teacher/Teacher";
import { TeacherDetail } from "../pages/teacher/TeacherDetail";
import { BookShop } from "../pages/shop/BookShop";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FrontendLayout />}>
        <Route index element={<Home />} />
        <Route path="allProducts" element={<ProductsGrid />} />
        <Route path="single-product/:seoLink" element={<SingleProduct />} />
        <Route path="shop-cart" element={<ShopCart />} />
        <Route path="shop-wishlist" element={<ShopWishlist />} />
        <Route path="shop-compare" element={<ShopCompare />} />
        <Route path="checkout" element={<ShopCheckout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="myacount" element={<MyAccount />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="contact" element={<Contact />} />
        <Route path="purchase-guide" element={<PurchaseGuide />} />
        <Route path="terms" element={<Terms />} />
        <Route path="quick-view" element={<QuickView />} />
        <Route path="teacher" element={<Teacher />} />
        <Route
          path="teacher-detail/:strSEOLink/:id"
          element={<TeacherDetail />}
        />
        <Route path="book-shop" element={<BookShop />} />
        <Route path="page-404" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
