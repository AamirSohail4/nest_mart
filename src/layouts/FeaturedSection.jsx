import img1 from "../assets/imgs/theme/icons/icon-1.svg";
import img2 from "../assets/imgs/theme/icons/icon-2.svg";
import img3 from "../assets/imgs/theme/icons/icon-3.svg";
import img4 from "../assets/imgs/theme/icons/icon-4.svg";
import img5 from "../assets/imgs/theme/icons/icon-5.svg";
import img6 from "../assets/imgs/theme/icons/icon-6.svg";

export const FeaturedSection = () => {
  return (
    <>
      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay="0"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img1} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Best prices &amp; offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img2} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Free delivery</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img3} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Great daily deal</h3>
                  <p>When you sign up</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animatedanimate__animated animate__bounce"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img4} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img5} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div
                className="banner-left-icon d-flex align-items-center wow animate__animated animate__fadeInUp animated animate__animated animate__bounce"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeIn",
                }}
              >
                <div className="banner-icon">
                  <img src={img6} alt="" />
                </div>
                <div className="banner-text">
                  <h3 className="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
