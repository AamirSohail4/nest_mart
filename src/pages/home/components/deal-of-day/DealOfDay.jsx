import { Link } from "react-router-dom";
import img1 from "../../../../assets/imgs/banner/banner-5.png";
import img2 from "../../../../assets/imgs/banner/banner-6.png";
import img3 from "../../../../assets/imgs/banner/banner-7.png";
import img5 from "../../../../assets/imgs/banner/banner-8.png";

export const DealOfDay = () => {
  return (
    <>
      <section className="section-padding pb-5">
        <div className="container">
          <div
            className="section-title wow animate__ animate__fadeIn animated"
            data-wow-delay="0"
            style={{ visibility: "visible", animationName: "fadeIn" }}
          >
            <h3 className="">Deals Of The Day</h3>
            <Link className="show-all" href="shop-grid-right.html">
              All Deals
              <i className="fi-rs-angle-right"></i>
            </Link>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated"
                data-wow-delay="0"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="shop-product-right.html">
                      <img src={img1} alt="" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2025/03/25 00:00:00"
                    >
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">476</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">08</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">25</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">22</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <Link to="shop-product-right.html">
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </Link>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <Link to="vendor-details-1.html">NestFood</Link>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$32.85</span>
                        <span className="old-price">$33.8</span>
                      </div>
                      <div className="add-cart">
                        <Link className="add" href="shop-cart.html">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <Link to="shop-product-right.html">
                      <img src={img2} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2026/04/25 00:00:00"
                    >
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">872</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">08</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">25</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">22</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <Link to="shop-product-right.html">
                        Perdue Simply Smart Organics Gluten Free
                      </Link>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <Link to="vendor-details-1.html">Old El Paso</Link>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$24.85</span>
                        <span className="old-price">$26.8</span>
                      </div>
                      <div className="add-cart">
                        <Link className="add" href="shop-cart.html">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 d-none d-lg-block">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".2s"
                style={{
                  visibility: " visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <Link to="shop-product-right.html">
                      <img src={img3} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2027/03/25 00:00:00"
                    >
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">1206</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">08</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">25</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">22</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <Link to="shop-product-right.html">
                        Signature Wood-Fired Mushroom and Caramelized
                      </Link>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <Link to="vendor-details-1.html">Progresso</Link>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$12.85</span>
                        <span className="old-price">$13.8</span>
                      </div>
                      <div className="add-cart">
                        <Link className="add" href="shop-cart.html">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 d-none d-xl-block">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: " 0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <Link to="shop-product-right.html">
                      <img src={img5} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2025/02/25 00:00:00"
                    >
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">448</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">08</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">25</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">22</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <Link to="shop-product-right.html">
                        Simply Lemonade with Raspberry Juice
                      </Link>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <Link to="vendor-details-1.html">Yoplait</Link>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$15.85</span>
                        <span className="old-price">$16.8</span>
                      </div>
                      <div className="add-cart">
                        <Link className="add" href="shop-cart.html">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
