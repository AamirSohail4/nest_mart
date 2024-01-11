/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
// import { AddressContext } from "../context/AddresContext";
import { Link, useNavigate } from "react-router-dom";
import img5 from "../assets/imgs/theme/icons/icon-heart.svg";
import img6 from "../assets/imgs/theme/icons/icon-cart.svg";
import img9 from "../assets/imgs/theme/icons/icon-user.svg";
import img10 from "../assets/imgs/theme/msbooks_logo.png";
import img27 from "../assets/imgs/theme/icons/icon-headphone.svg";

import { api_url } from "../config/env";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { cart_url } from "../config/env";
import { WishListContext } from "../context/WishListContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const { cartItem, deleteSingleCartItem } = useContext(CartContext);
  const { wishListItem } = useContext(WishListContext);
  // const { handleManuClick } = useContext(MyAccountContext);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarCategory, setSearchBarCategory] = useState([]);
  const [showManu, setShowManau] = useState();

  const handleManuClick = (intParentID, seolink) => {
    navigate(`/Category?categoryId=${intParentID}&book_name=${seolink}`);
  };
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("roleId");
    window.location.reload();
    window.location.href = "/";
  };

  async function ManuDisplay() {
    const response = await fetch(
      `${cart_url}&tag=get_all_category&intCompanyID=1`
    );
    const paymentMode = await response.json();

    const responseData = paymentMode.data;

    setShowManau(responseData);
  }

  useEffect(() => {
    ManuDisplay();
  }, []);
  // console.log("category data", showManu);
  // const calculateSubtotal = () => {
  //   if (!cartItem || cartItem.length === 0) {
  //     return 0;
  //   }

  //   let subtotal = 0;

  //   cartItem.forEach((item) => {
  //     subtotal += item?.dblItemQty * item.item?.dblSalePrice;
  //   });

  //   return subtotal.toFixed(2);
  // };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
    // console.log("Thsi is my catigory id", selectedId);
    setSelectedCategoryId(selectedId === "all" ? "" : parseInt(selectedId, 10));
  };

  async function SearchBarCategory() {
    const response = await fetch(`${api_url}&tag=get_category_web`);
    const categoryData = await response.json();
    setSearchBarCategory(categoryData.data);
  }

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    SearchBarCategory();
  }, []);
  const calculateTotal = () => {
    if (!cartItem || !cartItem.length) {
      return 0; // Return 0 if cartItem is not defined or empty
    }

    const total = cartItem.reduce(
      (acc, item) =>
        acc +
        parseFloat(item?.item?.dblSalePrice) * parseFloat(item?.dblItemQty),
      0
    );

    // Apply number formatting to the total
    const formattedTotal = total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });

    return formattedTotal;
  };
  const SerchCategoryClick = (selectedCategoryId, searchQuery) => {
    navigate(
      `/categories?categoryId=${selectedCategoryId}&book_name=${searchQuery}`
    );
  };
  return (
    <header className="header-area header-style-1 header-height-2">
      <div className="mobile-promotion">
        <span>
          Grand opening, <strong>up to 15%</strong> off all items. Only{" "}
          <strong>3 days</strong> left
        </span>
      </div>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="admin/myacount">My Account</Link>
                  </li>
                  <li>
                    <Link to="admin/myacount">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="admin/myacount">Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div id="news-flash" className="d-inline-block"></div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us:
                    <strong className="text-brand"> + +92-42-35774780</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="header-wrap">
            <div className="logo logo-width-1">
              <Link to="/">
                <img src={img10} alt="logo" />
              </Link>
            </div>
            <div className="header-right">
              <div className="search-style-2_my">
                <select
                  value={selectedCategoryId}
                  onChange={handleCategoryChange}
                >
                  <option value="all">All Categories</option>
                  {searchBarCategory?.map((item, index) => {
                    return (
                      <option key={index} value={item.intID}>
                        {item.strDesc}
                      </option>
                    );
                  })}
                </select>
                <div className="input_wrap">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search for items..."
                  />
                  <button
                    type="button"
                    className="mysearchbtn"
                    onClick={() =>
                      SerchCategoryClick(selectedCategoryId, searchQuery)
                    }
                  >
                    <Icon icon="ic:sharp-search" />
                  </button>
                </div>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2"></div>
                  <div className="header-action-icon-2">
                    <Link to="/admin/myacount">
                      <img className="svgInject" alt="Nest" src={img5} />
                      <span className="pro-count blue">
                        {wishListItem?.length}
                      </span>
                    </Link>
                    <Link to="/admin/myacount">
                      <span className="lable">Wishlist</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" href="/admin/cart">
                      <img alt="Nest" src={img6} />
                      <span className="pro-count blue">{cartItem?.length}</span>
                    </Link>
                    <Link to="/admin/cart">
                      <span className="lable">Cart</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        {cartItem?.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="shopping-cart-img">
                                <Link to="/admin/cart">
                                  <img
                                    alt="Nest"
                                    src={item.item?.strImageThumbnail}
                                  />
                                </Link>
                              </div>
                              <div className="shopping-cart-title">
                                <h4>
                                  <Link to="shop-product-right.html"></Link>
                                </h4>
                                <h4>
                                  <span>{item?.dblItemQty} × </span>
                                  {new Intl.NumberFormat("en-US", {
                                    style: "decimal",
                                  }).format(item.item?.dblSalePrice)}
                                </h4>
                              </div>
                              <div
                                className="shopping-cart-delete"
                                onClick={() => deleteSingleCartItem(item)}
                              >
                                <Link to="#">
                                  <i className="fi-rs-cross-small"></i>
                                </Link>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Total <span>Rs. {calculateTotal()}</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="/admin/cart" className="outline">
                            View cart
                          </Link>
                          <Link to="/admin/cart">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/admin/myacount">
                      <img className="svgInject" alt="Nest" src={img9} />
                    </Link>
                    <Link to="/admin/myacount">
                      <span className="lable ml-0">Account</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <Link to="/admin/myacount">
                            <i className="fi fi-rs-user mr-10"></i>My Account
                          </Link>
                        </li>

                        <li>
                          <Link to="/admin/myacount">
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                          </Link>
                        </li>

                        <li>
                          <a
                            className="nav-link btnLogout"
                            onClick={handleLogout}
                          >
                            <i className="fi-rs-sign-out mr-10"></i>Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header-bottom header-bottom-bg-color sticky-bar ${
          scrolled ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="header-wrap header-space-between position-relative">
            <div className="logo logo-width-1 d-block d-lg-none">
              <Link to="index.html">
                <img src={img10} alt="logo" />
              </Link>
            </div>
            <div className="header-nav d-none d-lg-flex">
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li>
                      <a to="/ ">Home</a>
                    </li>

                    {showManu
                      ?.filter(
                        (item) =>
                          item.intParentID === "0" && item.intLevel === "1"
                      )
                      .map((item, index) => (
                        <li key={index}>
                          <a
                            onClick={() => {
                              handleManuClick(
                                item.intID,
                                item.strSEOLink,
                                item.intParentID
                              );
                            }}
                          >
                            {item.strDesc}{" "}
                            {showManu?.filter(
                              (subItem) =>
                                subItem.intParentID === item.intID &&
                                subItem.intLevel === "2"
                            ).length > 0 && (
                              <i className="fi-rs-angle-down"></i>
                            )}
                          </a>
                          {showManu?.filter(
                            (subItem) =>
                              subItem.intParentID === item.intID &&
                              subItem.intLevel === "2"
                          ).length > 0 && (
                            <ul className="sub-menu">
                              {showManu
                                ?.filter(
                                  (subItem) =>
                                    subItem.intParentID === item.intID &&
                                    subItem.intLevel === "2"
                                )
                                .map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    style={{ paddingLeft: "20px" }}
                                  >
                                    <a
                                      onClick={() =>
                                        handleManuClick(
                                          subItem.intID,
                                          subItem.strSEOLink,
                                          subItem.intParentID
                                        )
                                      }
                                    >
                                      {subItem.strDesc}{" "}
                                      {showManu?.filter(
                                        (thirdItem) =>
                                          thirdItem.intParentID ===
                                            subItem.intID &&
                                          thirdItem.intLevel === "3"
                                      ).length > 0 && (
                                        <i className="fi-rs-angle-right"></i>
                                      )}
                                    </a>
                                    {showManu?.filter(
                                      (thirdItem) =>
                                        thirdItem.intParentID ===
                                          subItem.intID &&
                                        thirdItem.intLevel === "3"
                                    ).length > 0 && (
                                      <ul className="level-menu level-menu-modify">
                                        {showManu
                                          ?.filter(
                                            (thirdItem) =>
                                              thirdItem.intParentID ===
                                                subItem.intID &&
                                              thirdItem.intLevel === "3"
                                          )
                                          .map((thirdItem, thirdIndex) => (
                                            <li
                                              key={thirdIndex}
                                              style={{ paddingLeft: "20px" }}
                                            >
                                              <a
                                                onClick={() =>
                                                  handleManuClick(
                                                    thirdItem.intID,
                                                    thirdItem.strSEOLink,
                                                    thirdItem.intParentID
                                                  )
                                                }
                                              >
                                                {thirdItem.strDesc}
                                              </a>
                                            </li>
                                          ))}
                                      </ul>
                                    )}
                                  </li>
                                ))}
                            </ul>
                          )}
                        </li>
                      ))}

                    <li>
                      <Link to="/teachers ">Teacher</Link>
                    </li>
                    <li>
                      <Link to="/shop ">Book Shops</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="contact ">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hotline d-none d-lg-flex">
              <img src={img27} alt="hotline" />
              <p>
                92-42-35774780<span>24/7 Support Center</span>
              </p>
            </div>
            <div className="header-action-icon-2 d-block d-lg-none">
              <div className="burger-icon burger-icon-white">
                <span className="burger-icon-top"></span>
                <span className="burger-icon-mid"></span>
                <span className="burger-icon-bottom"></span>
              </div>
            </div>
            <div className="header-action-right d-block d-lg-none"></div>
          </div>
        </div>
      </div>
    </header>
  );
};
