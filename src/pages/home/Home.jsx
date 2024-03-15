import { useEffect } from "react";
import { NewsLetterForm } from "../../layouts/NewsLetterForm";
import { MainSlider } from "./components/main-slider/MainSlider";
import { PopularProducts } from "./components/products/PopularProducts";
import { ShopMenuBar } from "./components/teacherInfo/ShopMenuBar";

export const Home = () => {
  useEffect(() => {
    document.title = "Ms Books | Home";
  });
  return (
    <main className="main">
      <MainSlider />
      <PopularProducts />
      <ShopMenuBar />
      <NewsLetterForm />
    </main>
  );
};
