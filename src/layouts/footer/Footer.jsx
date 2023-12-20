import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/theme/msbooks_logo.png";
import img6 from "../../assets/imgs/theme/app-store.jpg";
import img7 from "../../assets/imgs/theme/google-play.jpg";
import { ScrollButton } from "./scrollbutton/ScrollButton";
import "./footer.css";
import { useContext } from "react";
import { AddressContext } from "../../context/AddresContext";

export const Footer = () => {
  const { address } = useContext(AddressContext);

  return (
    <>
      <section className="section-padding footer-mid">
        <div className="arrowbtnbox">
          <ScrollButton />
        </div>
        <div className="container pt-15 pb-20">
          <div className="row">
            <div className="col">
              <div
                className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__ animate__fadeInUp animated  animated animate__animated animate__bounce"
                data-wow-delay="0"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="logo mb-30">
                  <Link to="index.html" className="mb-15">
                    <img src={img1} alt="logo" />
                  </Link>
                </div>
                <ul className="contact-infor">
                  <li>
                    <strong>Address: </strong>{" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: address,
                      }}
                    />
                  </li>

                  <li>
                    <strong>Email:</strong>
                    <span>info@msbooks.pk</span>
                  </li>
                  <li>
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="footer-link-widget col wow animate__ animate__fadeInUp animated  animated animate__animated animate__bounce"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDelay: "0.7s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="widget-title">Products</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="/allProducts">All Products</Link>
                </li>
                <li>
                  <Link to="#">A Level</Link>
                </li>
                <li>
                  <Link to="#">O Level</Link>
                </li>
                <li>
                  <Link to="#">CheckPoint</Link>
                </li>
                <li>
                  <Link to="#">ICGS</Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-link-widget col wow animate__ animate__fadeInUp animated animated animate__animated animate__bounce"
              data-wow-delay=".2s"
              style={{
                visibility: "visible",
                animationDelay: "0.6s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="widget-title">Our Website</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="/sigin">Sign In</Link>
                </li>
                <li>
                  <Link to="/shop-cart">View Cart</Link>
                </li>
                <li>
                  <Link to="/shop-wishlist">My Wishlist</Link>
                </li>
                <li>
                  <Link to="/account">Track My Order</Link>
                </li>
                <li>
                  <Link to="/account">Shipping Details</Link>
                </li>
              </ul>
            </div>

            <div
              className="footer-link-widget widget-install-app col wow animate__ animate__fadeInUp animated animated animate__animated animate__bounce"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDelay: "0.9s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="widget-title">Install App</h4>
              <p className="">From App Store or Google Play</p>
              <div className="download-app">
                <Link to="#" className="hover-up mb-sm-2 mb-lg-0">
                  <img className="active" src={img6} alt="" />
                </Link>
                <Link to="#" className="hover-up mb-sm-2">
                  <img src={img7} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
