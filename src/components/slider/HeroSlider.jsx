import { useRef } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";

export const HeroSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    loop: true,
    dots: true,
    autoplay: true,
    arrows: true,
  };

  return (
    <section className="home-slider position-relative mb-30">
      <div className="container">
        <div className="home-slide-cover mt-30">
          <Slider
            ref={sliderRef}
            {...settings}
            className="style-4 dot-style-1 dot-style-1-position-1"
          >
            <div
              className="hero-slider-1 single-hero-slider slide_1_bg single-animation-wrap"
              key={1}
            >
              <div className="slider-content">
                <h1 className="display-2 mb-40">
                  Don’t miss amazing
                  <br />
                  grocery deals
                </h1>
                <p className="mb-65">Sign up for the daily newsletter</p>
                <form className="form-subcriber d-flex">
                  <input type="email" placeholder="Your emaill address" />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div
              className="hero-slider-1 single-hero-slider slide_2_bg single-animation-wrap"
              key={2}
            >
              <div className="slider-content">
                <h1 className="display-2 mb-40">
                  Fresh Vegetables
                  <br />
                  Big discount
                </h1>
                <p className="mb-65">Save up to 50% off on your first order</p>
                <form className="form-subcriber d-flex">
                  <input type="email" placeholder="Your emaill address" />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </Slider>
          <div className="slider-arrow hero-slider-1-arrow">
            <span className="slider-btn slider-next" onClick={next}>
              <Icon icon="uil:angle-up" rotate={1} />
            </span>
            <span className="slider-btn slider-prev" onClick={previous}>
              <Icon icon="uil:angle-up" rotate={3} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
