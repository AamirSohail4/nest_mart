export const MyAccount = () => {
  return (
    <>
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="https://www.msbooks.pk" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </a>
              <span></span> Profile
            </div>
          </div>
        </div>
        <div
          className="page-content pt-150 pb-150"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div
            className="container"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="row"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <div
                className="col-lg-10 m-auto"
                style={{ backgroundColor: "rgb(255, 255, 255)" }}
              >
                <div
                  className="row"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div
                    className="col-md-3"
                    style={{ backgroundColor: "rgb(255, 255, 255)" }}
                  >
                    <div
                      className="dashboard-menu"
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
                      <ul className="nav flex-column" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="dashboard-tab"
                            data-bs-toggle="tab"
                            href="#dashboard"
                            role="tab"
                            aria-controls="dashboard"
                            aria-selected="true"
                          >
                            <i className="fi-rs-settings-sliders mr-10"></i>
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="wishlist-tab"
                            data-bs-toggle="tab"
                            href="#wishlist"
                            role="tab"
                            aria-controls="wishlist"
                            aria-selected="false"
                          >
                            <i className="fi-rs-heart mr-10"></i>Wishlist
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="orders-tab"
                            data-bs-toggle="tab"
                            href="#orders"
                            role="tab"
                            aria-controls="orders"
                            aria-selected="false"
                          >
                            <i className="fi-rs-shopping-bag mr-10"></i>Orders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="address-tab"
                            data-bs-toggle="tab"
                            href="#address"
                            role="tab"
                            aria-controls="address"
                            aria-selected="false"
                          >
                            <i className="fi-rs-marker mr-10"></i>My Address
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="account-detail-tab"
                            data-bs-toggle="tab"
                            href="#account-detail"
                            role="tab"
                            aria-controls="account-detail"
                            aria-selected="false"
                          >
                            <i className="fi-rs-user mr-10"></i>Account details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link btnLogout"
                            href="https://www.msbooks.pk/logout"
                          >
                            <i className="fi-rs-sign-out mr-10"></i>Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tab-content account dashboard-content pl-50">
                      <div
                        className="tab-pane fade active show"
                        id="dashboard"
                        role="tabpanel"
                        aria-labelledby="dashboard-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Hello 03014786408!</h3>
                          </div>
                          <div className="card-body">
                            <p>
                              From your account dashboard. you can easily check
                              &amp; view your
                              <a>recent orders</a>
                              {/* <a onClick="recent_order()"> recent orders</a>, */}
                              <br></br>
                              manage your
                              <a>shipping and billing addresses</a>
                              and
                              <a>edit your account details.</a>
                              {/* <a onClick="account_detail()">
                                edit your account details.
                              </a> */}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="wishlist"
                        role="tabpanel"
                        aria-labelledby="wishlist-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Your Wishlist</h3>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="image product-thumbnail">
                                      <img
                                        src="https://www.weberp.pk/app/msbooks/images/item/268/MATHS_P3.png"
                                        alt="#"
                                      />
                                    </td>
                                    <td>
                                      AL Unsolved Topical Maths P3 (S15-W22)
                                    </td>
                                    <td>Rs. 2850</td>
                                    <td>
                                      <button
                                        style={{ border: "none" }}
                                        type="button"
                                        id="wish-list-cart1511"
                                        href="#"
                                        className="add add_in_cart"
                                        data-value="1511"
                                      >
                                        Add to Cart
                                      </button>
                                      <button
                                        id="wish-list-del-btn1511"
                                        style={{
                                          border: "none",
                                          backgroundColor: "white",
                                        }}
                                        className="btn-small d-block text-danger btnWishlistDel"
                                        data-pid="1511"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="image product-thumbnail">
                                      <img
                                        src="https://weberp.pk/app/msbooks/images/item/1866/as-level-notes-by-sir-ali_thumb.jpg"
                                        alt="#"
                                      />
                                    </td>
                                    <td>
                                      AS Level Chemistry Notes By Muhammad Ali
                                    </td>
                                    <td>Rs. 1650</td>
                                    <td>
                                      <button
                                        style={{ border: "none" }}
                                        type="button"
                                        id="wish-list-cart1866"
                                        href="#"
                                        className="add add_in_cart"
                                        data-value="1866"
                                      >
                                        Add to Cart
                                      </button>
                                      <button
                                        id="wish-list-del-btn1866"
                                        style={{
                                          border: "none",
                                          backgroundColor: "white",
                                        }}
                                        className="btn-small d-block text-danger btnWishlistDel"
                                        data-pid="1866"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="image product-thumbnail">
                                      <img
                                        src="https://www.weberp.pk/app/msbooks/images/item/151/OL_Geo_Usman_Hameed_Notes.png"
                                        alt="#"
                                      />
                                    </td>
                                    <td>
                                      O Level Geography Notes by Dr. Usman
                                      Hameed
                                    </td>
                                    <td>Rs. 900</td>
                                    <td>
                                      <button
                                        style={{ border: "none" }}
                                        type="button"
                                        id="wish-list-cart151"
                                        href="#"
                                        className="add add_in_cart"
                                        data-value="151"
                                      >
                                        Add to Cart
                                      </button>
                                      <button
                                        id="wish-list-del-btn151"
                                        style={{
                                          border: "none",
                                          backgroundColor: "white",
                                        }}
                                        className="btn-small d-block text-danger btnWishlistDel"
                                        data-pid="151"
                                      >
                                        Delete
                                      </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="orders"
                        role="tabpanel"
                        aria-labelledby="orders-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Your Orders</h3>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Order</th>
                                    <th>Date</th>
                                    <th>Customer Name</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody></tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="address"
                        role="tabpanel"
                        aria-labelledby="address-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">Your Addresses</h3>
                          </div>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>No.</th>
                                    <th>Contact Person</th>
                                    <th>Address</th>
                                    <th>Zipcode</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>#1</td>
                                    <td>Aamir Sohail</td>
                                    <td>
                                      Mouza Depay wala Basti murshid waha Po
                                      Jallal Abad Tehsil and District Bahawalpur{" "}
                                    </td>
                                    <td></td>
                                    <td>03014786408</td>
                                    <td>Bahawalpur </td>
                                    <td>&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="account-detail"
                        role="tabpanel"
                        aria-labelledby="account-detail-tab"
                      >
                        <div className="card">
                          <div className="card-header">
                            <h5>Account Details</h5>
                          </div>
                          <div className="card-body">
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>
                                  Full Name <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className="form-control"
                                  name="full_name"
                                  id="full_name"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Email Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  type="email"
                                  value=""
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Address <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className="form-control"
                                  name="address"
                                  id="user_address"
                                  type="text"
                                  value="Mouza Depay wala Basti murshid waha Po Jallal Abad Tehsil and District Bahawalpur "
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  City<span className="required">*</span>
                                </label>
                                <select
                                  className="form-control"
                                  name="city"
                                  id="city"
                                >
                                  <option value="68">Mian Channu</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Alter Contact No/
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className="form-control"
                                  name="alter_phone"
                                  id="alter_phone"
                                  type="text"
                                  value="03014786408"
                                />
                              </div>
                              <div className="col-md-12">
                                <button
                                  id="update-profile-btn"
                                  type="button"
                                  className="btn btn-fill-out submit font-weight-bold btnUpdateProfile"
                                  name="submit"
                                  value="Submit"
                                >
                                  Save Change
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade custom-modal"
          id="show-order-detail"
          tabIndex="-1"
          aria-labelledby="onloadModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-body">
                <div className="row">
                  <div className="col">
                    <h4 style={{ backgroundColor: "#F0F0F0" }}>
                      Order Number#
                      <div
                        style={{ color: "red", display: "inline" }}
                        id="order-code-show"
                      ></div>
                    </h4>
                    <div className="row">
                      <div className="col">
                        <h6>Date</h6>
                      </div>
                      <div className="col">
                        <p id="order-date-show"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h6>Name</h6>
                      </div>
                      <div className="col">
                        <p id="order-name-show"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h6>Phone</h6>
                      </div>
                      <div className="col">
                        <p
                          style={{ display: "inline" }}
                          id="order-phone-show"
                        ></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h6>Order Total</h6>
                      </div>
                      <div className="col">
                        <p style={{ display: "inline" }} id="order-total"></p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <h4 style={{ backgroundColor: "#F0F0F0" }}>
                      Shipment Address
                    </h4>

                    <div className="row">
                      <div className="col">
                        <h6>Contact Person</h6>
                      </div>
                      <div className="col">
                        <p id="contact-per"></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <h6>Shipment Address</h6>
                      </div>
                      <div className="col">
                        <p id="shipment-address"></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <h6>Shipment City</h6>
                      </div>
                      <div className="col">
                        <p id="shipment-city"></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <h6>Shipment Phone</h6>
                      </div>
                      <div className="col">
                        <p id="shipment-phone"></p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <h6>Shipment Country</h6>
                      </div>
                      <div className="col">
                        <p id="shipment-country"></p>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <table className="table">
                    <thead>
                      <tr
                        style={{ backgroundColor: "#F0F0F0", border: "none" }}
                      >
                        <th style={{ width: "10%" }}></th>
                        <th style={{ width: "45%" }}>Product Name</th>
                        <th style={{ width: "15%" }}>Item Category</th>
                        <th style={{ width: "10%", textAlign: "right" }}>
                          Unit Price
                        </th>
                        <th style={{ width: "10%", textAlign: "right" }}>
                          QTY
                        </th>
                        <th style={{ width: "10%", textAlign: "right" }}>
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody id="order-detail-show"></tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-9">
                    <div id="sub-total-row" className="row">
                      <div className="col"></div>
                      <div className="col">
                        <div className="row" id="sub-total-row">
                          <div className="col">
                            <h6>Sub Total</h6>
                          </div>
                          <div className="col" style={{ textAlign: "right" }}>
                            <p id="subtotal-amount"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="discount-row" className="row">
                      <div className="col"></div>
                      <div className="col">
                        <div className="row" id="disc-amount-row">
                          <div className="col">
                            <h6>Discount</h6>
                          </div>
                          <div className="col" style={{ textAlign: "right" }}>
                            <p id="disc-amount"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col"></div>
                      <div className="col">
                        <div
                          className="row"
                          style={{ backgroundColor: "#4FA0CF" }}
                        >
                          <div className="col">
                            <h5 style={{ color: "white" }}>Grand Total</h5>
                          </div>
                          <div className="col">
                            <h5
                              id="total-amount"
                              style={{ textAlign: "right", color: "white" }}
                            ></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
