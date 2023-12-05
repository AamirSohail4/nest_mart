import { OfferBannerData } from './data';

export const OfferBanner = () => {
  return (
    <section className='banners mb-25'>
      <div className='container'>
        <div className='row'>
          {OfferBannerData.map((item, index) => {
            return (
              <div className='col-lg-4 col-md-6' key={index}>
                <div
                  className='banner-img wow animate__animated animate__fadeInUp'
                  data-wow-delay='0'
                >
                  <img src={item.image} alt='' />
                  <div className='banner-text'>
                    <h4>{item.title}</h4>
                    <a href={item.btnLink} className='btn btn-xs'>
                      {item.btnText} <i className='fi-rs-arrow-small-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
