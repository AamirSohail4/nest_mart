import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Slider = () => {
  return (
    <>
      <div className="slider-section">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="main-slider_section">
				<div className="slider-content">
				<h1 className="display-2 mb-40">
					Fresh Vegetables<br></br>
					Big discount
				</h1>
				<p className="mb-65">Save up to 50% off on your first order</p>
				</div>
				<form className="form-subcriber d-flex">
				<input
					type="email"
					placeholder="Your emaill address"
					tabIndex="0"
				/>
				<button className="btn" type="submit" tabIndex="0">
					Subscribe
				</button>
				</form>
			</div>
          </SwiperSlide>
          <SwiperSlide>
            <h3>slider</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
