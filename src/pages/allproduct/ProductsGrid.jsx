import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { allProduct_url } from "../../config/env";
import dumy from "../../assets/imgs/banner/dumypng.png";
import loadingGif from "../../assets/imgs/banner/loading.gif";
import { CartContext } from "../../context/CartContext";

export const ProductsGrid = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useContext(CartContext);

  const productsPerPage = 20;
  const location = useLocation();

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await fetch(allProduct_url);
        const productData = await response.json();
        setAllProducts(productData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchAllProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const searchParams = new URLSearchParams(location.search);
    const pageParam = parseInt(searchParams.get("page"), 10);

    // Ensure `pageParam` is a valid number before setting `currentPage`
    setCurrentPage(isNaN(pageParam) ? 1 : pageParam || 1);
  }, [location.search]);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = allProducts.slice(startIndex, endIndex);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
                <div className="row product-grid">
                  {displayedProducts.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                    >
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to={`/product/${item.strSEOLink}`}>
                              {item.strImageThumbnail ? (
                                <>
                                  <img src={item.strImageThumbnail} alt="" />
                                  <img
                                    className="hover-img"
                                    src={item.strImageThumbnail}
                                    alt=""
                                  />
                                </>
                              ) : (
                                // Dummy image if strImageThumbnail is not available
                                <img src={dumy} alt="Dummy Image" />
                              )}
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn"
                              to="/admin/acount"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>

                            <Link
                              to={`product/${item.strSEOLink}`}
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
                            <div className="add-cart">
                              <Link
                                className="add"
                                onClick={() => addToCart(item.intID, 1)}
                              >
                                <i className="fi-rs-shopping-cart mr-5"></i>
                                Add{" "}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Pagination links */}
            <div className="pagination-area mt-20 mb-20">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  <li className="page-item">
                    <Link
                      to={`/allProducts/${1}`}
                      className="page-link"
                      onClick={() => setCurrentPage(1)}
                    >
                      <i className="fi-rs-arrow-small-left"></i>
                    </Link>
                  </li>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        to={`/allProducts/${index + 1}`}
                        className={`page-link ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handlePageClick(index + 1)}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                  <li className="page-item">
                    <Link
                      to={`/allProducts/${totalPages}`}
                      className="page-link"
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      <i className="fi-rs-arrow-small-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="pagination-area mt-20 mb-20">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-start">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                    >
                      <Link
                        to={`/allProducts/${index + 1}`}
                        className={`page-link ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div> */}
            {/* End of pagination links */}
          </div>
        </main>
      )}
    </>
  );
};
