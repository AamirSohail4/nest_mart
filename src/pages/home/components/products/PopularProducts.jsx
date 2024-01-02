import { Link } from "react-router-dom";
import { api_url } from "../../../../config/env";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";
import { WishListContext } from "../../../../context/WishListContext";

export const PopularProducts = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  const [myproduct, setMyProduct] = useState([]);
  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  const handleAddToCart = (productId, quantity, productDesc) => {
    addToCart(productId, quantity);
    setSelectedProductDesc(productDesc);
    setTimeout(() => {
      setSelectedProductDesc("");
    }, 4000);
  };
  useEffect(() => {
    async function AllProductShow() {
      const response = await fetch(
        `${api_url}&tag=get_items_web&intCategoryID=1&btIsFeatured=1&limit=20`
      );
      const productData = await response.json();
      setMyProduct(productData.data);
    }
    AllProductShow();
  }, []);

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
              {myproduct?.map((item, index) => {
                return (
                  <div
                    key={index}
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
                          <Link to={`/product/${item.strSEOLink}`}>
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
                            to="/admin/myacount"
                            aria-label="Add To Wishlist"
                            className="action-btn"
                          >
                            <i
                              className="fi-rs-heart"
                              onClick={() => addToWishList(item.intID)}
                            ></i>
                          </Link>

                          <Link
                            to={`product/${item.strSEOLink}`}
                            aria-label="Quick view"
                            className="action-btn"
                          >
                            <i className="fi-rs-eye"></i>
                          </Link>
                        </div>
                      </div>
                      <div className="product-content-wrap">
                        <div className="product-category">
                          <Link to={`product/${item.strSEOLink}`}>
                            {item.strItemCategory}
                          </Link>
                        </div>
                        <h2>
                          <Link to={`product/${item.strSEOLink}`}>
                            {item.strDesc}
                          </Link>
                        </h2>
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
