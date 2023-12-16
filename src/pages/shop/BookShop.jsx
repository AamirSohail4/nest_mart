import { useEffect, useState } from "react";
import { teacher_url } from "../../config/env";
import { Link } from "react-router-dom";
import shopImg from "../../assets/imgs/banner/dummy-shop.png";

export const BookShop = () => {
  const [allbookShops, setallBookShop] = useState();

  useEffect(() => {
    async function allBookShops() {
      const response = await fetch(`${teacher_url}&tag=get_shops`);
      const ShopData = await response.json();
      // console.log("MyDat======>", ShopData);
      setallBookShop(ShopData.data);
    }
    allBookShops();
  }, []);
  // console.log("MyDat======>", allbookShops);
  return (
    <>
      <main className="main" style={{ transform: "none" }}>
        <div className="page-header mt-30 mb-50">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <h1 className="mb-15">Book Shops</h1>
                  <div className="breadcrumb">
                    <Link to="/" rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>Home
                    </Link>
                    <span></span> Shop <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mb-30">
          <div className="row flex-row-reverse">
            <div className="col-lg-4-5">
              <div className="row product-grid">
                {allbookShops?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                    >
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to="/">
                              <button
                                style={{ border: "none", background: "none" }}
                                // onClick="change_text(this.value)"
                                // value='{"intID":"10","strCode":"00010","strDesc":"Azeem Books ","strContactPerson":"","strAddress":"G-1 Market Johar Town ","intCityID":"2","strCity":"Lahore ","strCell":"03004530196","strPicture":""}'
                                // data-toggle="modal"
                                // data-target="#myModal"
                              >
                                <img
                                  className="default-img"
                                  src={shopImg}
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src={shopImg}
                                  alt=""
                                />
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <div className="product-category">
                            <Link to="/">{item.strCity}</Link>
                          </div>
                          <h2>
                            <Link to="/">
                              <button
                                style={{ border: "none", background: "none" }}
                                // value='{"intID":"10","strCode":"00010","strDesc":"Azeem Books ","strContactPerson":"","strAddress":"G-1 Market Johar Town ","intCityID":"2","strCity":"Lahore ","strCell":"03004530196","strPicture":""}'
                                // data-toggle="modal"
                                // data-target="#myModal"
                              >
                                {item.strAddress}
                              </button>
                            </Link>
                          </h2>

                          <button
                            // onClick="change_text(this.value)"
                            // value='{"intID":"10","strCode":"00010","strDesc":"Azeem Books ","strContactPerson":"","strAddress":"G-1 Market Johar Town ","intCityID":"2","strCity":"Lahore ","strCell":"03004530196","strPicture":""}'
                            // data-toggle="modal"
                            // data-target="#myModal"
                            className="btn w-100 hover-up"
                          >
                            Details
                          </button>
                          <div
                            className="modal fade"
                            id="myModal"
                            role="dialog"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">
                                    <div
                                      id="shop-desc"
                                      style={{
                                        width: "450px",
                                        color: "#0B6BA2",
                                      }}
                                    >
                                      undefine
                                    </div>
                                  </h4>
                                  <button
                                    style={{ float: "right" }}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                  >
                                    ×
                                  </button>
                                </div>
                                <div className="modal-body">
                                  Contact Person:
                                  <p id="contact-person">undefine</p>
                                  Phone:<p id="contact-number">undefine</p>
                                  Address:<p id="Address">undefine</p>
                                  City:<p id="city">undefine</p>
                                </div>
                                <div id="footer" className="modal-footer">
                                  <button
                                    style={{
                                      color: "white",
                                      backgroundColor: "#0B6BA2",
                                    }}
                                    type="button"
                                    className="btn btn-default"
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
