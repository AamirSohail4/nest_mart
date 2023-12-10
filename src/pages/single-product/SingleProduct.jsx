import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { PrimerySidbar } from "../../components/breadcrumb/sidebar/PrimerySidbar";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Single_Url } from "../../config/env";

export const SingleProduct = () => {
  const { id } = useParams();

  const [singleproduct, setSingleProduct] = useState([]);
  useEffect(() => {
    async function SingleProductShow() {
      const response = await fetch(`${Single_Url}=${id}`);

      const productData = await response.json();
      //   console.log(productData.data);
      setSingleProduct(productData.data);
    }
    SingleProductShow();
  }, [id]);
  console.log("Single Product=>", singleproduct);

  return (
    <>
      <Breadcrumb />
      <div className="container mb-30" style={{ transform: "none" }}>
        <div
          className="col-xl-11 col-lg-12 m-auto"
          style={{ transform: "none" }}
        >
          <div className="row" style={{ transform: "none" }}>
            <div className="col-xl-9">
              <div className="product-detail accordion-detail">
                {singleproduct?.map((item) => {
                  return (
                    <div key={item.intID} className="row mb-50 mt-30">
                      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                        <h3>Slider of Single Product</h3>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="detail-info pr-30 pl-30">
                          <span className="stock-status out-stock">
                            {" "}
                            Sale Off{" "}
                          </span>
                          <h2 className="title-detail">{item.strDesc}</h2>
                          <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (32 reviews)
                              </span>
                            </div>
                          </div>
                          <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                              <span className="current-price text-brand">
                                {item.dblSalePrice}
                              </span>
                              <span>
                                <span className="save-price font-md color3 ml-15">
                                  26% Off
                                </span>
                                <span className="old-price font-md ml-15">
                                  1200
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-30">
                            <p className="font-lg">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquam rem officia, corrupti
                              reiciendis minima nisi modi, quasi, odio minus
                              dolore impedit fuga eum eligendi.
                            </p>
                          </div>

                          <div className="detail-extralink mb-50">
                            <div className="detail-qty border radius">
                              <Link to="#" className="qty-down">
                                <Icon icon="prime:angle-down" />
                              </Link>
                              <span className="qty-val">1</span>
                              <Link to="#" className="qty-up">
                                <Icon icon="prime:angle-up" />
                              </Link>
                            </div>
                            <div className="product-extra-link2">
                              <button
                                type="submit"
                                className="button button-add-to-cart"
                              >
                                <Icon icon="mdi-light:cart" />
                                Add to cart
                              </button>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                to="shop-wishlist.html"
                              >
                                <Icon icon="ph:heart-thin" />
                              </Link>
                              <Link
                                aria-label="Compare"
                                className="action-btn hover-up"
                                to="shop-compare.html"
                              >
                                <Icon icon="circum:shuffle" />
                              </Link>
                            </div>
                          </div>
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <li className="mb-5">
                                Grade:
                                <span className="text-brand">{item.Grade}</span>
                              </li>
                              <li className="mb-5">
                                Type:
                                <span className="text-brand"> {item.Type}</span>
                              </li>
                              <li>
                                LIFE:{" "}
                                <span className="text-brand">70 days</span>
                              </li>
                            </ul>
                            <ul className="float-start">
                              <li className="mb-5">
                                SKU: <Link to="#">FWM15VKT</Link>
                              </li>
                              <li className="mb-5">
                                Tags:{" "}
                                <Link to="#" rel="tag">
                                  Snack
                                </Link>
                                ,{" "}
                                <Link to="#" rel="tag">
                                  Organic
                                </Link>
                                <Link to="#" rel="tag">
                                  Brown
                                </Link>
                              </li>
                              <li>
                                Stock:
                                <span className="in-stock text-brand ml-5">
                                  8 Items In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row mt-60">
                <div className="col-12">
                  <h2 className="section-title style-1 mb-30">
                    Related products
                  </h2>
                </div>
                <div className="col-12">
                  <div className="row related-products">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap hover-up">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link a="shop-product-right.html" tabIndex="0">
                              <img className="default-img" src={img7} alt="" />
                              <img className="hover-img" src={img8} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-search"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              to="shop-wishlist.html"
                              tabIndex="0"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              to="shop-compare.html"
                              tabIndex="0"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Hot</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <Link to="shop-product-right.html" tabIndex="0">
                              Ulstra Bass Headphone
                            </Link>
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
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 primary-sidebar sticky-sidebar mt-30"
              style={{
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px",
              }}
            >
              <PrimerySidbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
