import { Link } from "react-router-dom";
import img1 from "../../../assets/imgs/shop/thumbnail-1.jpg";
import img2 from "../../../assets/imgs/shop/thumbnail-2.jpg";
import img3 from "../../../assets/imgs/shop/thumbnail-3.jpg";
import img4 from "../../../assets/imgs/shop/thumbnail-4.jpg";
import img5 from "../../../assets/imgs/shop/thumbnail-5.jpg";
import img6 from "../../../assets/imgs/shop/thumbnail-6.jpg";
import img7 from "../../../assets/imgs/shop/thumbnail-7.jpg";
import img8 from "../../../assets/imgs/shop/thumbnail-8.jpg";
import img9 from "../../../assets/imgs/shop/thumbnail-9.jpg";
import img10 from "../../../assets/imgs/shop/thumbnail-10.jpg";
import img11 from "../../../assets/imgs/shop/thumbnail-11.jpg";
import img12 from "../../../assets/imgs/shop/thumbnail-12.jpg";

export const TopSellingProduct = () => {
  return (
    <>
      <section className="section-padding mb-30">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__ animate__fadeInUp animated  animate__animated animate__bounce"
              data-wow-delay="0"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="section-title style-1 mb-30 animated animated">
                Top Selling
              </h4>
              <div className="product-list-small animated animated">
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img1} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img2} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img3} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Nestle Original Coffee-Mate Coffee Creamer
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="section-title style-1 mb-30 animated animated">
                Trending Products
              </h4>
              <div className="product-list-small animated animated">
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img4} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Organic Cage-Free Grade A Large Brown Eggs
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img5} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img6} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Naturally Flavored Cinnamon Vanilla Light Roast Coffee
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__ animate__fadeInUp animated  animate__animated animate__bounce"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="section-title style-1 mb-30 animated animated">
                Recently added
              </h4>
              <div className="product-list-small animated animated">
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img7} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Pepperidge Farm Farmhouse Hearty White Bread
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img8} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Organic Frozen Triple Berry Blend
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img9} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Oroweat Country Buttermilk Bread
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="section-title style-1 mb-30 animated animated">
                Top Rated
              </h4>
              <div className="product-list-small animated animated">
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img10} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Foster Farms Takeout Crispy classNameic Buffalo Wings
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img11} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        Angie’s Boomchickapop Sweet &amp; Salty Kettle Corn
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
                <article className="row align-items-center hover-up">
                  <figure className="col-md-4 mb-0">
                    <Link to="shop-product-right.html">
                      <img src={img12} alt="" />
                    </Link>
                  </figure>
                  <div className="col-md-8 mb-0">
                    <h6>
                      <Link to="shop-product-right.html">
                        All Natural Italian-Style Chicken Meatballs
                      </Link>
                    </h6>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div
                          className="product-rating"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div className="product-price">
                      <span>$32.85</span>
                      <span className="old-price">$33.8</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
