import { Link } from "react-router-dom";
import { api_url } from "../../config/env";
import { useEffect, useState } from "react";

export const ProductsGrid = () => {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    async function AllProducts() {
      const response = await fetch(
        `${api_url}&tag=get_items_web&Pagination=20`
      );
      const productData = await response.json();
      setAllProducts(productData.data);
    }
    AllProducts();
  }, []);
  console.log(allProducts);
  return (
    <>
      <main className="main" style={{ transform: "none" }}>
        <div className="page-header mt-30 mb-50">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <h1 className="mb-15">All Products</h1>
                  <div className="breadcrumb">
                    <Link to="/" rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>Home
                    </Link>
                    <span></span> Shop <span></span> Products
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-30" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div className="col-lg-5-5">
              <div className="row product-grid">
                {allProducts?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                    >
                      <Link
                        to={`/single-product/${item.strSEOLink}`}
                        className="product-cart-wrap mb-30"
                      >
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to={`/single-product/${item.strSEOLink}`}>
                              <img src={item.strImageThumbnail} />
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
                              to="/shop-wishlist"
                            >
                              <i className="fi-rs-heart"></i>
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
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to={`/single-product/${item.strSEOLink}`}>
                              {item.strItemCategory}
                            </Link>
                          </div>
                          <h2>
                            <Link to={`/single-product/${item.strSEOLink}`}>
                              {item.strDesc}
                            </Link>
                          </h2>
                          <div className="product-rate-cover">
                            <div className="product-rate d-inline-block">
                              <div
                                className="product-rating"
                                style={{ width: "90%" }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <span className="font-small text-muted"></span>
                          </div>
                          <div className="product-card-bottom">
                            <div className="product-price">
                              <span>Rs: {item.dblSalePrice}</span>
                            </div>
                            <div className="add-cart">
                              <Link
                                className="add"
                                to={`/single-product/${item.strSEOLink}`}
                              >
                                <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
