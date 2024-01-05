import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { MyAccountContext } from "../../../context/AccountContext";
import { NewsLetterProduct } from "../../../layouts/NewsLetterProduct";

export const ManuCategory = () => {
  const { addToCart } = useContext(CartContext);
  const { categoryData } = useContext(MyAccountContext);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  const handleAddToCart = (productId, quantity, productDesc) => {
    addToCart(productId, quantity);
    setSelectedProductDesc(productDesc);
    setTimeout(() => {
      setSelectedProductDesc("");
    }, 4000);
  };
  const itemsPerPage = 20;
  useEffect(() => {
    if (categoryData) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(categoryData?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(categoryData?.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, categoryData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categoryData?.length;
    setItemOffset(newOffset);
  };

  return (
    <>
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
                    We found{" "}
                    <strong className="text-brand">
                      {categoryData?.length}
                    </strong>{" "}
                    items for you!
                  </p>
                </div>
              </div>

              <div className="row product-grid">
                {currentItems?.map((item, index) => (
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
                              <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
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

          <div className="pagination-area mt-20 mb-20">
            <nav aria-label="Page navigation example">
              <ReactPaginate
                breakLabel="..."
                nextLabel={<Icon icon="lets-icons:arrow-top" rotate={1} />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={20}
                pageCount={pageCount}
                previousLabel={<Icon icon="lets-icons:arrow-top" rotate={3} />}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
              />
            </nav>
          </div>
        </div>
        <NewsLetterProduct />
      </main>
    </>
  );
};
