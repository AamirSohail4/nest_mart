import { useRef } from "react";
import Slider from "react-slick";
import productImg01 from "../../../../assets/imgs/shop/product-1-1.jpg";
import productImg02 from "../../../../assets/imgs/shop/product-1-2.jpg";

const CustomeSlide = () => {
  return (
    <div className="product-cart-wrap">
      <div className="product-img-action-wrap">
        <div className="product-img product-img-zoom">
          <a href="shop-product-right.html">
            <img className="default-img" src={productImg01} alt="" />
            <img className="hover-img" src={productImg02} alt="" />
          </a>
        </div>
        <div className="product-action-1">
          <a
            aria-label="Quick view"
            className="action-btn small hover-up"
            data-bs-toggle="modal"
            data-bs-target="#quickViewModal"
          >
            <i className="fi-rs-eye"></i>
          </a>
          <a
            aria-label="Add To Wishlist"
            className="action-btn small hover-up"
            href="shop-wishlist.html"
          >
            <i className="fi-rs-heart"></i>
          </a>
          <a
            aria-label="Compare"
            className="action-btn small hover-up"
            href="shop-compare.html"
          >
            <i className="fi-rs-shuffle"></i>
          </a>
        </div>
        <div className="product-badges product-badges-position product-badges-mrg">
          <span className="hot">Save 15%</span>
        </div>
      </div>
      <div className="product-content-wrap">
        <div className="product-category">
          <a href="shop-grid-right.html">Hodo Foods</a>
        </div>
        <h2>
          <a href="shop-product-right.html">
            Seeds of Change Organic Quinoa, Brown
          </a>
        </h2>
        <div className="product-rate d-inline-block">
          <div className="product-rating" style={{ width: "80%" }}></div>
        </div>
        <div className="product-price mt-10">
          <span>$238.85 </span>
          <span className="old-price">$245.8</span>
        </div>
        <div className="sold mt-15 mb-15">
          <div className="progress mb-5">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <span className="font-xs text-heading">Sold: 90/120</span>
        </div>
        <a href="shop-cart.html" className="btn w-100 hover-up">
          <i className="fi-rs-shopping-cart mr-5"></i>Add To Cart
        </a>
      </div>
    </div>
  );
};

export const FeatureProductSlider = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="carausel-4-columns-cover arrow-center position-relative">
      <div
        className="slider-arrow slider-arrow-2 carausel-4-columns-arrow"
        id="carausel-4-columns-arrows"
      >
        <span className="slider-btn slider-prev" onClick={previous}>
          <i className="fi-rs-arrow-small-left"></i>
        </span>
        <span className="slider-btn slider-next" onClick={next}>
          <i className="fi-rs-arrow-small-right"></i>
        </span>
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="carausel-4-columns carausel-arrow-center"
      >
        {/* {featureCategories.map((item, index) => {
          return <CustomeSlide data={item} key={index} />;
        })} */}
        <CustomeSlide />
        <CustomeSlide />
        <CustomeSlide />
        <CustomeSlide />
        <CustomeSlide />
        <CustomeSlide />
        <CustomeSlide />
      </Slider>
    </div>
  );
};
