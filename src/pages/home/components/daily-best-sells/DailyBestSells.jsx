import { useState } from 'react';
import { FeatureProductSlider } from './FeatureProductSlider';

export const DailyBestSells = () => {
  const [activeTab, setActiveTab] = useState('tab-one-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className='section-padding pb-5'>
      <div className='container'>
        <div className='section-title wow animate__animated animate__fadeIn'>
          <h3 className=''>Daily Best Sells</h3>
          <ul className='nav nav-tabs links' id='myTab-2' role='tablist'>
            <li className='nav-item' role='presentation'>
              <button
                className={`nav-link ${
                  activeTab === 'tab-one-1' ? 'active' : ''
                }`}
                id='nav-tab-one-1'
                onClick={() => handleTabClick('tab-one-1')}
                role='tab'
                aria-controls='tab-one'
                aria-selected={activeTab === 'tab-one-1' ? 'true' : 'false'}
              >
                Featured
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className={`nav-link ${
                  activeTab === 'tab-two-1' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('tab-two-1')}
                id='nav-tab-two-1'
                role='tab'
                aria-controls='tab-two'
                aria-selected={activeTab === 'tab-two-1' ? 'true' : 'false'}
              >
                Popular
              </button>
            </li>
            <li className='nav-item' role='presentation'>
              <button
                className={`nav-link ${
                  activeTab === 'tab-three-1' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('tab-three-1')}
                id='nav-tab-three-1'
                role='tab'
                aria-controls='tab-three'
                aria-selected={activeTab === 'tab-three-1' ? 'true' : 'false'}
              >
                New added
              </button>
            </li>
          </ul>
        </div>
        <div className='row'>
          <div className='col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn'>
            <div className='banner-img style-2'>
              <div className='banner-text'>
                <h2 className='mb-100'>Bring nature into your home</h2>
                <a href='shop-grid-right.html' className='btn btn-xs'>
                  Shop Now <i className='fi-rs-arrow-small-right'></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className='col-lg-9 col-md-12 wow animate__animated animate__fadeIn'
            data-wow-delay='.4s'
          >
            <div className='tab-content' id='myTabContent-1'>
              <div
                className={`tab-pane fade ${
                  activeTab === 'tab-one-1' ? 'show active' : ''
                }`}
                id='tab-one-1'
                role='tabpanel'
                aria-labelledby='tab-one-1'
              >
                <FeatureProductSlider />
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'tab-two-1' ? 'show active' : ''
                }`}
                id='tab-two-1'
                role='tabpanel'
                aria-labelledby='tab-two-1'
              >
                <FeatureProductSlider />
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === 'tab-three-1' ? 'show active' : ''
                }`}
                id='tab-three-1'
                role='tabpanel'
                aria-labelledby='tab-three-1'
              >
                <FeatureProductSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
