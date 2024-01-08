import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { MyAccountContext } from "../../../context/AccountContext";
import { NewsLetterProduct } from "../../../layouts/NewsLetterProduct";
import { WishListContext } from "../../../context/WishListContext";
import productImg from "../../../assets/imgs/banner/product.jpg";

export const ManuCategory = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { userId } = useContext(MyAccountContext);
  const { addToWishList } = useContext(WishListContext);
  const { categoryData, catParentId } = useContext(MyAccountContext);
  const [pageCount, setPageCount] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  console.log("This is not good", catParentId);

  const handleAddToCart = (productId, quantity, productDesc) => {
    if (userId !== null) {
      addToCart(productId, quantity);
      setSelectedProductDesc(productDesc);
      setTimeout(() => {
        setSelectedProductDesc("");
      }, 4000);
    } else {
      navigate("/login");
    }
  };

  const handleHeartClick = (itemId) => {
    if (userId !== null) {
      addToWishList(itemId);
    } else {
      navigate("/login");
    }
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
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling effect
    });
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
                            {item.strImageThumbnail ? (
                              <>
                                <img
                                  className="default-img"
                                  src={item.strImageThumbnail}
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src={item.strProfilePicture}
                                  alt=""
                                />
                              </>
                            ) : (
                              <img
                                className="default-img"
                                src={productImg}
                                alt=""
                              />
                            )}
                          </Link>
                        </div>
                        <div className="product-action-1">
                          <a
                            aria-label="Add To Wishlist"
                            className="action-btn"
                            onClick={() => handleHeartClick(item.intID)}
                          >
                            <i className="fi-rs-heart"></i>
                          </a>

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
                            <button
                              id="feature-prod-btn1500"
                              type="button"
                              className="btn btn-heading add_in_cart"
                              onClick={() =>
                                handleAddToCart(item.intID, 1, item.strDesc)
                              }
                            >
                              <i className="fi-rs-shopping-cart mr-5"></i>Add
                            </button>
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
