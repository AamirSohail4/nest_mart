import { Link } from "react-router-dom";

export const ShopCheckout = () => {
  return (
    <div className="container mb-80 mt-50">
      <div className="container mb-80 mt-50">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </Link>
              <Link to="/allproducts">
                <span>Shop</span>
              </Link>
              <span></span> Checkout
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="border p-40 cart-totals ml-30 mb-50">
              <div className="d-flex align-items-end justify-content-between mb-30">
                <h4>Your Order</h4>
                <h6 className="text-muted grandTotal"></h6>
              </div>
              <div className="d-flex align-items-end justify-content-between mb-10">
                <h5>Payment Mode</h5>
                <h6 className="text-muted">Cash On Delivery</h6>
              </div>
              <div className="d-flex align-items-end justify-content-between mb-10">
                <h5>Shipment</h5>
                <h6 className="text-muted">
                  Mouza Depay wala Basti murshid waha Po Jallal Abad Tehsil and
                  District Bahawalpur
                </h6>
              </div>
              <div className="divider-2 mb-30"></div>
              <div className="table-responsive order_table checkout">
                <table className="table no-border">
                  <tbody>
                    <tr>
                      <td className="image product-thumbnail">
                        <img
                          src="https://weberp.pk/app/msbooks/images/item/1871/a-level-biology-dr-saira_thumb.jpg"
                          alt="#"
                        />
                      </td>
                      <td>
                        <h6 className="w-160 mb-5">
                          <a
                            href="https://www.msbooks.pk/product/1871/as-%26-a-level-biology-notes-by-dr-saira"
                            className="text-heading"
                          >
                            AS &amp; A Level Biology Notes By Dr Saira
                          </a>
                        </h6>
                      </td>
                      <td>
                        <h6 className="text-muted pl-20 pr-20">x 1</h6>
                      </td>
                      <td>
                        <h4 className="text-brand">Rs. 1000</h4>
                      </td>
                    </tr>
                    <tr>
                      <td className="image product-thumbnail"></td>
                      <td> </td>
                      <td></td>
                      <td>
                        <h4 className="text-brand ">
                          <div>
                            <div
                              className="text-muted"
                              style={{
                                display: "inline-block",
                                paddingRight: "52px",
                              }}
                            >
                              Total
                            </div>
                            <div style={{ display: "inline-block" }}>
                              Rs.1000
                            </div>
                          </div>
                        </h4>

                        <input
                          type="hidden"
                          name="grandTotal"
                          id="grandTotal"
                          value="1000"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="payment ml-30" style={{ textAlign: "right" }}>
                <button
                  id="check-out-btn"
                  className="btn btn-fill-out btn-block mt-30 btnCheckout"
                >
                  Place an Order<i className="fi-rs-sign-out ml-15"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
