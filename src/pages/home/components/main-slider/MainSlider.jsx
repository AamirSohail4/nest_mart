import { useRef } from "react";
import Slider from "react-slick";
import { mainSlider } from "./data";

export const MainSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
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
            className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
          >
            {mainSlider.map((item, index) => {
              return (
                <div
                  className={`single-hero-slider single-animation-wrap slide0${index}`}
                  key={index}
                >
                  <div className="slider-content">
                    {/* <h1 className="display-2 mb-40 title">{item.title}</h1>
                    <p className="mb-65">{item.news}</p> */}
                    {/* <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your emaill address" />
                      <button className="btn" type="submit">
                        Subscribe
                      </button>
                    </form> */}
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="slider-arrow hero-slider-1-arrow">
            <span className="slider-btn slider-prev" onClick={next}>
              <i className="fi-rs-angle-left"></i>
            </span>
            <span className="slider-btn slider-next" onClick={previous}>
              <i className="fi-rs-angle-right"></i>
            </span>
          </div>
        </div>
      </div>
      
    </section>
  );
};
