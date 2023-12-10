import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/theme/msbooks_logo.png";
import img2 from "../../assets/imgs/theme/icons/icon-location.svg";
import img3 from "../../assets/imgs/theme/icons/icon-contact.svg";
import img4 from "../../assets/imgs/theme/icons/icon-email-2.svg";
import img5 from "../../assets/imgs/theme/icons/icon-clock.svg";
import img6 from "../../assets/imgs/theme/app-store.jpg";
import img7 from "../../assets/imgs/theme/google-play.jpg";
import img8 from "../../assets/imgs/theme/payment-method.png";
import { ScrollButton } from "./scrollbutton/ScrollButton";
import "./footer.css";

export const Footer = () => {
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
                  <p className="font-lg text-heading">
                    Awesome grocery store website template
                  </p>
                </div>
                <ul className="contact-infor">
                  <li>
                    <img src={img2} alt="" />
                    <strong>Address: </strong>{" "}
                    <span>
                      5171 W Campbell Ave undefined Kent, Utah 53127 United
                      States
                    </span>
                  </li>
                  <li>
                    <img src={img3} alt="" />
                    <strong>Call Us:</strong>
                    <span>(+91) - 540-025-124553</span>
                  </li>
                  <li>
                    <img src={img4} alt="" />
                    <strong>Email:</strong>
                    <span>sale@Nest.com</span>
                  </li>
                  <li>
                    <img src={img5} alt="" />
                    <strong>Hours:</strong>
                    <span>10:00 - 18:00, Mon - Sat</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="footer-link-widget col wow animate__ animate__fadeInUp animated animated animate__animated animate__bounce"
              data-wow-delay=".1s"
            >
              <h4
                className="widget-title"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                Company
              </h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Delivery Information</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Support Center</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
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
              <h4 className="widget-title">Account</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="#">Sign In</Link>
                </li>
                <li>
                  <Link to="#">View Cart</Link>
                </li>
                <li>
                  <Link to="#">My Wishlist</Link>
                </li>
                <li>
                  <Link to="#">Track My Order</Link>
                </li>
                <li>
                  <Link to="#">Help Ticket</Link>
                </li>
                <li>
                  <Link to="#">Shipping Details</Link>
                </li>
                <li>
                  <Link to="#">Compare products</Link>
                </li>
              </ul>
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
              <h4 className="widget-title">Corporate</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="#">Become a Vendor</Link>
                </li>
                <li>
                  <Link to="#">Affiliate Program</Link>
                </li>
                <li>
                  <Link to="#">Farm Business</Link>
                </li>
                <li>
                  <Link to="#">Farm Careers</Link>
                </li>
                <li>
                  <Link to="#">Our Suppliers</Link>
                </li>
                <li>
                  <Link to="#">Accessibility</Link>
                </li>
                <li>
                  <Link to="#">Promotions</Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-link-widget col wow animate__ animate__fadeInUp animated animated animate__animated animate__bounce"
              data-wow-delay=".4s"
              style={{
                visibility: "visible",
                animationDelay: "0.8s",
                animationName: "fadeInUp",
              }}
            >
              <h4 className="widget-title">Popular</h4>
              <ul className="footer-list mb-sm-5 mb-md-0">
                <li>
                  <Link to="#">Milk &amp; Flavoured Milk</Link>
                </li>
                <li>
                  <Link to="#">Butter and Margarine</Link>
                </li>
                <li>
                  <Link to="#">Eggs Substitutes</Link>
                </li>
                <li>
                  <Link to="#">Marmalades</Link>
                </li>
                <li>
                  <Link to="#">Sour Cream and Dips</Link>
                </li>
                <li>
                  <Link to="#">Tea &amp; Kombucha</Link>
                </li>
                <li>
                  <Link to="#">Cheese</Link>
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
              <p className="mb-20">Secured Payment Gateways</p>
              <img className="" src={img8} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
