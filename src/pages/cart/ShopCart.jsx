import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { api_url, cart_url, singUp_url } from "../../config/env";

export const ShopCart = () => {
  const { cartItem, showPaymentMode } = useContext(CartContext);
  const { handleDeleteClick, DeleteCartSingleItem } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [locatCities, setCities] = useState([]);

  const handleAddModalClick = () => {
    console.log("button click");
    console.log("open =>>", open);
    setOpen(!open);
  };

  const handlePaymentSelection = async (value) => {
    // console.log("Selected Payment Mode:", value); // Log the selected value to the console
    const modeValue = value;

    setSelectedPayment(value);

    if (modeValue === "3") {
      try {
        const response = await fetch(
          `${cart_url}&tag=get_payment_mode_detail&intCompanyID=1&intPaymentModeID=${modeValue}`
        );

        const data = await response.json();
        console.log("My Api Response Data", data.data.strDetails);
        setPaymentDetails(data.data.strDetails);
      } catch (error) {
        console.error("Error fetching payment details:", error);
        // Handle error as needed
      }
    }
  };
  console.log("This is Value of Check Box Selelct", paymentDetails);
  const handleDec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleInc = () => {
    setQuantity(quantity + 1);
  };

  const calculateTotal = () => {
    if (!cartItem || !cartItem.length) {
      return 0; // Return 0 if cartItem is not defined or empty
    }

    return cartItem.reduce(
      (total, item) => total + parseFloat(item.item.dblSalePrice) * quantity,
      0
    );
  };
  const [formData, setFormData] = useState({
    contactname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleButtonClick = async () => {
    let data = new FormData();
    data.append("intUserID", localStorage.getItem("userId"));
    data.append("strShipmentContactPerson", formData.contactname);
    data.append("strShipmentAddress", formData.address);
    data.append("strShipmentEmail,formData.email");
    data.append("intCityID", formData.city);
    data.append("strAlternateContactNo", formData.phone);

    // console.log("Form Data:", data);
    const response = await fetch(`${cart_url}&tag=add_user_shipment_address`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      const resData = await response.json();

      console.log("Shipment api res", resData);
      resetForm();
    }
    const resetForm = () => {
      setFormData({
        contactname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
      });
    };
  };
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`${api_url}&tag=get_city&intCountryID=1`);
        const data = await response.json();

        setCities(data.data);
      } catch (error) {
        console.error("Error fetching city data:", error);
      }
    };

    fetchCities();
  }, []);
  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Shop
            <span></span> Cart
          </div>
        </div>
      </div>

      <div
        className="container mb-80 mt-50"
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div className="row">
          <div className="col-lg-8 mb-40">
            <h1 className="heading-2 mb-10">Your Cart</h1>
            <div className="d-flex justify-content-between">
              <h6 className="text-body">
                There are <span className="text-brand">{cartItem?.length}</span>{" "}
                products in your cart
              </h6>
              <h6 className="text-body">
                <button
                  id="clr-cart"
                  style={{ border: "none", backgroundColor: "white" }}
                  className="text-muted clear-cart btnCartEmpty"
                  onClick={handleDeleteClick}
                >
                  <i className="fi-rs-trash mr-5"></i>
                  Clear Cart
                </button>
              </h6>
            </div>
          </div>
        </div>
        <div className="row" style={{ backgroundColor: "rgb(255, 255, 255" }}>
          <div
            className="col-lg-8"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="table-responsive shopping-summery"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <table className="table table-wishlist">
                <thead>
                  <tr className="main-heading">
                    <th className="custome-checkbox start pl-30"></th>
                    <th scope="col" colSpan="2">
                      Product
                    </th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col" className="end">
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody id="cartTable">
                  {cartItem?.map((item, index) => {
                    // console.log("Single Cart Item", item);
                    return (
                      <tr key={index} className="">
                        <td className="custome-checkbox pl-30"></td>
                        <td className="image product-thumbnail pt-40">
                          <img src={item.item.strImage} alt="#" />
                        </td>
                        <td className="product-des product-name">
                          <h6 className="mb-5">
                            <a
                              className="product-name mb-10 text-heading"
                              href=""
                            >
                              {item.item.strDesc}
                            </a>
                          </h6>
                        </td>
                        <td className="price" data-title="Price">
                          <h4 className="text-body">
                            {item.item.strUOM} {item.item.dblSalePrice}
                          </h4>
                        </td>
                        <td
                          className="text-center detail-info"
                          data-title="Stock"
                        >
                          <div className="detail-extralink mr-15">
                            <div className="detail-qty border radius">
                              <a
                                href="#"
                                className="qty-down cartQtyUpdate"
                                data-pid="1866"
                                data-type="down"
                              >
                                <i
                                  className="fi-rs-angle-small-down"
                                  onClick={handleDec}
                                ></i>
                              </a>
                              <span className="qty-val item-qty">
                                {quantity}
                              </span>
                              <a
                                href="#"
                                className="qty-up cartQtyUpdate"
                                data-pid="1866"
                                data-type="up"
                              >
                                <i
                                  className="fi-rs-angle-small-up"
                                  onClick={handleInc}
                                ></i>
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="price" data-title="Price">
                          <h4 className="text-brand">
                            {item.item.strUOM}{" "}
                            {parseFloat(item.item.dblSalePrice) * quantity}
                          </h4>
                        </td>
                        <td className="action text-center" data-title="Remove">
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            id="del-btn1866"
                            className="text-body cartTableDel"
                            data-pid="1866"
                            onClick={() => DeleteCartSingleItem(item)}
                          >
                            <i className="fi-rs-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="divider-2 mb-30"></div>

            <div id="snackbar123"></div>

            <div className="row mt-50">
              <div className="col-lg-12">
                <div className="p-40">
                  <h4 className="mb-10">Apply Coupon</h4>
                  <p className="mb-30">
                    <span className="font-lg text-muted">
                      Using A Promo Code?
                    </span>
                  </p>
                  <form action="#">
                    <div className="d-flex justify-content-between">
                      <input
                        id="get-coupon-value"
                        className="font-medium mr-15 coupon"
                        name="Coupon"
                        value=""
                        placeholder="Enter Your Coupon"
                      />
                      <button className="btn" id="apply-coupon">
                        <i className="fi-rs-label mr-10"></i>Apply
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="border p-md-4 cart-totals ml-30">
              <div className="table-responsive">
                <table className="table no-border">
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <div className="payment">
                          <div className="d-flex justify-content-between mb-15 align-items-center">
                            <div>
                              <h5 className="text-muted">Payment Method</h5>
                            </div>
                          </div>

                          <div className="payment_option">
                            {showPaymentMode?.map((item, index) => (
                              <div key={index} className="custome-radio">
                                <input
                                  className="form-check-input"
                                  required=""
                                  type="radio"
                                  name="payment_option"
                                  id={`paymentRadios${index}`}
                                  value={item.intID}
                                  data-name={item.strDesc}
                                  onChange={() =>
                                    handlePaymentSelection(item.intID)
                                  }
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`paymentRadios${index}`}
                                  data-bs-toggle="collapse"
                                  data-target="#bankTranfer"
                                  aria-controls="bankTranfer"
                                >
                                  {item.strDesc}
                                </label>
                              </div>
                            ))}

                            <div id="bankTranfer">
                              {/* Display payment details here based on the selected option */}
                              {paymentDetails && (
                                <div id="bank detail" className="Detail_dta">
                                  {/* Render payment details dynamically based on the selected payment mode */}
                                  {selectedPayment === "3" ? (
                                    <>
                                      <p className="Detail_dta">
                                        {paymentDetails.toUpperCase()}
                                      </p>
                                      {/* Add other details as needed */}
                                    </>
                                  ) : selectedPayment === "1" ? (
                                    <p>Cash on Delivery</p>
                                  ) : null}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <div className="payment">
                          <div className="d-flex justify-content-between mb-15 align-items-center">
                            <div>
                              <h5 className="text-muted">Shipping Address</h5>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-outline-info waves-effect px-3 btnAddShipment"
                                onClick={handleAddModalClick}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                          <div className="payment_option">
                            <div className="custome-radio">
                              <input
                                className="form-check-input"
                                required=""
                                type="radio"
                                name="shipment_option"
                                id="exampleRadios0"
                                value="1"
                                data-name=" "
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleRadios0"
                                data-bs-toggle="collapse"
                                data-target="#bankTranfer"
                                aria-controls="bankTranfer"
                              >
                                Mouza Depay wala Basti murshid waha Po Jallal
                                Abad Tehsil and District Bahawalpur
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="cart_total_label">
                        <h6 className="text-muted">Subtotal</h6>
                      </td>
                      <td className="cart_total_amount">
                        <input id="get-subtotal" type="hidden" value="11950" />

                        <h4 id="set-subtotal" className="text-brand text-end">
                          {calculateTotal()}
                        </h4>
                      </td>
                    </tr>

                    <tr id="discount-available" hidden="">
                      <td className="cart_total_label">
                        <h6 className="text-muted">Discount</h6>
                      </td>
                      <td className="cart_total_amount">
                        <input
                          id="get-discount-price"
                          type="hidden"
                          value="0"
                        />
                        <input
                          id="get-discount-amount"
                          type="hidden"
                          value="0"
                        />
                        <input id="get-discount-per" type="hidden" value="0" />
                        <h4
                          id="set-discount-price"
                          className="text-brand text-end"
                        >
                          Rs 0
                        </h4>
                      </td>
                    </tr>

                    <tr>
                      <td className="cart_total_label">
                        <h6 className="text-muted">Total</h6>
                      </td>
                      <td className="cart_total_amount">
                        <input id="get-total" type="hidden" value="11950" />
                        <h4 id="set-total" className="text-brand text-end">
                          Rs {calculateTotal()}
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a href="#" className="btn mb-20 w-100 btnValidateCheckout">
                Proceed To CheckOut<i className="fi-rs-sign-out ml-15"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal  custom-modal iqbal"
        style={{
          display: `${open === true ? "block" : "none"}`,
          backgroundColor: "rgba(0, 0, 0,0.2)",
        }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              onClick={handleAddModalClick}
            ></button>
            <div className="modal-body">
              <div
                className="deal"
                style={{
                  backgroundImage: "url('assets/imgs/banner/popup-1.png')",
                }}
              >
                <div className="deal-top">
                  <h4 className="mb-10 text-brand-2">Add Address</h4>
                </div>
                <div>
                  <div className="card-body">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label>
                          Contact Person <span className="required">*</span>
                        </label>
                        <input
                          required=""
                          className="form-control"
                          name="contact_person"
                          id="contact_person"
                          type="text"
                          value={formData.contactname}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>
                          Contact No <span className="required">*</span>
                        </label>
                        <input
                          required=""
                          className="form-control"
                          name="phone"
                          id="phone"
                          type="text"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          required=""
                          className="form-control"
                          name="email"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="form-group col-md-6">
                        <label>
                          City<span className="required">*</span>
                        </label>
                        <select
                          className="form-control"
                          name="city"
                          id="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        >
                          <option value="" disabled>
                            Select a city
                          </option>

                          {locatCities.map((pakCity, index) => (
                            <option key={index} value={pakCity.intID}>
                              {pakCity.strDesc}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          required=""
                          className="form-control"
                          name="address"
                          id="address"
                          type="text"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <button
                          id="address-btn"
                          type="button"
                          className="btn btn-fill-out submit font-weight-bold btnAddAddress"
                          name="submit"
                          value="Submit"
                          onClick={handleButtonClick}
                        >
                          Add Address
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
    </>
  );
};
