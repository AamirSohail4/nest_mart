import { Link } from "react-router-dom";

import { AllProduct_Url } from "../../../../config/env";
import { useEffect, useState } from "react";
export const PopularProducts = () => {
  const [myproduct, setMyProduct] = useState([]);
  useEffect(() => {
    async function AllProductShow() {
      const response = await fetch(AllProduct_Url);
      const productData = await response.json();

      setMyProduct(productData.data);
    }
    AllProductShow();
  }, []);
  // console.log(myproduct);
  return (
    <>
      <div className="product-tabs section-padding position-relative">
        <div className="container">
          <div
            className="section-title style-2 wow animate__ animate__fadeIn"
            style={{
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeIn",
            }}
          >
            <h3>Popular Products</h3>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="row product-grid-4">
              {myproduct?.map((item) => {
                return (
                  <Link
                    to="/"
                    key={item.intID}
                    className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                  >
                    <div
                      className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated"
                      data-wow-delay=".2s"
                      style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeIn",
                      }}
                    >
                      <div className="product-img-action-wrap">
                        <div className="product-img product-img-zoom">
                          <Link to={`single-product/${item.intID}`}>
                            <img
                              className="default-img"
                              src={item.strImageThumbnail}
                              alt=""
                            />
                            <img
                              className="hover-img"
                              src={item.strImageThumbnail}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="product-action-1">
                          <Link
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            href="/shop-wishlist"
                          >
                            <i className="fi-rs-heart"></i>
                          </Link>
                          <Link
                            aria-label="Compare"
                            className="action-btn"
                            href="/shop-compare"
                          >
                            <i className="fi-rs-shuffle"></i>
                          </Link>
                          <Link
                            aria-label="Quick view"
                            className="action-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#quickViewModal"
                          >
                            <i className="fi-rs-eye"></i>
                          </Link>
                        </div>
                        <div className="product-badges product-badges-position product-badges-mrg">
                          <span className="sale">Sale</span>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <Link to="shop-grid-right.html">
                            {item.strItemCategory}
                          </Link>
                        </div>
                        <h2>
                          <Link href="/">{item.strDesc}</Link>
                        </h2>
                        <div className="product-rate-cover">
                          <div className="product-rate d-inline-block">
                            <div
                              className="product-rating"
                              style={{ width: " 80%" }}
                            ></div>
                          </div>
                          <span className="font-small ml-5 text-muted">
                            {" "}
                            (3.5)
                          </span>
                        </div>
                        <div>
                          <span className="font-small text-muted">
                            By<Link to="/">Author Name</Link>
                          </span>
                        </div>
                        <div className="product-card-bottom">
                          <div className="product-price">
                            <span>{item.dblSalePrice}</span>
                            <span className="old-price">$55.8</span>
                          </div>
                          <div className="add-cart">
                            <Link
                              className="add"
                              to={`single-product/${item.intID}`}
                            >
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
