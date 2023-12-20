import { useState } from "react";

import { register_url } from "../../config/env";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userPhone, setUserPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(userPhone);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (userPhone.length === 12) {
      try {
        // Create a new FormData object
        const formData = new FormData();

        // Append key-value pairs to the FormData object
        formData.append("strUserName", userPhone);
        formData.append("intDeviceType", "2");
        formData.append("strPlatform", "iOS version 12");

        // Make an API request using Fetch
        const response = await fetch(register_url, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("API Response:", responseData);

          navigate("/verify", { state: { userPhone } });
          setUserPhone("");
          setErrorMessage("");
        } else {
          console.error("API Error:", response.status, response.statusText);
          const errorData = await response.json().catch(() => null);
          console.error(
            "Error Details:",
            errorData || "No error details available"
          );
          // Handle API error if needed
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        // Handle fetch error if needed
      }
    } else {
      setErrorMessage("Please enter a valid 112-digit phone number.");
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (!isNaN(value)) {
      setUserPhone(value);

      if (value.length === 12) {
        setErrorMessage("");
      }
    } else {
      setErrorMessage("Please enter numeric digits only.");
    }
  };

  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="https://www.msbooks.pk" rel="nofollow">
              <i className="fi-rs-home mr-5"></i>Home
            </a>
            <span></span> Login
          </div>
        </div>
      </div>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
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
                        <h1 className="mb-5">Login</h1>
                      </div>
                      <form
                        id="userphone_frm"
                        action="/verify"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="user_phone"
                            placeholder="923000000000 *"
                            id="user_phone"
                            value={userPhone}
                            onChange={handleInputChange}
                          />
                        </div>
                        {errorMessage && (
                          <p style={{ color: "red" }}>{errorMessage}</p>
                        )}
                        <div className="form-group">
                          <button
                            type="submit"
                            id="login-btn"
                            className="btn btn-heading btn-block hover-up btnLogin"
                          >
                            Log in
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
    </>
  );
};
