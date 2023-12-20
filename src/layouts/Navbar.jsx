import { useState, useEffect } from "react";
// import { AddressContext } from "../context/AddresContext";
import { Link, useNavigate } from "react-router-dom";
import img5 from "../assets/imgs/theme/icons/icon-heart.svg";
import img6 from "../assets/imgs/theme/icons/icon-cart.svg";

import img9 from "../assets/imgs/theme/icons/icon-user.svg";
import img10 from "../assets/imgs/theme/msbooks_logo.png";
import img11 from "../assets/imgs/theme/icons/category-1.svg";
import img12 from "../assets/imgs/theme/icons/category-2.svg";
import img13 from "../assets/imgs/theme/icons/category-3.svg";
import img14 from "../assets/imgs/theme/icons/category-3.svg";
import img15 from "../assets/imgs/theme/icons/category-5.svg";
import img16 from "../assets/imgs/theme/icons/category-6.svg";
import img17 from "../assets/imgs/theme/icons/category-7.svg";
import img18 from "../assets/imgs/theme/icons/category-8.svg";
import img19 from "../assets/imgs/theme/icons/category-9.svg";
import img20 from "../assets/imgs/theme/icons/category-10.svg";
import img21 from "../assets/imgs/theme/icons/icon-1.svg";
import img22 from "../assets/imgs/theme/icons/icon-2.svg";
import img23 from "../assets/imgs/theme/icons/icon-3.svg";
import img24 from "../assets/imgs/theme/icons/icon-4.svg";
import img27 from "../assets/imgs/theme/icons/icon-headphone.svg";
import img28 from "../assets/imgs/theme/icons/icon-cart.svg";
import img29 from "../assets/imgs/shop/thumbnail-3.jpg";
import img30 from "../assets/imgs/shop/thumbnail-4.jpg";
import img31 from "../assets/imgs/shop/thumbnail-4.jpg";
import { api_url, relateProd_url } from "../config/env";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Navbar = ({ setMydata }) => {
  const navigate = useNavigate();
  const { cartItem, DeleteCartSingleItem } = useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);
  // console.log(address);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBarCategory, setSearchBarCategory] = useState([]);

  const calculateSubtotal = () => {
    if (!cartItem || cartItem.length === 0) {
      return 0; // or any default value you prefer
    }

    let subtotal = 0;

    cartItem.forEach((item) => {
      subtotal += item.dblItemQty * item.item.dblSalePrice;
    });

    return subtotal.toFixed(2);
  };
  // Function Perform on Click and Fetch data.
  const handleSearchButtonClick = async () => {
    try {
      const response = await fetch(
        `${relateProd_url}&tag=get_items_web&intCategoryID=${selectedCategoryId}&strSearch=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const myQueryData = await response.json();
      if (myQueryData.status === "1") {
        setMydata(myQueryData.data);
        navigate("/category");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value;
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
  // console.log("This is Cart item ", cartItem);
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
                    <Link to="/myacount">My Account</Link>
                  </li>
                  <li>
                    <Link to="/shop-wishlist">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="#">Order Tracking</Link>
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
                    Need help? Call Us:{" "}
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
                  />
                  <button type="button">
                    <Icon
                      icon="ic:sharp-search"
                      onClick={handleSearchButtonClick}
                    />
                  </button>
                </div>
              </div>
              <div className="header-action-right">
                <div className="header-action-2">
                  <div className="header-action-icon-2"></div>
                  <div className="header-action-icon-2">
                    <Link to="/shop-wishlist">
                      <img className="svgInject" alt="Nest" src={img5} />
                      <span className="pro-count blue">6</span>
                    </Link>
                    <Link to="/shop-wishlist">
                      <span className="lable">Wishlist</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" href="/shop-cart">
                      <img alt="Nest" src={img6} />
                      <span className="pro-count blue">{cartItem?.length}</span>
                    </Link>
                    <Link to="/shop-cart">
                      <span className="lable">Cart</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        {cartItem?.map((item, index) => {
                          return (
                            <li key={index}>
                              <div className="shopping-cart-img">
                                <Link to="/shop-cart">
                                  <img
                                    alt="Nest"
                                    src={item.item.strImageThumbnail}
                                  />
                                </Link>
                              </div>
                              <div className="shopping-cart-title">
                                <h4>
                                  <Link to="shop-product-right.html"></Link>
                                </h4>
                                <h4>
                                  <span>{item.dblItemQty} × </span>
                                  {item.item.dblSalePrice}
                                </h4>
                              </div>
                              <div
                                className="shopping-cart-delete"
                                onClick={() => DeleteCartSingleItem(item)}
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
                            Total <span>${calculateSubtotal()}</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="/shop-cart" className="outline">
                            View cart
                          </Link>
                          <Link to="/shop-checkout">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="/myacount">
                      <img className="svgInject" alt="Nest" src={img9} />
                    </Link>
                    <Link to="/myacount">
                      <span className="lable ml-0">Account</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <Link to="/myacount">
                            <i className="fi fi-rs-user mr-10"></i>My Account
                          </Link>
                        </li>
                        <li>
                          <Link to="/myacount">
                            <i className="fi fi-rs-location-alt mr-10"></i>Order
                            Tracking
                          </Link>
                        </li>
                        <li>
                          <Link to="/myacount">
                            <i className="fi fi-rs-label mr-10"></i>My Voucher
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-wishlist">
                            <i className="fi fi-rs-heart mr-10"></i>My Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="/myacount">
                            <i className="fi fi-rs-settings-sliders mr-10"></i>
                            Setting
                          </Link>
                        </li>
                        <li>
                          <Link to="/login">
                            <i className="fi fi-rs-sign-out mr-10"></i>Sign out
                          </Link>
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
              <div className="main-categori-wrap d-none d-lg-block">
                <div className="categories-dropdown-wrap categories-dropdown-active-large font-heading ">
                  <div className="d-flex categori-dropdown-inner">
                    <ul>
                      <li>
                        <Link to="shop-grid-right.html">
                          <img src={img11} alt="" />
                          Milks and Dairies
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          <img src={img12} alt="" />
                          Clothing & beauty
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          <img src={img13} alt="" />
                          Pet Foods & Toy
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img14} alt="" />
                          Baking material
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img15} alt="" />
                          Fresh Fruit
                        </Link>
                      </li>
                    </ul>
                    <ul className="end">
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img16} alt="" />
                          Wines & Drinks
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img17} alt="" />
                          Fresh Seafood
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img18} alt="" />
                          Fast food
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img19} alt="" />
                          Vegetables
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-grid-right.html">
                          {" "}
                          <img src={img20} alt="" />
                          Bread and Juice
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="more_slide_ope">
                    <div className="d-flex categori-dropdown-inner">
                      <ul>
                        <li>
                          <Link to="shop-grid-right.html">
                            {" "}
                            <img src={img21} alt="" />
                            Milks and Dairies
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-grid-right.html">
                            {" "}
                            <img src={img22} alt="" />
                            Clothing & beauty
                          </Link>
                        </li>
                      </ul>
                      <ul className="end">
                        <li>
                          <Link to="shop-grid-right.html">
                            {" "}
                            <img src={img23} alt="" />
                            Wines & Drinks
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-grid-right.html">
                            {" "}
                            <img src={img24} alt="" />
                            Fresh Seafood
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="more_categories">
                    <span className="icon"></span>{" "}
                    <span className="heading-sm-1">Show more...</span>
                  </div>
                </div>
              </div>
              <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                <nav>
                  <ul>
                    <li>
                      <Link className="active" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/book-shop">
                        Shop <i className="fi-rs-angle-down"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        Vendors <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="vendors-grid.html">Vendors Grid</Link>
                        </li>
                        <li>
                          <Link to="vendors-list.html">Vendors List</Link>
                        </li>
                        <li>
                          <Link to="vendor-details-1.html">
                            Vendor Details 01
                          </Link>
                        </li>
                        <li>
                          <Link to="vendor-details-2.html">
                            Vendor Details 02
                          </Link>
                        </li>
                        <li>
                          <Link to="vendor-dashboard.html">
                            Vendor Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="vendor-guide.html">Vendor Guide</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/teacher">
                        Teacher <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="blog-category-grid.html">
                            Blog Category Grid
                          </Link>
                        </li>
                        <li>
                          <Link to="blog-category-list.html">
                            Blog Category List
                          </Link>
                        </li>
                        <li>
                          <Link to="blog-category-big.html">
                            Blog Category Big
                          </Link>
                        </li>
                        <li>
                          <Link to="blog-category-fullwidth.html">
                            Blog Category Wide
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            Single Post <i className="fi-rs-angle-right"></i>
                          </Link>
                          <ul className="level-menu level-menu-modify">
                            <li>
                              <Link to="blog-post-left.html">Left Sidebar</Link>
                            </li>
                            <li>
                              <Link to="blog-post-right.html">
                                Right Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="blog-post-fullwidth.html">
                                No Sidebar
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        Pages <i className="fi-rs-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                          <Link to="/myacount">My Account</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                        <li>
                          <Link to="/purchase-guid">Purchase Guide</Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to="/terms">Terms of Service</Link>
                        </li>
                        <li>
                          <Link to="/page-404">404 Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
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
            <div className="header-action-right d-block d-lg-none">
              <div className="header-action-2">
                <div className="header-action-icon-2">
                  <Link to="shop-wishlist.html">
                    <img alt="Nest" src={img28} />
                    <span className="pro-count white">4</span>
                  </Link>
                </div>
                <div className="header-action-icon-2">
                  <Link className="mini-cart-icon" href="#">
                    <img alt="Nest" src={img29} />
                    <span className="pro-count white">2</span>
                  </Link>
                  <div className="cart-dropdown-wrap cart-dropdown-hm2">
                    <ul>
                      <li>
                        <div className="shopping-cart-img">
                          <Link to="shop-product-right.html">
                            <img alt="Nest" src={img30} />
                          </Link>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <Link to="shop-product-right.html">
                              Plain Striola Shirts
                            </Link>
                          </h4>
                          <h3>
                            <span>1 × </span>$800.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <Link to="#">
                            <i className="fi-rs-cross-small"></i>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="shopping-cart-img">
                          <Link to="shop-product-right.html">
                            <img alt="Nest" src={img31} />
                          </Link>
                        </div>
                        <div className="shopping-cart-title">
                          <h4>
                            <Link to="shop-product-right.html">
                              Macbook Pro 2022
                            </Link>
                          </h4>
                          <h3>
                            <span>1 × </span>$3500.00
                          </h3>
                        </div>
                        <div className="shopping-cart-delete">
                          <Link to="#">
                            <i className="fi-rs-cross-small"></i>
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <div className="shopping-cart-footer">
                      <div className="shopping-cart-total">
                        <h4>
                          Total <span>$383.00</span>
                        </h4>
                      </div>
                      <div className="shopping-cart-button">
                        <Link to="shop-cart.html">View cart</Link>
                        <Link to="shop-checkout.html">Checkout</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
