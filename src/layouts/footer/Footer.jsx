import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/theme/msbooks_logo.png";
import img6 from "../../assets/imgs/theme/app-store.jpg";
import img7 from "../../assets/imgs/theme/google-play.jpg";
import { ScrollButton } from "./scrollbutton/ScrollButton";
import "./footer.css";
import { useContext, useEffect, useState } from "react";
import { AddressContext } from "../../context/AddresContext";
import { cart_url } from "../../config/env";
import { MyAccountContext } from "../../context/AccountContext";

export const Footer = () => {
  const { handleManuClick } = useContext(MyAccountContext);
  const { address } = useContext(AddressContext);
  const [footerCategory, setFooterCategory] = useState();

  useEffect(() => {
    const DisplayCategory = async () => {
      const response = await fetch(
        `${cart_url}&tag=get_all_category&intCompanyID=1`
      );
      const mydata = await response.json();
      const mainData = mydata.data;
      const filteredData = mainData.filter(
        (item) => item.intParentID === "0" && item.intLevel === "1"
      );
      setFooterCategory(filteredData);
    };
    DisplayCategory();
  }, []);

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
                  <Link to="/allProducts">AllProducts</Link>
                </li>
                {footerCategory?.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to="#"
                        onClick={() =>
                          handleManuClick(item.intID, item.strSEOLink)
                        }
                      >
                        {item.strDesc}
                      </Link>
                    </li>
                  );
                })}
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
                  <Link to="/teacher">Teacher</Link>
                </li>
                <li>
                  <Link to="/shop">Book Shop</Link>
                </li>
                <li>
                  <Link to="/login">Sing in</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
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
