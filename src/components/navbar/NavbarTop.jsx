import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import img1 from "../../assets/imgs/theme/flag-fr.png";
import img2 from "../../assets/imgs/theme/flag-dt.png";
import img3 from "../../assets/imgs/theme/flag-ru.png";
// import "./style/navbarTop.css";
export const NavbarTop = () => {
  return (
    <>
      <div className="header-top header-top-ptb-1 d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-4">
              <div className="header-info">
                <ul>
                  <li>
                    <Link to="page-about.htlm">About Us</Link>
                  </li>
                  <li>
                    <Link to="page-account.html">My Account</Link>
                  </li>
                  <li>
                    <Link to="shop-wishlist.html">Wishlist</Link>
                  </li>
                  <li>
                    <Link to="shop-order.html">Order Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4">
              <div className="text-center">
                <div
                  id="news-flash"
                  className="d-inline-block"
                  style={{
                    overflow: "hidden",
                    position: " relative",
                    height: "14px",
                  }}
                >
                  <ul
                    style={{
                      position: "absolute",
                      margin: "0px",
                      padding: "0px",
                      top: "0px",
                    }}
                  >
                    <li
                      style={{
                        margin: "0px",
                        padding: "0px",
                        height: "14px",
                        opacity: "0.00623918",
                      }}
                    >
                      Supper Value Deals - Save more with coupons
                    </li>
                    <li
                      style={{
                        margin: "0px",
                        padding: "0px",
                        height: "14px",
                        opacity: "0.00233565",
                      }}
                    >
                      Supper Value Deals - Save more with coupons
                    </li>
                    <li
                      style={{
                        margin: "0px",
                        padding: "0px",
                        height: "14px",
                        opacity: "0.00658892",
                      }}
                    >
                      Supper Value Deals - Save more with coupons
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="header-info header-info-right">
                <ul>
                  <li>
                    Need help? Call Us:{" "}
                    <strong className="text-brand"> + 1800 900</strong>
                  </li>
                  <li>
                    <Link to="" className="language-dropdown-active" href="#">
                      English <Icon icon="prime:angle-down" />
                    </Link>
                    <ul className="language-dropdown">
                      <li>
                        <Link to="#">
                          <img src={img1} alt="" />
                          Français
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={img2} alt="" />
                          Deutsch
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={img3} alt="" />
                          Pусский
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="" className="language-dropdown-active" href="#">
                      USD
                      <Icon icon="prime:angle-down" />
                    </Link>
                    <ul className="language-dropdown">
                      <li>
                        <Link to="#">
                          <img src={img1} alt="" />
                          INR
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={img2} alt="" />
                          MBP
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={img3} alt="" />
                          EU
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
