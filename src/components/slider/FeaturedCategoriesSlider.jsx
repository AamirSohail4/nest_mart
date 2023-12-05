import Slider from "react-slick";
import img1 from "../../assets/imgs/shop/cat-11.png";
import img2 from "../../assets/imgs/shop/cat-11.png";
import img3 from "../../assets/imgs/shop/cat-9.png";
import img4 from "../../assets/imgs/shop/cat-3.png";
import img5 from "../../assets/imgs/shop/cat-1.png";
import img6 from "../../assets/imgs/shop/cat-2.png";
import img7 from "../../assets/imgs/shop/cat-4.png";
import img8 from "../../assets/imgs/shop/cat-5.png";
import img9 from "../../assets/imgs/shop/cat-6.png";
import img10 from "../../assets/imgs/shop/cat-7.png";
import { Link } from "react-router-dom";

export const FeaturedCategoriesSlider = () => {
  const settings = {
    // autoplay: false,
    // autoplayspeed: 2500,
    // arrows: true,
    // centerMode: true,
    // slidesToShow: 10,
    // slidesToScroll: 1,
    // infinite: true,
    // speed: 2500,
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    loop: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".1s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slider_slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".2s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img2} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".3s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img3} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp  animate__animated animate__bounce "
                data-wow-delay=".4s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img4} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".5s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img5} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".6s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img6} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp  animate__animated animate__bounce "
                data-wow-delay=".7s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img7} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".8s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img8} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce "
                data-wow-delay=".9s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img9} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay="1s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img10} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".1s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".1s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".3s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".4s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".5s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
        <div className="slides">
          <div className="carausel-10-columns-cover position-relative">
            <div className="carausel-10-columns " id="carausel-10-columns">
              <div
                className="card-2 bg-9 wow animate__ animate__fadeInUp animate__animated animate__bounce"
                data-wow-delay=".6s"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "137px",
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="img-hover-scale overflow-hidden">
                  <Link to="shop-grid-right.html" tabIndex="-1">
                    <img src={img1} alt="" />
                  </Link>
                </figure>
                <h6>
                  <Link to="shop-grid-right.html" tabIndex="0">
                    Cake &amp; Milk
                  </Link>
                </h6>
                <span>26 items</span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};
