import { Link } from "react-router-dom";

import { ProductDetail } from "./components/ProductDetail";

export const SingleProduct = () => {
  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </Link>
            <span></span> <Link to="#"></Link> <span>Product Detail</span>
          </div>
        </div>
      </div>
      <div className="container mb-30" style={{ transform: "none" }}>
        <div
          className="col-xl-11 col-lg-12 m-auto"
          style={{ transform: "none" }}
        >
          <div className="row" style={{ transform: "none" }}>
            <div className="col-xl-12">
              <ProductDetail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
