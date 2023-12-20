import "animate.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/theme/icons/phone-call.svg";
import img2 from "../../assets/imgs/theme/icons/phone-call.svg";
import img3 from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import img5 from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import { useContext } from "react";
import { AddressContext } from "../../context/AddresContext";

export const CopyRight = () => {
  const { contactNo, contactNo2 } = useContext(AddressContext);
  // console.log(
  //   "This contect Detail in copyRight Section",
  //   setContacNo2,
  //   setContacNo
  // );
  return (
    <>
      <div
        className="container pb-30 wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
        data-wow-delay="0"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeInUp",
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 mb-30">
            <div className="footer-bottom"></div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <p className="font-sm mb-0">
              © 2023, <strong className="text-brand">MSBOOKS</strong> -{" "}
              <br></br>All rights reserved
            </p>
          </div>
          <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
            <div className="hotline d-lg-inline-flex mr-30">
              <img src={img1} alt="hotline" />
              <div
                style={{ color: "white" }}
                dangerouslySetInnerHTML={{
                  __html: contactNo,
                }}
              />
            </div>
            <div className=" footer hotline d-lg-inline-flex">
              <img src={img2} alt="hotline" />
              <div
                style={{ color: "white" }}
                dangerouslySetInnerHTML={{
                  __html: contactNo2,
                }}
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
            <div className="mobile-social-icon">
              <h6>Follow Us</h6>
              <Link to="https://web.facebook.com/MSBooks.pk">
                <img src={img3} alt="" />
              </Link>

              <Link to="https://www.instagram.com/msbooks.pk">
                <img src={img5} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
