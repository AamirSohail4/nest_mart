export const StickySidebar = () => {
  return (
    <>
      <div className='sidebar-widget widget-category-2 mb-30'>
        <h5 className='section-title style-1 mb-30'>Category</h5>
        <ul>
          <li>
            <a href='shop-grid-right.html'>
              <img src='assets/imgs/theme/icons/category-1.svg' alt='' />
              Milks & Dairies
            </a>
            <span className='count'>30</span>
          </li>
          <li>
            <a href='shop-grid-right.html'>
              <img src='assets/imgs/theme/icons/category-2.svg' alt='' />
              Clothing
            </a>
            <span className='count'>35</span>
          </li>
          <li>
            <a href='shop-grid-right.html'>
              <img src='assets/imgs/theme/icons/category-3.svg' alt='' />
              Pet Foods
            </a>
            <span className='count'>42</span>
          </li>
          <li>
            <a href='shop-grid-right.html'>
              <img src='assets/imgs/theme/icons/category-4.svg' alt='' />
              Baking material
            </a>
            <span className='count'>68</span>
          </li>
          <li>
            <a href='shop-grid-right.html'>
              <img src='assets/imgs/theme/icons/category-5.svg' alt='' />
              Fresh Fruit
            </a>
            <span className='count'>87</span>
          </li>
        </ul>
      </div>
      {/* <!-- Fillter By Price --> */}
      <div className='sidebar-widget price_range range mb-30'>
        <h5 className='section-title style-1 mb-30'>Fill by price</h5>
        <div className='price-filter'>
          <div className='price-filter-inner'>
            <div id='slider-range' className='mb-20'></div>
            <div className='d-flex justify-content-between'>
              <div className='caption'>
                From:{' '}
                <strong
                  id='slider-range-value1'
                  className='text-brand'
                ></strong>
              </div>
              <div className='caption'>
                To:{' '}
                <strong
                  id='slider-range-value2'
                  className='text-brand'
                ></strong>
              </div>
            </div>
          </div>
        </div>
        <div className='list-group'>
          <div className='list-group-item mb-10 mt-10'>
            <label className='fw-900'>Color</label>
            <div className='custome-checkbox'>
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox1'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox1'>
                <span>Red (56)</span>
              </label>
              <br />
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox2'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox2'>
                <span>Green (78)</span>
              </label>
              <br />
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox3'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox3'>
                <span>Blue (54)</span>
              </label>
            </div>
            <label className='fw-900 mt-15'>Item Condition</label>
            <div className='custome-checkbox'>
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox11'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox11'>
                <span>New (1506)</span>
              </label>
              <br />
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox21'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox21'>
                <span>Refurbished (27)</span>
              </label>
              <br />
              <input
                className='form-check-input'
                type='checkbox'
                name='checkbox'
                id='exampleCheckbox31'
                value=''
              />
              <label className='form-check-label' htmlFor='exampleCheckbox31'>
                <span>Used (45)</span>
              </label>
            </div>
          </div>
        </div>
        <a href='shop-grid-right.html' className='btn btn-sm btn-default'>
          <i className='fi-rs-filter mr-5'></i> Fillter
        </a>
      </div>
      {/* <!-- Product sidebar Widget --> */}
      <div className='sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10'>
        <h5 className='section-title style-1 mb-30'>New products</h5>
        <div className='single-post clearfix'>
          <div className='image'>
            <img src='assets/imgs/shop/thumbnail-3.jpg' alt='#' />
          </div>
          <div className='content pt-10'>
            <h5>
              <a href='shop-product-detail.html'>Chen Cardigan</a>
            </h5>
            <p className='price mb-0 mt-5'>$99.50</p>
            <div className='product-rate'>
              <div className='product-rating' style={{ width: '90%' }}></div>
            </div>
          </div>
        </div>
        <div className='single-post clearfix'>
          <div className='image'>
            <img src='assets/imgs/shop/thumbnail-4.jpg' alt='#' />
          </div>
          <div className='content pt-10'>
            <h6>
              <a href='shop-product-detail.html'>Chen Sweater</a>
            </h6>
            <p className='price mb-0 mt-5'>$89.50</p>
            <div className='product-rate'>
              <div className='product-rating' style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
        <div className='single-post clearfix'>
          <div className='image'>
            <img src='assets/imgs/shop/thumbnail-5.jpg' alt='#' />
          </div>
          <div className='content pt-10'>
            <h6>
              <a href='shop-product-detail.html'>Colorful Jacket</a>
            </h6>
            <p className='price mb-0 mt-5'>$25</p>
            <div className='product-rate'>
              <div className='product-rating' style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className='banner-img wow fadeIn mb-lg-0 animated d-lg-block d-none'>
        <img src='assets/imgs/banner/banner-11.png' alt='' />
        <div className='banner-text'>
          <span>Oganic</span>
          <h4>
            Save 17% <br />
            on <span className='text-brand'>Oganic</span>
            <br />
            Juice
          </h4>
        </div>
      </div>
    </>
  );
};
