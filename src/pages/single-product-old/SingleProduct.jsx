import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "../../components/breadcrumb/Breadcrumb";
import { PrimerySidbar } from "../../components/breadcrumb/sidebar/PrimerySidbar";
import img1 from "../../assets/imgs/theme/icons/icon-location.svg";
import img2 from "../../assets/imgs/theme/icons/icon-contact.svg";
import img3 from "../../assets/imgs/vendor/vendor-18.svg";
import img4 from "../../assets/imgs/blog/author-2.png";
import img5 from "../../assets/imgs/blog/author-3.png";
import img6 from "../../assets/imgs/blog/author-4.png";
import img7 from "../../assets/imgs/shop/product-2-1.jpg";
import img8 from "../../assets/imgs/shop/product-2-2.jpg";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Single_Url } from "../../config/env";

export const SingleProduct = () => {
  const { id } = useParams();

  const [singleproduct, setSingleProduct] = useState([]);
  useEffect(() => {
    async function SingleProductShow() {
      const response = await fetch(`${Single_Url}=${id}`);

      const productData = await response.json();
      //   console.log(productData.data);
      setSingleProduct(productData.data);
    }
    SingleProductShow();
  }, [id]);
  console.log("Single Product=>", singleproduct);

  return (
    <>
      <Breadcrumb />
      <div className="container mb-30" style={{ transform: "none" }}>
        <div
          className="col-xl-11 col-lg-12 m-auto"
          style={{ transform: "none" }}
        >
          <div className="row" style={{ transform: "none" }}>
            <div className="col-xl-9">
              <div className="product-detail accordion-detail">
                {singleproduct?.map((item) => {
                  return (
                    <div key={item.intID} className="row mb-50 mt-30">
                      <div className="col-md-6 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                        <h3>Slider of Single Product</h3>
                      </div>
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <div className="detail-info pr-30 pl-30">
                          <span className="stock-status out-stock">
                            {" "}
                            Sale Off{" "}
                          </span>
                          <h2 className="title-detail">{item.strDesc}</h2>
                          <div className="product-detail-rating">
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (32 reviews)
                              </span>
                            </div>
                          </div>
                          <div className="clearfix product-price-cover">
                            <div className="product-price primary-color float-left">
                              <span className="current-price text-brand">
                                {item.dblSalePrice}
                              </span>
                              <span>
                                <span className="save-price font-md color3 ml-15">
                                  26% Off
                                </span>
                                <span className="old-price font-md ml-15">
                                  1200
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="short-desc mb-30">
                            <p className="font-lg">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Aliquam rem officia, corrupti
                              reiciendis minima nisi modi, quasi, odio minus
                              dolore impedit fuga eum eligendi.
                            </p>
                          </div>

                          <div className="detail-extralink mb-50">
                            <div className="detail-qty border radius">
                              <Link to="#" className="qty-down">
                                <Icon icon="prime:angle-down" />
                              </Link>
                              <span className="qty-val">1</span>
                              <Link to="#" className="qty-up">
                                <Icon icon="prime:angle-up" />
                              </Link>
                            </div>
                            <div className="product-extra-link2">
                              <button
                                type="submit"
                                className="button button-add-to-cart"
                              >
                                <Icon icon="mdi-light:cart" />
                                Add to cart
                              </button>
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn hover-up"
                                to="shop-wishlist.html"
                              >
                                <Icon icon="ph:heart-thin" />
                              </Link>
                              <Link
                                aria-label="Compare"
                                className="action-btn hover-up"
                                to="shop-compare.html"
                              >
                                <Icon icon="circum:shuffle" />
                              </Link>
                            </div>
                          </div>
                          <div className="font-xs">
                            <ul className="mr-50 float-start">
                              <li className="mb-5">
                                Grade:
                                <span className="text-brand">{item.Grade}</span>
                              </li>
                              <li className="mb-5">
                                Type:
                                <span className="text-brand"> {item.Type}</span>
                              </li>
                              <li>
                                LIFE:{" "}
                                <span className="text-brand">70 days</span>
                              </li>
                            </ul>
                            <ul className="float-start">
                              <li className="mb-5">
                                SKU: <Link to="#">FWM15VKT</Link>
                              </li>
                              <li className="mb-5">
                                Tags:{" "}
                                <Link to="#" rel="tag">
                                  Snack
                                </Link>
                                ,{" "}
                                <Link to="#" rel="tag">
                                  Organic
                                </Link>
                                <Link to="#" rel="tag">
                                  Brown
                                </Link>
                              </li>
                              <li>
                                Stock:
                                <span className="in-stock text-brand ml-5">
                                  8 Items In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Tab Secction */}
                <div className="product-info">
                  <div className="tab-style3">
                    <ul className="nav nav-tabs text-uppercase">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          id="Description-tab"
                          data-bs-toggle="tab"
                          to="#Description"
                        >
                          Description
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          id="Additional-info-tab"
                          data-bs-toggle="tab"
                          to="#Additional-info"
                        >
                          Additional info
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          id="Vendor-info-tab"
                          data-bs-toggle="tab"
                          to="#Vendor-info"
                        >
                          Vendor
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          id="Reviews-tab"
                          data-bs-toggle="tab"
                          to="#Reviews"
                        >
                          Reviews (3)
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content shop_info_tab entry-main-content">
                      <div
                        className="tab-pane fade active show"
                        id="Description"
                      >
                        <div className="">
                          <p>
                            Uninhibited carnally hired played in whimpered dear
                            gorilla koala depending and much yikes off far
                            quetzal goodness and from for grimaced goodness
                            unaccountably and meadowlark near unblushingly
                            crucial scallop tightly neurotic hungrily some and
                            dear furiously this apart.
                          </p>
                          <p>
                            Spluttered narrowly yikes left moth in yikes bowed
                            this that grizzly much hello on spoon-fed that alas
                            rethought much decently richly and wow against the
                            frequent fluidly at formidable acceptably flapped
                            besides and much circa far over the bucolically hey
                            precarious goldfinch mastodon goodness gnashed a
                            jellyfish and one however because.
                          </p>
                          <ul className="product-more-infor mt-30">
                            <li>
                              <span>Type Of Packing</span> Bottle
                            </li>
                            <li>
                              <span>Color</span> Green, Pink, Powder Blue,
                              Purple
                            </li>
                            <li>
                              <span>Quantity Per Case</span> 100ml
                            </li>
                            <li>
                              <span>Ethyl Alcohol</span> 70%
                            </li>
                            <li>
                              <span>Piece In One</span> Carton
                            </li>
                          </ul>

                          <p>
                            Laconic overheard dear woodchuck wow this
                            outrageously taut beaver hey hello far meadowlark
                            imitatively egregiously hugged that yikes minimally
                            unanimous pouted flirtatiously as beaver beheld
                            above forward energetic across this jeepers
                            beneficently cockily less a the raucously that magic
                            upheld far so the this where crud then below after
                            jeez enchanting drunkenly more much wow callously
                            irrespective limpet.
                          </p>
                          <h4 className="mt-30">Packaging &amp; Delivery</h4>
                          <hr className="wp-block-separator is-style-wide" />
                          <p>
                            Less lion goodness that euphemistically robin
                            expeditiously bluebird smugly scratched far while
                            thus cackled sheepishly rigid after due one
                            assenting regarding censorious while occasional or
                            this more crane went more as this less much amid
                            overhung anathematic because much held one
                            exuberantly sheep goodness so where rat wry well
                            concomitantly.
                          </p>
                          <p>
                            Scallop or far crud plain remarkably far by thus far
                            iguana lewd precociously and and less rattlesnake
                            contrary caustic wow this near alas and next and
                            pled the yikes articulate about as less cackled
                            dalmatian in much less well jeering for the thanks
                            blindly sentimental whimpered less across
                            objectively fanciful grimaced wildly some wow and
                            rose jeepers outgrew lugubrious luridly irrationally
                            attractively dachshund.
                          </p>
                          <h4 className="mt-30">Suggested Use</h4>
                          <ul className="product-more-infor mt-30">
                            <li>Refrigeration not necessary.</li>
                            <li>Stir before serving</li>
                          </ul>
                          <h4 className="mt-30">Other Ingredients</h4>
                          <ul className="product-more-infor mt-30">
                            <li>Organic raw pecans, organic raw cashews.</li>
                            <li>
                              This butter was produced using a LTG (Low
                              Temperature Grinding) process
                            </li>
                            <li>
                              Made in machinery that processes tree nuts but
                              does not process peanuts, gluten, dairy or soy
                            </li>
                          </ul>
                          <h4 className="mt-30">Warnings</h4>
                          <ul className="product-more-infor mt-30">
                            <li>
                              Oil separation occurs naturally. May contain
                              pieces of shell.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="Additional-info">
                        <table className="font-md">
                          <tbody>
                            <tr className="stand-up">
                              <th>Stand Up</th>
                              <td>
                                <p>
                                  35″L x 24″W x 37-45″H(front to back wheel)
                                </p>
                              </td>
                            </tr>
                            <tr className="folded-wo-wheels">
                              <th>Folded (w/o wheels)</th>
                              <td>
                                <p>32.5″L x 18.5″W x 16.5″H</p>
                              </td>
                            </tr>
                            <tr className="folded-w-wheels">
                              <th>Folded (w/ wheels)</th>
                              <td>
                                <p>32.5″L x 24″W x 18.5″H</p>
                              </td>
                            </tr>
                            <tr className="door-pass-through">
                              <th>Door Pass Through</th>
                              <td>
                                <p>24</p>
                              </td>
                            </tr>
                            <tr className="frame">
                              <th>Frame</th>
                              <td>
                                <p>Aluminum</p>
                              </td>
                            </tr>
                            <tr className="weight-wo-wheels">
                              <th>Weight (w/o wheels)</th>
                              <td>
                                <p>20 LBS</p>
                              </td>
                            </tr>
                            <tr className="weight-capacity">
                              <th>Weight Capacity</th>
                              <td>
                                <p>60 LBS</p>
                              </td>
                            </tr>
                            <tr className="width">
                              <th>Width</th>
                              <td>
                                <p>24″</p>
                              </td>
                            </tr>
                            <tr className="handle-height-ground-to-handle">
                              <th>Handle height (ground to handle)</th>
                              <td>
                                <p>37-45″</p>
                              </td>
                            </tr>
                            <tr className="wheels">
                              <th>Wheels</th>
                              <td>
                                <p>12″ air / wide track slick tread</p>
                              </td>
                            </tr>
                            <tr className="seat-back-height">
                              <th>Seat back height</th>
                              <td>
                                <p>21.5″</p>
                              </td>
                            </tr>
                            <tr className="head-room-inside-canopy">
                              <th>Head room (inside canopy)</th>
                              <td>
                                <p>25″</p>
                              </td>
                            </tr>
                            <tr className="pa_color">
                              <th>Color</th>
                              <td>
                                <p>Black, Blue, Red, White</p>
                              </td>
                            </tr>
                            <tr className="pa_size">
                              <th>Size</th>
                              <td>
                                <p>M, S</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="tab-pane fade" id="Vendor-info">
                        <div className="vendor-logo d-flex mb-30">
                          <img src={img3} alt="" />
                          <div className="vendor-name ml-15">
                            <h6>
                              <Link to="vendor-details-2.html">
                                Noodles Co.
                              </Link>
                            </h6>
                            <div className="product-rate-cover text-end">
                              <div className="product-rate d-inline-block">
                                <div
                                  className="product-rating"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                              <span className="font-small ml-5 text-muted">
                                {" "}
                                (32 reviews)
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul className="contact-infor mb-50">
                          <li>
                            <img src={img1} alt="" />
                            <strong>Address: </strong>{" "}
                            <span>
                              5171 W Campbell Ave undefined Kent, Utah 53127
                              United States
                            </span>
                          </li>
                          <li>
                            <img src={img2} alt="" />
                            <strong>Contact Seller:</strong>
                            <span>(+91) - 540-025-553</span>
                          </li>
                        </ul>
                        <div className="d-flex mb-55">
                          <div className="mr-30">
                            <p className="text-brand font-xs">Rating</p>
                            <h4 className="mb-0">92%</h4>
                          </div>
                          <div className="mr-30">
                            <p className="text-brand font-xs">Ship on time</p>
                            <h4 className="mb-0">100%</h4>
                          </div>
                          <div>
                            <p className="text-brand font-xs">Chat response</p>
                            <h4 className="mb-0">89%</h4>
                          </div>
                        </div>
                        <p>
                          Noodles &amp; Company is an American fast-casual
                          restaurant that offers international and American
                          noodle dishes and pasta in addition to soups and
                          salads. Noodles &amp; Company was founded in 1995 by
                          Aaron Kennedy and is headquartered in Broomfield,
                          Colorado. The company went public in 2013 and recorded
                          a $457 million revenue in 2017.In late 2018, there
                          were 460 Noodles &amp; Company locations across 29
                          states and Washington, D.C.
                        </p>
                      </div>
                      <div className="tab-pane fade" id="Reviews">
                        <div className="comments-area">
                          <div className="row">
                            <div className="col-lg-8">
                              <h4 className="mb-30">
                                Customer questions &amp; answers
                              </h4>
                              <div className="comment-list">
                                <div className="single-comment justify-content-between d-flex mb-30">
                                  <div className="user justify-content-between d-flex">
                                    <div className="thumb text-center">
                                      <img src={img4} alt="" />
                                      <Link
                                        to="#"
                                        className="font-heading text-brand"
                                      >
                                        Sienna
                                      </Link>
                                    </div>
                                    <div className="desc">
                                      <div className="d-flex justify-content-between mb-10">
                                        <div className="d-flex align-items-center">
                                          <span className="font-xs text-muted">
                                            December 4, 2021 at 3:12 pm{" "}
                                          </span>
                                        </div>
                                        <div className="product-rate d-inline-block">
                                          <div
                                            className="product-rating"
                                            style={{ width: "100%" }}
                                          ></div>
                                        </div>
                                      </div>
                                      <p className="mb-10">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Delectus, suscipit
                                        exercitationem accusantium obcaecati
                                        quos voluptate nesciunt facilis itaque
                                        modi commodi dignissimos sequi
                                        repudiandae minus ab deleniti totam
                                        officia id incidunt?{" "}
                                        <Link to="#" className="reply">
                                          Reply
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-comment justify-content-between d-flex mb-30 ml-30">
                                  <div className="user justify-content-between d-flex">
                                    <div className="thumb text-center">
                                      <img src={img5} alt="" />
                                      <Link
                                        to="#"
                                        className="font-heading text-brand"
                                      >
                                        Brenna
                                      </Link>
                                    </div>
                                    <div className="desc">
                                      <div className="d-flex justify-content-between mb-10">
                                        <div className="d-flex align-items-center">
                                          <span className="font-xs text-muted">
                                            December 4, 2021 at 3:12 pm{" "}
                                          </span>
                                        </div>
                                        <div className="product-rate d-inline-block">
                                          <div
                                            className="product-rating"
                                            style={{ width: "80%" }}
                                          ></div>
                                        </div>
                                      </div>
                                      <p className="mb-10">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Delectus, suscipit
                                        exercitationem accusantium obcaecati
                                        quos voluptate nesciunt facilis itaque
                                        modi commodi dignissimos sequi
                                        repudiandae minus ab deleniti totam
                                        officia id incidunt?{" "}
                                        <Link to="#" className="reply">
                                          Reply
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-comment justify-content-between d-flex">
                                  <div className="user justify-content-between d-flex">
                                    <div className="thumb text-center">
                                      <img src={img6} alt="" />
                                      <Link
                                        to="#"
                                        className="font-heading text-brand"
                                      >
                                        Gemma
                                      </Link>
                                    </div>
                                    <div className="desc">
                                      <div className="d-flex justify-content-between mb-10">
                                        <div className="d-flex align-items-center">
                                          <span className="font-xs text-muted">
                                            December 4, 2021 at 3:12 pm{" "}
                                          </span>
                                        </div>
                                        <div className="product-rate d-inline-block">
                                          <div
                                            className="product-rating"
                                            style={{ width: "80%" }}
                                          ></div>
                                        </div>
                                      </div>
                                      <p className="mb-10">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Delectus, suscipit
                                        exercitationem accusantium obcaecati
                                        quos voluptate nesciunt facilis itaque
                                        modi commodi dignissimos sequi
                                        repudiandae minus ab deleniti totam
                                        officia id incidunt?{" "}
                                        <Link to="#" className="reply">
                                          Reply
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <h4 className="mb-30">Customer reviews</h4>
                              <div className="d-flex mb-30">
                                <div className="product-rate d-inline-block mr-15">
                                  <div
                                    className="product-rating"
                                    style={{ width: "90%" }}
                                  ></div>
                                </div>
                                <h6>4.8 out of 5</h6>
                              </div>
                              <div className="progress">
                                <span>5 star</span>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "65%",
                                    ariaValuenow: "65%",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                >
                                  50%
                                </div>
                              </div>
                              <div className="progress">
                                <span>4 star</span>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "25%",
                                    ariaValuenow: "25%",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                >
                                  25%
                                </div>
                              </div>
                              <div className="progress">
                                <span>3 star</span>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "45%",
                                    ariaValuenow: "45%",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                >
                                  45%
                                </div>
                              </div>
                              <div className="progress">
                                <span>2 star</span>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "65%",
                                    ariaValuenow: "65%",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                >
                                  65%
                                </div>
                              </div>
                              <div className="progress mb-30">
                                <span>1 star</span>
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{
                                    width: "85%",
                                    ariaValuenow: "85",
                                    ariaValuemin: "0",
                                    ariaValuemax: "100",
                                  }}
                                >
                                  85%
                                </div>
                              </div>
                              <Link to="#" className="font-xs text-muted">
                                How are ratings calculated?
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="comment-form">
                          <h4 className="mb-15">Add a review</h4>
                          <div className="product-rate d-inline-block mb-30"></div>
                          <div className="row">
                            <div className="col-lg-8 col-md-12">
                              <form
                                className="form-contact comment_form"
                                action="#"
                                id="commentForm"
                              >
                                <div className="row">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <textarea
                                        className="form-control w-100"
                                        name="comment"
                                        id="comment"
                                        cols="30"
                                        rows="9"
                                        placeholder="Write Comment"
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="name"
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-group">
                                      <input
                                        className="form-control"
                                        name="website"
                                        id="website"
                                        type="text"
                                        placeholder="Website"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group">
                                  <button
                                    type="submit"
                                    className="button button-contactForm"
                                  >
                                    Submit Review
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-60">
                <div className="col-12">
                  <h2 className="section-title style-1 mb-30">
                    Related products
                  </h2>
                </div>
                <div className="col-12">
                  <div className="row related-products">
                    <div className="col-lg-3 col-md-4 col-12 col-sm-6">
                      <div className="product-cart-wrap hover-up">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link a="shop-product-right.html" tabIndex="0">
                              <img className="default-img" src={img7} alt="" />
                              <img className="hover-img" src={img8} alt="" />
                            </Link>
                          </div>
                          <div className="product-action-1">
                            <Link
                              aria-label="Quick view"
                              className="action-btn small hover-up"
                              data-bs-toggle="modal"
                              data-bs-target="#quickViewModal"
                            >
                              <i className="fi-rs-search"></i>
                            </Link>
                            <Link
                              aria-label="Add To Wishlist"
                              className="action-btn small hover-up"
                              to="shop-wishlist.html"
                              tabIndex="0"
                            >
                              <i className="fi-rs-heart"></i>
                            </Link>
                            <Link
                              aria-label="Compare"
                              className="action-btn small hover-up"
                              to="shop-compare.html"
                              tabIndex="0"
                            >
                              <i className="fi-rs-shuffle"></i>
                            </Link>
                          </div>
                          <div className="product-badges product-badges-position product-badges-mrg">
                            <span className="hot">Hot</span>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <Link to="shop-product-right.html" tabIndex="0">
                              Ulstra Bass Headphone
                            </Link>
                          </h2>
                          <div className="rating-result" title="90%">
                            <span> </span>
                          </div>
                          <div className="product-price">
                            <span>$238.85 </span>
                            <span className="old-price">$245.8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 primary-sidebar sticky-sidebar mt-30"
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
      </div>
    </>
  );
};
