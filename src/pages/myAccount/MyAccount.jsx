/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyAccountContext } from "../../context/AccountContext";
import { shipAddres_url, api_url, userUpdate_url } from "../../config/env";
import { WishListContext } from "../../context/WishListContext";
import { CartContext } from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getShipmentAddressThunk,
  getUserInfoThunk,
} from "../../redux/cartSlice";
import { PaymentContext } from "../../context/PaymentMethod";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state);
  const { fetchShipmentAddress } = useSelector((state) => state);
  const { userinfo } = useSelector((state) => state);
  // console.log("This is a Current User Information ", userinfo);
  // console.log("That are the Shipment ", fetchShipmentAddress);
  const roleId = localStorage.getItem("roleId");
  const { userId } = useContext(MyAccountContext);
  const { deleteUserAddres } = useContext(PaymentContext);
  const { addProducts } = useContext(CartContext);
  const { deleteWishlist } = useContext(WishListContext);
  const [orderDetails, setOrderDetails] = useState();
  const [locatCities, setCities] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  const [activeSection, setActiveSection] = useState("dashboard");
  const handleSectionClick = async (section) => {
    setActiveSection(section);
    if (section === "account") {
      // window.location.reload();
    }
  };

  const handleAddToCart = (productId, quantity, productDesc) => {
    addProducts(productId, quantity);
    setSelectedProductDesc(productDesc);
    setTimeout(() => {
      setSelectedProductDesc("");
    }, 4000);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("roleId");
    localStorage.removeItem("persist:root");
    window.location.reload();
    window.location.href = "/";
  };
  // fetch all OrderDetails  from db
  const OrderDetails = async () => {
    const response = await fetch(
      `${shipAddres_url}&intCompanyID=1&tag=get_user_orders_list&intUserID=${userId}`
    );
    const OrderData = await response.json();
    // console.log("Helooo", OrderData);
    setOrderDetails(OrderData.data.orders_list);
  };
  // Form
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    address: "",
    city: "",
    alter_phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    // setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleUpdateClick = async () => {
    console.log("update");
    const errors = {};

    // Validate name field

    if (!formData.full_name.trim()) {
      errors.full_name = "Full Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.full_name.trim())) {
      errors.full_name = "Only alphabetic characters are allowed";
    }

    // Validate phone field
    if (!/^\d{11,12}$/.test(formData.alter_phone)) {
      errors.alter_phone = "Phone must be 11 or 12 digits like 923014788965";
    }

    // Validate email field
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }

    // Validate city field
    if (!formData.city) {
      errors.city = "City is required";
    }

    // Validate address field
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (Object.keys(errors).length > 0) {
      // If there are errors, update the state and prevent form submission
      setFormErrors(errors);
      return;
    }

    let data = new FormData();
    data.append("intUserID", userId);
    data.append("strFullName", formData.full_name);
    data.append("intRoleID", roleId);
    data.append("strEmail", formData.email);
    data.append("strAddress", formData.address);
    data.append("intCityID", formData.city);
    data.append("strAlternateContactNo", formData.strContactNo);

    const response = await fetch(`${userUpdate_url}&tag=update_user_profile`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      alert("Changes Saved");

      dispatch(getShipmentAddressThunk(userId));
      dispatch(getUserInfoThunk(userId));
    }
  };

  useEffect(() => {
    document.title = "Ms Books | MyAccount";
    setFormData({
      full_name: userinfo.strFullName,
      email: userinfo?.strEmail,
      address: userinfo?.strAddress || "",
      city: userinfo?.city || "",
      alter_phone: userinfo?.strContactNo || "",
    });

    const fetchCities = async () => {
      try {
        const response = await fetch(`${api_url}&tag=get_city&intCountryID=1`);
        const data = await response.json();

        setCities(data.data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };
    OrderDetails();
    fetchCities();
    dispatch(getShipmentAddressThunk(userId));
    dispatch(getUserInfoThunk(userId));
  }, [dispatch, userId]);

  return (
    <>
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="/" rel="nofollow">
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
                          <Link
                            to=""
                            className={`nav-link ${
                              activeSection === "dashboard" ? "active" : ""
                            }`}
                            onClick={() => handleSectionClick("dashboard")}
                          >
                            <i className="fi-rs-settings-sliders mr-10"></i>
                            Dashboard
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to=""
                            className={`nav-link ${
                              activeSection === "wishlist" ? "active" : ""
                            }`}
                            onClick={() => handleSectionClick("wishlist")}
                          >
                            <i className="fi-rs-heart mr-10"></i>Wishlist
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to=""
                            className={`nav-link ${
                              activeSection === "orders" ? "active" : ""
                            }`}
                            onClick={() => handleSectionClick("orders")}
                          >
                            <i className="fi-rs-heart mr-10"></i>Orders
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to=""
                            className={`nav-link ${
                              activeSection === "address" ? "active" : ""
                            }`}
                            onClick={() => handleSectionClick("address")}
                          >
                            <i className="fi-rs-heart mr-10"></i>My Address
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to=""
                            className={`nav-link ${
                              activeSection === "account" ? "active" : ""
                            }`}
                            onClick={() => handleSectionClick("account")}
                          >
                            <i className="fi-rs-heart mr-10"></i>My Account
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link btnLogout"
                            href="#"
                            onClick={handleLogout}
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
                        style={{
                          display: `${
                            activeSection === "dashboard" ? "block" : "none"
                          }`,
                        }}
                      >
                        <div className="card">
                          <div className="card-header">
                            <h3 className="mb-0">
                              {""}
                              Hello
                              {userinfo?.strUserName}
                            </h3>
                          </div>
                          <div className="card-body">
                            <p>
                              From your account dashboard. you can easily check
                              &amp; view your
                              <a>recent orders</a>
                              <br></br>
                              manage your
                              <a>shipping and billing addresses</a>
                              and
                              <a>edit your account details.</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* WishList*/}
                      <div
                        style={{
                          display: `${
                            activeSection === "wishlist" ? "block" : "none"
                          }`,
                        }}
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
                                  {wishlistItems?.map((item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td className="image product-thumbnail">
                                          <img src={item?.strImage} alt="#" />
                                        </td>
                                        <td>{item?.strDesc}</td>
                                        <td>
                                          {new Intl.NumberFormat("en-US", {
                                            style: "decimal",
                                          }).format(item?.dblSalePrice)}
                                        </td>
                                        <td>
                                          <button
                                            style={{ border: "none" }}
                                            type="button"
                                            className="add add_in_cart"
                                            onClick={() =>
                                              handleAddToCart(
                                                item?.intID,
                                                1,
                                                item?.strDesc
                                              )
                                            }
                                          >
                                            Add to Cart
                                          </button>
                                          <button
                                            onClick={() => deleteWishlist(item)}
                                            style={{
                                              border: "none",
                                              backgroundColor: "white",
                                            }}
                                            className="btn-small d-block text-danger btnWishlistDel"
                                          >
                                            Delete
                                          </button>
                                        </td>
                                        <div className="contact-info">
                                          <div className="social-info">
                                            <h4>{selectedProductDesc}</h4>
                                          </div>
                                        </div>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* WishList*/}
                      {/* Order*/}

                      <div
                        style={{
                          display: `${
                            activeSection === "orders" ? "block" : "none"
                          }`,
                        }}
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
                                <tbody>
                                  {orderDetails?.map((item, index) => {
                                    return (
                                      <tr key={index}>
                                        <th>{item?.strCode}</th>
                                        <th>{item?.dtDate}</th>
                                        <th>{item?.strCustomerDesc}</th>
                                        <th>{item?.strOrderStatus}</th>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div
                        style={{
                          display: `${
                            activeSection === "address" ? "block" : "none"
                          }`,
                        }}
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
                                  {fetchShipmentAddress?.map((item, index) => {
                                    return (
                                      <tr key={index}>
                                        <td>#{item?.intID}</td>
                                        <td>
                                          {item?.strShipmentContactPerson}
                                        </td>
                                        <td>{item?.strShipmentAddress}</td>
                                        <td></td>
                                        <td>{item?.strShipmentPhone}</td>
                                        <td>{item?.strShipmentCity} </td>
                                        <td>
                                          {index !== 0 && (
                                            <button
                                              onClick={() =>
                                                deleteUserAddres(item)
                                              }
                                              style={{
                                                border: "none",
                                                backgroundColor: "white",
                                              }}
                                              className="btn-small d-block text-danger btnWishlistDel"
                                            >
                                              Delete
                                            </button>
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* My Account */}
                      <div
                        style={{
                          display: `${
                            activeSection === "account" ? "block" : "none"
                          }`,
                        }}
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
                                  required
                                  className={`form-control ${
                                    formErrors.full_name ? "is-invalid" : ""
                                  }`}
                                  name="full_name"
                                  id="full_name"
                                  type="text"
                                  value={formData?.full_name}
                                  onChange={handleInputChange}
                                />
                                {formErrors.full_name && (
                                  <div className="invalid-feedback">
                                    {formErrors.full_name}
                                  </div>
                                )}
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Email Address
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className={`form-control ${
                                    formErrors.email ? "is-invalid" : ""
                                  }`}
                                  name="email"
                                  id="email"
                                  type="email"
                                  value={formData?.email}
                                  onChange={handleInputChange}
                                />
                                {formErrors.email && (
                                  <div className="invalid-feedback">
                                    {formErrors.email}
                                  </div>
                                )}
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Address <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className={`form-control ${
                                    formErrors.address ? "is-invalid" : ""
                                  }`}
                                  name="address"
                                  id="user_address"
                                  type="text"
                                  value={formData?.address}
                                  onChange={handleInputChange}
                                />
                                {formErrors.address && (
                                  <div className="invalid-feedback">
                                    {formErrors.address}
                                  </div>
                                )}
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  City<span className="required">*</span>
                                </label>
                                <select
                                  className={`form-control ${
                                    formErrors.city ? "is-invalid" : ""
                                  }`}
                                  name="city"
                                  id="city"
                                  value={formData?.city}
                                  onChange={handleInputChange}
                                >
                                  {/* Placeholder option */}
                                  <option value="" disabled>
                                    Select a city
                                  </option>
                                  {/* Map through cities to create options */}
                                  {locatCities.map((pakCity, index) => (
                                    <option key={index} value={pakCity.intID}>
                                      {pakCity.strDesc}
                                    </option>
                                  ))}
                                </select>
                                {formErrors.city && (
                                  <div className="invalid-feedback">
                                    {formErrors.city}
                                  </div>
                                )}
                              </div>

                              <div
                                className="form-group col-md-6"
                                style={{
                                  backgroundColor: "rgb(255, 255, 255)",
                                }}
                              >
                                <label>
                                  Alter Contact No/
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required=""
                                  className={`form-control ${
                                    formErrors.alter_phone ? "is-invalid" : ""
                                  }`}
                                  name="alter_phone"
                                  id="alter_phone"
                                  maxLength="12"
                                  type="text"
                                  value={formData?.alter_phone}
                                  onChange={handleInputChange}
                                />
                                {formErrors.alter_phone && (
                                  <div className="invalid-feedback">
                                    {formErrors.alter_phone}
                                  </div>
                                )}
                              </div>

                              <div className="col-md-12">
                                <button
                                  id="update-profile-btn"
                                  type="button"
                                  className="btn btn-fill-out submit font-weight-bold btnUpdateProfile"
                                  name="submit"
                                  value="Submit"
                                  onClick={handleUpdateClick}
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
