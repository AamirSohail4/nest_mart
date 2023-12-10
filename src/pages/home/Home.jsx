import { MainSlider } from "./components/main-slider/MainSlider";
import { OfferBanner } from "./components/offer-banner/OfferBanner";
import { PopularProducts } from "./components/products/PopularProducts";

export const Home = () => {
  return (
    <main className="main">
      <MainSlider />
      <OfferBanner />
      <PopularProducts />
    </main>
  );
};
