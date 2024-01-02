/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import loadingGif from "../../../assets/imgs/banner/loading.gif";
import { WishListContext } from "../../../context/WishListContext";
import { Link } from "react-router-dom";

export const Categories = () => {
  const { searchCategory } = useContext(WishListContext);
  // console.log("my Response of Search", searchCategory);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  const handleAddToCart = (productId, quantity, productDesc) => {
    addToCart(productId, quantity);
    setSelectedProductDesc(productDesc);
    setTimeout(() => {
      setSelectedProductDesc("");
    }, 4000);
  };

  const productsPerPage = 20;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = searchCategory?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchCategory?.length / productsPerPage);

  // Calculate pagination sets
  const itemsPerPage = 10;
  const totalPaginationSets = Math.ceil(totalPages / itemsPerPage);
  const currentPaginationSet = Math.ceil(currentPage / itemsPerPage);
  const startPage = (currentPaginationSet - 1) * itemsPerPage + 1;
  const endPage = Math.min(startPage + itemsPerPage - 1, totalPages);
  return (
    <>
      {loading ? (
        <div className="loading-indicator">
          <img src={loadingGif} alt="Loading..." />
        </div>
      ) : (
        <main className="main" style={{ transform: "none" }}>
          <div className="container mb-30" style={{ transform: "none" }}>
            <div className="row" style={{ transform: "none" }}>
              <div className="col-lg-5-5">
                <div className="page-header mt-30 mb-50">
                  <div className="container-fluid">
                    <div className="archive-header">
                      <div className="row align-items-center">
                        <div className="row">
                          <h1 className="mb-15">Products</h1>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <div className="col-xl">
                              <div className="breadcrumb">
                                <a href="/" rel="nofollow">
                                  <i className="fi-rs-home mr-5"></i>Home
                                </a>
                                <span></span> Products
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shop-product-fillter">
                  <div className="totall-product">
                    <p>
                      We found
                      <strong className="text-brand">
                        {displayedProducts?.length}
                      </strong>
                      items for you!
                    </p>
                  </div>
                </div>

                <div className="row product-grid">
                  {displayedProducts?.length > 0 ? (
                    displayedProducts.map((item, index) => (
                      <div
                        key={index}
                        className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                      >
                        <div className="product-cart-wrap mb-30">
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={`/product/${item.strSEOLink}`}>
                                <img src={item?.strImageThumbnail} />
                                <img
                                  className="hover-img"
                                  src={item?.strImageThumbnail}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn"
                                to="/admin/myacount"
                              >
                                <i className="fi-rs-heart"></i>
                              </Link>

                              <Link
                                to={`/product/${item.strSEOLink}`}
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
                              <Link to={`/product/${item.strSEOLink}`}>
                                {item.strItemCategory}
                              </Link>
                            </div>
                            <h2>
                              <Link to={`/product/${item.strSEOLink}`}>
                                {item.strDesc}
                              </Link>
                            </h2>

                            <div>
                              <span className="font-small text-muted"></span>
                            </div>

                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>Rs: {item.dblSalePrice}</span>
                              </div>
                              <div className="contact-info">
                                <div className="social-info">
                                  <h4>{selectedProductDesc}</h4>
                                </div>
                              </div>
                              <div className="add-cart">
                                <Link
                                  className="add"
                                  onClick={() =>
                                    handleAddToCart(item.intID, 1, item.strDesc)
                                  }
                                >
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      {/* <div className="totall-product">
                        <p>
                          We found <strong className="text-brand">0</strong>{" "}
                          items for you!
                        </p>
                      </div> */}
                    </div>
                  )}
                </div>
                <div className="row product-grid">
                  {displayedProducts?.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="pagination-area mt-20 mb-20">
              
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item"></li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className={`page-link ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(index + 1);
                        }}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div> */}
            {/* <div className="pagination-area mt-20 mb-20">
              {displayedProducts?.length >= 20 && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item"></li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index + 1}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <Link
                          to="#"
                          className={`page-link ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(index + 1);
                          }}
                        >
                          {index + 1}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div> */}
            <div className="pagination-area mt-20 mb-20">
              {totalPages > itemsPerPage && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li
                      className={`page-item ${
                        currentPaginationSet === 1 ? "disabled" : ""
                      }`}
                      onClick={() => setCurrentPage(startPage - 1)}
                    >
                      <span className="page-link" aria-hidden="true">
                        &laquo;
                      </span>
                    </li>
                    {Array.from(
                      { length: endPage - startPage + 1 },
                      (_, index) => (
                        <li
                          key={startPage + index}
                          className={`page-item ${
                            currentPage === startPage + index ? "active" : ""
                          }`}
                        >
                          <Link
                            to="#"
                            className={`page-link ${
                              currentPage === startPage + index ? "active" : ""
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentPage(startPage + index);
                            }}
                          >
                            {startPage + index}
                          </Link>
                        </li>
                      )
                    )}
                    {totalPaginationSets > currentPaginationSet && (
                      <li
                        className={`page-item ${
                          currentPaginationSet === totalPaginationSets
                            ? "disabled"
                            : ""
                        }`}
                        onClick={() => setCurrentPage(endPage + 1)}
                      >
                        <span className="page-link" aria-hidden="true">
                          &raquo;
                        </span>
                      </li>
                    )}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};
