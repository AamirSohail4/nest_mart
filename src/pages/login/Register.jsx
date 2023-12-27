import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../../config/env";
import { singUp_url } from "../../config/env";

export const Register = () => {
  const userId = localStorage.getItem("userId");
  const roleId = localStorage.getItem("roleId");

  const [locatCities, setCities] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    altPhone: "",
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
    data.append("intUserID", userId);
    data.append("strFullName", formData.firstName + " " + formData.lastName);
    data.append("intRoleID", roleId);
    data.append("strEmail", formData.email);
    data.append("strAddress", formData.address);
    data.append("intCityID", formData.city);
    data.append("strAlternateContactNo", formData.altPhone);
    const response = await fetch(`${singUp_url}&tag=update_user_profile`, {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      navigate("/");
      resetForm();
    }
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

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      altPhone: "",
      address: "",
      city: "",
    });
  };

  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="https://www.msbooks.pk" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Signup
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
            <div className="row">
              <div
                className="col-lg-6 pr-30 d-none d-lg-block"
                style={{ padding: "100px" }}
              >
                <img
                  className="border-radius-15"
                  src="https://www.weberp.pk/app/msbooks/images/web_imageslist/43/MS-Books-Official-Logo-Square.svg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-8">
                <div className="login_wrap widget-taber-content background-white">
                  <div className="padding_eight_all bg-white">
                    <div className="heading_s1">
                      <h1 className="mb-5">Student Account</h1>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input
                          name="firstName"
                          required=""
                          className="form-control"
                          placeholder="Enter First Name"
                          type="text"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          name="lastName"
                          required=""
                          className="form-control"
                          placeholder="Enter Last Name"
                          type="text"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input
                          name="email"
                          required=""
                          className="form-control"
                          placeholder="Enter Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>
                          Phone Number <span className="required">*</span>
                        </label>
                        <input
                          name="altPhone"
                          required=""
                          className="form-control"
                          placeholder="Enter Phone Number"
                          type="number"
                          value={formData.altPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          name="address"
                          required=""
                          className="form-control"
                          placeholder="Enter First Name"
                          type="text"
                          value={formData.address}
                          onChange={handleInputChange}
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
                          value={formData.city}
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
                      </div>
                      <div className="form-group col-md-12">
                        <button
                          id="submit-form-btn"
                          type="button"
                          className="btn btn-fill-out submit font-weight-bold btnsignup"
                          name="submit"
                          value="Submit"
                          onClick={handleButtonClick}
                        >
                          Create Account
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
