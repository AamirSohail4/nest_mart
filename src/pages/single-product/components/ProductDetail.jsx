import Slider from "react-slick";
import Zoom from "react-img-zoom-gdn";
import { useEffect, useRef, useState } from "react";

export const ProductDetail = ({ product }) => {
  const [cartItems, setCartItems] = useState([]);
  const handelAddToCart = (strDesc) => {
    setCartItems(cartItems);
    console.log(cartItems);
  };
  const [quantity, setQuantity] = useState(1);
  const handleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleInc = () => {
    setQuantity(quantity + 1);
  };
  // console.log(quantity);
  const {
    strImage,
    strImageThumbnail,
    strItemCategory,
    strDesc,
    Binding,
    Grade,
    Type,
    Author,
    Year,
    attributes,
    dblSalePrice,
  } = product;
  const att = attributes?.[4];
  // console.log(att?.strAttributeValue);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const next = () => {
    slider2.current.slickNext();
  };

  const previous = () => {
    slider2.current.slickPrev();
  };

  const PrevArrow = () => {
    return (
      <button
        type="button"
        className="slick-prev slick-arrow"
        onClick={previous}
      >
        <i className="fi-rs-arrow-small-left"></i>
      </button>
    );
  };
  const NextArrow = () => {
    return (
      <button type="button" className="slick-next slick-arrow" onClick={next}>
        <i className="fi-rs-arrow-small-right"></i>
      </button>
    );
  };
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const thumSetting = {
    asNavFor: nav1,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    dots: false,
    adaptiveHeight: true,

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="product-detail accordion-detail">
      <div className="row mb-50 mt-30">
        <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
          <div className="detail-gallery">
            <span className="zoom-icon">
              <i className="fi-rs-search"></i>
            </span>
          
            <Slider
              asNavFor={nav2}
              ref={slider1}
              className="product-image-slider"
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
              fade={false}
            >
            
              <figure
                className="border-radius-10"
              
              >
                {strImageThumbnail && (
                  <Zoom
                    img={strImageThumbnail}
                    zoomScale={1.5}
                    height={500}
                    width={500}
                    transitionTime={0.5}
                  />
                )}
              </figure>
            </Slider>
            <Slider
              ref={slider2}
              {...thumSetting}
              className="slider-nav-thumbnails"
            >
          
              <div>
                <img src={strImage} alt="product image" />
              </div>
            </Slider>
          </div>
         
        </div>
        <div className="col-md-6 col-sm-12 col-xs-12">
          <div className="detail-info pr-30 pl-30">
            <span className="stock-status out-stock"> Sale Off </span>
            <h2 className="title-detail">{strDesc}</h2>
            <div className="product-detail-rating">
              <div className="product-rate-cover text-end">
                <div className="product-rate d-inline-block">
                  <div
                    className="product-rating"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="font-small ml-5 text-muted">(32 reviews)</span>
              </div>
            </div>
            <div className="clearfix product-price-cover">
              <div className="product-price primary-color float-left">
                <span className="current-price text-brand">{dblSalePrice}</span>
                <span>
                  <span className="save-price font-md color3 ml-15">
                    26% Off
                  </span>
                  <span className="old-price font-md ml-15">$52</span>
                </span>
              </div>
            </div>
            <div className="short-desc mb-30">
              <p className="font-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aliquam rem officia, corrupti reiciendis minima nisi modi,
                quasi, odio minus dolore impedit fuga eum eligendi.
              </p>
            </div>

            <div className="detail-extralink mb-50">
              <div className="detail-qty border radius">
                <a href="#" className="qty-down">
                  <i className="fi-rs-angle-small-down" onClick={handleDec}></i>
                </a>
                <span className="qty-val">{quantity}</span>
                <a href="#" className="qty-up">
                  <i className="fi-rs-angle-small-up" onClick={handleInc}></i>
                </a>
              </div>
              <div className="product-extra-link2">
                <button
                  type="submit"
                  className="button button-add-to-cart"
                  onClick={handelAddToCart}
                >
                  <i className="fi-rs-shopping-cart"></i>Add to cart
                </button>
                <a
                  aria-label="Add To Wishlist"
                  className="action-btn hover-up"
                  href="shop-wishlist.html"
                >
                  <i className="fi-rs-heart"></i>
                </a>
                <a
                  aria-label="Compare"
                  className="action-btn hover-up"
                  href="shop-compare.html"
                >
                  <i className="fi-rs-shuffle"></i>
                </a>
              </div>
            </div>
            <div className="font-xs">
              <ul className="mr-50 float-start">
                <li className="mb-5">
                  Grade: <span className="text-brand">{Grade}</span>
                </li>
                <li className="mb-5">
                  Typ:<span className="text-brand"> {Type}</span>
                </li>
                <li>
                  Author:{" "}
                  <span className="text-brand">AuthoerName{Author}</span>
                </li>
              </ul>
              <ul className="float-start">
                <li className="mb-5">
                  Syllabus: : <a href="#">{att?.strAttributeValue}</a>
                </li>
                <li className="mb-5">
                  Banding:{" "}
                  <a href="#" rel="Binding">
                    {Binding}
                  </a>
                </li>
                <li>
                  Year:
                  <span className="in-stock text-brand ml-5">{Year}</span>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>

      <div className="row mt-60">
        <div className="col-12">
          <h2 className="section-title style-1 mb-30">Related products</h2>
        </div>
        <div className="col-12">
          <div className="row related-products">
            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap hover-up">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html" tabIndex="0">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-2-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-2-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Quick view"
                      className="action-btn small hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-search"></i>
                    </a>
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn small hover-up"
                      href="shop-wishlist.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-heart"></i>
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn small hover-up"
                      href="shop-compare.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <h2>
                    <a href="shop-product-right.html" tabIndex="0">
                      Ulstra Bass Headphone
                    </a>
                  </h2>
                  <div className="rating-result" title="90%">
                    <span> </span>
                  </div>
                  <div className="product-price">
                    <span>$238.85 </span>
                    <span className="old-price">$245.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap hover-up">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html" tabIndex="0">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-3-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Quick view"
                      className="action-btn small hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-search"></i>
                    </a>
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn small hover-up"
                      href="shop-wishlist.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-heart"></i>
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn small hover-up"
                      href="shop-compare.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="sale">-12%</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <h2>
                    <a href="shop-product-right.html" tabIndex="0">
                      Smart Bluetooth Speaker
                    </a>
                  </h2>
                  <div className="rating-result" title="90%">
                    <span> </span>
                  </div>
                  <div className="product-price">
                    <span>$138.85 </span>
                    <span className="old-price">$145.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 col-sm-6">
              <div className="product-cart-wrap hover-up">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html" tabIndex="0">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-4-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-4-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Quick view"
                      className="action-btn small hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-search"></i>
                    </a>
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn small hover-up"
                      href="shop-wishlist.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-heart"></i>
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn small hover-up"
                      href="shop-compare.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="new">New</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <h2>
                    <a href="shop-product-right.html" tabIndex="0">
                      HomeSpeak 12UEA Goole
                    </a>
                  </h2>
                  <div className="rating-result" title="90%">
                    <span> </span>
                  </div>
                  <div className="product-price">
                    <span>$738.85 </span>
                    <span className="old-price">$1245.8</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 col-sm-6 d-lg-block d-none">
              <div className="product-cart-wrap hover-up mb-0">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html" tabIndex="0">
                      <img
                        className="default-img"
                        src="assets/imgs/shop/product-5-1.jpg"
                        alt=""
                      />
                      <img
                        className="hover-img"
                        src="assets/imgs/shop/product-3-2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Quick view"
                      className="action-btn small hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-search"></i>
                    </a>
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn small hover-up"
                      href="shop-wishlist.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-heart"></i>
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn small hover-up"
                      href="shop-compare.html"
                      tabIndex="0"
                    >
                      <i className="fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg">
                    <span className="hot">Hot</span>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <h2>
                    <a href="shop-product-right.html" tabIndex="0">
                      Dadua Camera 4K 2021EF
                    </a>
                  </h2>
                  <div className="rating-result" title="90%">
                    <span> </span>
                  </div>
                  <div className="product-price">
                    <span>$89.8 </span>
                    <span className="old-price">$98.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
