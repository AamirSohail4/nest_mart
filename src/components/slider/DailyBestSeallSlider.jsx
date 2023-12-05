import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/shop/product-1-1.jpg";
import img2 from "../../assets/imgs/shop/product-1-2.jpg";
import "./dailybestseallslider.css";
export const DailyBestSeallSlider = () => {
  const settings = {
    // autoplay: false,
    // autoplayspeed: 2500,
    // arrows: true,
    // centerMode: true,
    // slidesToShow: 10,
    // slidesToScroll: 1,
    // infinite: true,
    // speed: 2500,
    autoplayspeed: 2500,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    loop: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section-padding pb-5">
        <div className="container">
          <div className="section-title wow animate__animated animate__fadeIn">
            <h3 className="">Daily Best Sells</h3>
            <ul className="nav nav-tabs links" id="myTab-2" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="nav-tab-one-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-one-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-one"
                  aria-selected="true"
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-two-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-two-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-two"
                  aria-selected="false"
                >
                  Popular
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="nav-tab-three-1"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-three-1"
                  type="button"
                  role="tab"
                  aria-controls="tab-three"
                  aria-selected="false"
                >
                  New added
                </button>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
              <div className="banner-img style-2">
                <div className="banner-text">
                  <h2 className="mb-100">Bring nature into your home</h2>
                  <Link to="shop-grid-right.html" className="btn btn-xs">
                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 col-md-12 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="tab-content" id="myTabContent-1">
                <div
                  className="tab-pane fade show active"
                  id="tab-one-1"
                  role="tabpanel"
                  aria-labelledby="tab-one-1"
                >
                  <Slider {...settings}>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="myslide">
                      <div className="product-cart-wrap">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="shop-product-right.html">
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img2} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              {" "}
                              <i className="fi-rs-eye"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              href="shop-wishlist.html"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              href="shop-compare.html"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Save 15%</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="shop-grid-right.html">Hodo Foods</Link>
                          </div>
                          <h2>
                            <Link to="shop-product-right.html">
                              Seeds of Change Organic Quinoa, Brown
                            </Link>
                          </h2>
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: "80%" }}
                            ></div>
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
                            <span className="font-xs text-heading">
                              {" "}
                              Sold: 90/120
                            </span>
                          </div>
                          <Link
                            href="shop-cart.html"
                            className="btn w-100 hover-up"
                          >
                            <i className="fi-rs-shopping-cart mr-5"></i>Add To
                            Cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
