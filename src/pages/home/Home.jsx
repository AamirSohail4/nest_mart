import { MainSlider } from "./components/main-slider/MainSlider";
import { FeaturedCategories } from "./components/featured-categories/FeaturedCategories";
import { OfferBanner } from "./components/offer-banner/OfferBanner";
import { PopularProductsTabs } from "./components/PopularProductsTabs";
import { DailyBestSells } from "./components/daily-best-sells/DailyBestSells";
import { DealOfDay } from "./components/deal-of-day/DealOfDay";
import { TopSellingProduct } from "./components/TopSellingProduct";

export const Home = () => {
  return (
    <main className="main">
      <MainSlider />
      <FeaturedCategories />
      <OfferBanner />
      <PopularProductsTabs />
      <DailyBestSells />
      <DealOfDay />
      <TopSellingProduct />
    </main>
  );
};
