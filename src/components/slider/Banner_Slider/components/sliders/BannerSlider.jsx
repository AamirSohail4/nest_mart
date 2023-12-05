// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const BannerSlider = ({ data }) => {
  const pagination = {
    clickable: true,
    // renderBullet: function () {
    //   return '<span class="">0</span>';
    // },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        loop={true}
        className='mySwiper'
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className='single-hero-slider single-animation-wrap'
              style={{
                backgroundImage: 'url(../../assets/imgs/slider/slider-1.png)',
              }}
            >
              <div className='slider-content'>
                <h1 className='display-2 mb-40'>
                  {slide.title}
                  <br />
                  {slide.subTitle}
                </h1>
                <p className='mb-65'>{slide.desc}</p>
                <form className='form-subcriber d-flex'>
                  <input type='email' placeholder='Your emaill address' />
                  <button className='btn' type='submit'>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
