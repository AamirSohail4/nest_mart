import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/imgs/theme/logo.svg";
import img1 from "../../assets/imgs/theme/icons/icon-compare.svg";
import img2 from "../../assets/imgs/theme/icons/icon-heart.svg";
import img3 from "../../assets/imgs/theme/icons/icon-cart.svg";
import img4 from "../../assets/imgs/shop/thumbnail-3.jpg";
import img5 from "../../assets/imgs/shop/thumbnail-2.jpg";
import img6 from "../../assets/imgs/theme/icons/icon-user.svg";
// import "./style/navbarMiddle.css";
export const NavbarMiddle = () => {
  return (
    <>
      <div
        className="header-middle header-middle-ptb-1 d-none d-lg-block"
        data-select2-id="12"
      >
        <div className="container" data-select2-id="11">
          <div className="header-wrap" data-select2-id="10">
            <div className="logo logo-width-1">
              <Link to="index.html">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="header-right" data-select2-id="9">
              <div className="search-style-2" data-select2-id="8">
                <form action="#" className="header-searchbar">
                  <select
                    className="select-active select2-hidden-accessible"
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option data-select2-id="3">All Categories</option>
                    <option data-select2-id="15">Milks and Dairies</option>
                    <option data-select2-id="16">Wines &amp; Alcohol</option>
                    <option data-select2-id="17">Clothing &amp; Beauty</option>
                    <option data-select2-id="18">Pet Foods &amp; Toy</option>
                    <option data-select2-id="19">Fast food</option>
                    <option data-select2-id="20">Baking material</option>
                    <option data-select2-id="21">Vegetables</option>
                    <option data-select2-id="22">Fresh Seafood</option>
                    <option data-select2-id="23">Noodles &amp; Rice</option>
                    <option data-select2-id="24">Ice cream</option>
                  </select>
                  <span
                    className="select2 select2-container select2-container--default select2-container--below"
                    dir="ltr"
                    data-select2-id="2"
                    style={{ width: "140px" }}
                  >
                    <span className="selection">
                      <span
                        className="select2-selection select2-selection--single"
                        role="combobox"
                        aria-haspopup="true"
                        aria-expanded="false"
                        tabIndex="0"
                        aria-labelledby="select2-w4or-container"
                      >
                        <span
                          className="select2-selection__rendered"
                          id="select2-w4or-container"
                          role="textbox"
                          aria-readonly="true"
                          title="Wines &amp; Alcohol"
                        >
                          All Categories
                          <Icon icon="gridicons:dropdown" />
                        </span>
                      </span>
                    </span>
                    <span
                      className="dropdown-wrapper"
                      aria-hidden="true"
                    ></span>
                  </span>
                  <input type="text" placeholder="Search for items..." />
                </form>
              </div>
              <div className="header-action-right" data-select2-id="29">
                <div className="header-action-2" data-select2-id="28">
                  <div className="search-location">
                    <form action="#" className="myselectbox">
                      <select
                        className="select-active select2-hidden-accessible "
                        data-select2-id="4"
                        tabIndex="-1"
                        aria-hidden="true"
                      >
                        <option data-select2-id="6">Your Location</option>
                        <option data-select2-id="30">Alabama</option>
                        <option data-select2-id="31">Alaska</option>
                        <option data-select2-id="32">Arizona</option>
                        <option data-select2-id="33">Delaware</option>
                        <option data-select2-id="34">Florida</option>
                        <option data-select2-id="35">Georgia</option>
                        <option data-select2-id="36">Hawaii</option>
                        <option data-select2-id="37">Indiana</option>
                        <option data-select2-id="38">Maryland</option>
                        <option data-select2-id="39">Nevada</option>
                        <option data-select2-id="40">New Jersey</option>
                        <option data-select2-id="41">New Mexico</option>
                        <option data-select2-id="42">New York</option>
                      </select>
                      <span
                        className="select2 select2-container select2-container--default select2-container--below"
                        dir="ltr"
                        data-select2-id="5"
                        style={{ width: "307px" }}
                      >
                        <span className="selection">
                          <span
                            className="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabIndex="0"
                            aria-labelledby="select2-6o04-container"
                          >
                            <span
                              className="select2-selection__rendered"
                              id="select2-6o04-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Your Location"
                            >
                              <Icon icon="system-uicons:location" />
                              Your Location
                              <Icon icon="gridicons:dropdown" />
                            </span>
                          </span>
                        </span>
                        <span
                          className="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </form>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="shop-compare.html">
                      <img className="svgInject" alt="Nest" src={img1} />
                      <span className="pro-count blue">3</span>
                    </Link>
                    <Link to="shop-compare.html">
                      <span className="lable ml-0">Compare</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="shop-wishlist.html">
                      <img className="svgInject" alt="Nest" src={img2} />
                      <span className="pro-count blue">6</span>
                    </Link>
                    <Link to="shop-wishlist.html">
                      <span className="lable">Wishlist</span>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link className="mini-cart-icon" href="shop-cart.html">
                      <img alt="Nest" src={img3} />
                      <span className="pro-count blue">2</span>
                    </Link>
                    <Link to="shop-cart.html">
                      <span className="lable">Cart</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <Link to="shop-product-right.html">
                              <img alt="Nest" src={img4} />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link to="shop-product-right.html">
                                Daisy Casual Bag
                              </Link>
                            </h4>
                            <h4>
                              <span>1 × </span>$800.00
                            </h4>
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
                              <img alt="Nest" src={img5} />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link to="shop-product-right.html">
                                Corduroy Shirts
                              </Link>
                            </h4>
                            <h4>
                              <span>1 × </span>$3200.00
                            </h4>
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
                            Total <span>$4000.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link to="shop-cart.html" className="outline">
                            View cart
                          </Link>
                          <Link to="shop-checkout.html">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-action-icon-2">
                    <Link to="page-account.html">
                      <img className="svgInject" alt="Nest" src={img6} />
                    </Link>
                    <Link to="page-account.html">
                      <span className="lable ml-0">Account</span>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                      <ul>
                        <li>
                          <Link to="page-account.html">
                            <Icon icon="tabler:user" />
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link to="page-account.html">
                            {" "}
                            <Icon icon="system-uicons:location" />
                            Order Tracking
                          </Link>
                        </li>
                        <li>
                          <Link to="page-account.html">
                            {" "}
                            <Icon
                              icon="material-symbols-light:label-outline-rounded"
                              rotate={3}
                            />
                            My Voucher
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-wishlist.html">
                            {" "}
                            <Icon icon="ph:heart-light" />
                            My Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link to="page-account.html">
                            <Icon icon="mingcute:settings-6-line" />
                            Setting
                          </Link>
                        </li>
                        <li>
                          <Link to="page-login.html">
                            {" "}
                            <Icon icon="ph:sign-out-thin" rotate={3} />
                            Sign out
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
    </>
  );
};
