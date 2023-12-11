import "animate.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/imgs/theme/icons/phone-call.svg";
import img2 from "../../assets/imgs/theme/icons/phone-call.svg";
import img3 from "../../assets/imgs/theme/icons/icon-facebook-white.svg";
import img4 from "../../assets/imgs/theme/icons/icon-twitter-white.svg";
import img5 from "../../assets/imgs/theme/icons/icon-instagram-white.svg";
import img6 from "../../assets/imgs/theme/icons/icon-pinterest-white.svg";
import img7 from "../../assets/imgs/theme/icons/icon-youtube-white.svg";

export const CopyRight = () => {
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
              <p>
                +923334548651<span>Working 8:00 - 22:00</span>
              </p>
            </div>
            <div className=" footer hotline d-lg-inline-flex">
              <img src={img2} alt="hotline" />
              <p>
                +923334504507
                <span>24/7 Support Center</span>
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
            <div className="mobile-social-icon">
              <h6>Follow Us</h6>
              <Link to="#">
                <img src={img3} alt="" />
              </Link>
              <Link to="#">
                <img src={img4} alt="" />
              </Link>
              <Link to="#">
                <img src={img5} alt="" />
              </Link>
              <Link to="#">
                <img src={img6} alt="" />
              </Link>
              <Link to="#">
                <img src={img7} alt="" />
              </Link>
            </div>
            <p className="font-sm">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
