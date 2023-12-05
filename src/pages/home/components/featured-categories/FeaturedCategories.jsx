/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Slider from 'react-slick';
import { featureCategories } from './data';

const CustomeSlide = ({ data }) => {
  return (
    <div
      className={`card-2 wow animate__animated animate__fadeInUp ${data.bg}`}
      data-wow-delay='.1s'
    >
      <figure className='img-hover-scale overflow-hidden'>
        <a href='shop-grid-right.html'>
          <img src={data.image} alt='' />
        </a>
      </figure>
      <h6>
        <a href='shop-grid-right.html'>{data.title}</a>
      </h6>
      <span>{data.item}</span>
    </div>
  );
};

export const FeaturedCategories = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    autoplay: false,
    slidesToShow: 10,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='popular-categories section-padding'>
      <div className='container wow animate__animated animate__fadeIn'>
        <div className='section-title'>
          <div className='title'>
            <h3>Featured Categories</h3>
            <ul className='list-inline nav nav-tabs links'>
              <li className='list-inline-item nav-item'>
                <a className='nav-link' href='shop-grid-right.html'>
                  Cake & Milk
                </a>
              </li>
              <li className='list-inline-item nav-item'>
                <a className='nav-link' href='shop-grid-right.html'>
                  Coffes & Teas
                </a>
              </li>
              <li className='list-inline-item nav-item'>
                <a className='nav-link active' href='shop-grid-right.html'>
                  Pet Foods
                </a>
              </li>
              <li className='list-inline-item nav-item'>
                <a className='nav-link' href='shop-grid-right.html'>
                  Vegetables
                </a>
              </li>
            </ul>
          </div>
          <div
            className='slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow'
            id='carausel-10-columns-arrows'
          >
            <span className='slider-btn slider-prev' onClick={previous}>
              <i className='fi-rs-arrow-small-left'></i>
            </span>
            <span className='slider-btn slider-next' onClick={next}>
              <i className='fi-rs-arrow-small-right'></i>
            </span>
          </div>
        </div>
        <div className='carausel-10-columns-cover position-relative'>
          <Slider ref={sliderRef} {...settings} className='carausel-10-columns'>
            {featureCategories.map((item, index) => {
              return <CustomeSlide data={item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};
