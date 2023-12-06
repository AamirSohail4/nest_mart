import { Link } from "react-router-dom";
import { PrimerySidbar } from "../../components/breadcrumb/sidebar/PrimerySidbar";
import img1 from "../../assets/imgs/shop/product-1-1.jpg";
import img2 from "../../assets/imgs/shop/product-2-1.jpg";
import { DealOfDay } from "../home/components/deal-of-day/DealOfDay";
export const ProductsGrid = () => {
  return (
    <>
      <main className="main" style={{ transform: "none" }}>
        <div className="page-header mt-30 mb-50">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-3">
                  <h1 className="mb-15">Snack</h1>
                  <div className="breadcrumb">
                    <Link to="index.html" rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>Home
                    </Link>
                    <span></span> Shop <span></span> Snack
                  </div>
                </div>
                <div className="col-xl-9 text-end d-none d-xl-block">
                  <ul className="tags-list">
                    <li className="hover-up">
                      <Link to="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>Cabbage
                      </Link>
                    </li>
                    <li className="hover-up active">
                      <Link to="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>Broccoli
                      </Link>
                    </li>
                    <li className="hover-up">
                      <Link to="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>Artichoke
                      </Link>
                    </li>
                    <li className="hover-up">
                      <Link to="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>Celery
                      </Link>
                    </li>
                    <li className="hover-up mr-0">
                      <Link to="blog-category-grid.html">
                        <i className="fi-rs-cross mr-10"></i>Spinach
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-30" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div className="col-lg-4-5">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    We found <strong className="text-brand">29</strong> items
                    for you!
                  </p>
                </div>
                <div className="sort-by-product-area">
                  <div className="sort-by-cover mr-10">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by">
                        <span>
                          <i className="fi-rs-apps"></i>Show:
                        </span>
                      </div>
                      <div className="sort-by-dropdown-wrap">
                        <span>
                          {" "}
                          50 <i className="fi-rs-angle-small-down"></i>
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <Link className="active" to="#">
                            50
                          </Link>
                        </li>
                        <li>
                          <Link to="#">100</Link>
                        </li>
                        <li>
                          <Link to="#">150</Link>
                        </li>
                        <li>
                          <Link to="#">200</Link>
                        </li>
                        <li>
                          <Link to="#">All</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sort-by-cover">
                    <div className="sort-by-product-wrap">
                      <div className="sort-by">
                        <span>
                          <i className="fi-rs-apps-sort"></i>Sort by:
                        </span>
                      </div>
                      <div className="sort-by-dropdown-wrap">
                        <span>
                          {" "}
                          Featured <i className="fi-rs-angle-small-down"></i>
                        </span>
                      </div>
                    </div>
                    <div className="sort-by-dropdown">
                      <ul>
                        <li>
                          <Link className="active" to="#">
                            Featured
                          </Link>
                        </li>
                        <li>
                          <Link to="#">Price: Low to High</Link>
                        </li>
                        <li>
                          <Link to="#">Price: High to Low</Link>
                        </li>
                        <li>
                          <Link to="#">Release Date</Link>
                        </li>
                        <li>
                          <Link to="#">Avg. Rating</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-grid">
                <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                  <div className="product-cart-wrap mb-30">
                    <div className="product-img-action-wrap">
                      <div className="product-img product-img-zoom">
                        <Link to="shop-product-right.html">
                          <img className="default-img" src={img1} alt="" />
                          <img className="hover-img" src={img2} alt="" />
                        </Link>
                      </div>
                      <div className="product-action-1">
                        <Link
                          aria-label="Add To Wishlist"
                          className="action-btn"
                          to="shop-wishlist.html"
                        >
                          <i className="fi-rs-heart"></i>
                        </Link>
                        <Link
                          aria-label="Compare"
                          className="action-btn"
                          to="shop-compare.html"
                        >
                          <i className="fi-rs-shuffle"></i>
                        </Link>
                        <Link
                          aria-label="Quick view"
                          className="action-btn"
                          data-bs-toggle="modal"
                          data-bs-target="#quickViewModal"
                        >
                          <i className="fi-rs-eye"></i>
                        </Link>
                      </div>
                      <div className="product-badges product-badges-position product-badges-mrg">
                        <span className="hot">Hot</span>
                      </div>
                    </div>
                    <div className="product-content-wrap">
                      <div className="product-category">
                        <Link to="shop-grid-right.html">Snack</Link>
                      </div>
                      <h2>
                        <Link to="shop-product-right.html">
                          Seeds of Change Organic Quinoe
                        </Link>
                      </h2>
                      <div className="product-rate-cover">
                        <div className="product-rate d-inline-block">
                          <div
                            className="product-rating"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="font-small ml-5 text-muted">
                          {" "}
                          (4.0)
                        </span>
                      </div>
                      <div>
                        <span className="font-small text-muted">
                          By<Link to="vendor-details-1.html">NestFood</Link>
                        </span>
                      </div>
                      <div className="product-card-bottom">
                        <div className="product-price">
                          <span>$28.85</span>
                          <span className="old-price">$32.8</span>
                        </div>
                        <div className="add-cart">
                          <Link className="add" to="shop-cart.html">
                            <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DealOfDay />
            </div>
            <div
              className="col-lg-1-5 primary-sidebar sticky-sidebar"
              style={{
                position: "relative",
                overflow: "visible",
                boxSizing: "border-box",
                minHeight: "1px",
              }}
            >
              <PrimerySidbar />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
