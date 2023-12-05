import { BannerSlider } from "../sliders/BannerSlider";
import { bannerData } from "../sliders/data";

export const Banner = () => {
  return (
    <section className="home-slider position-relative mb-30">
      <div className="container">
        <div className="home-slide-cover mt-30 banner-slider">
          <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
            <BannerSlider data={bannerData} />
          </div>
          <div className="slider-arrow hero-slider-1-arrow" />
        </div>
      </div>
    </section>
  );
};
