import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [userId, setUserId] = useState(''); // Assuming userId is defined somewhere in your component
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  });

  const [formErrors, setFormErrors] = useState({});

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleButtonClick = async () => {
    const errors = {};

    // Validate name field
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    // Validate phone field
    if (!/^\d{12}$/.test(formData.phone)) {
      errors.phone = 'Phone must be 12 digits';
    }

    // Validate email field
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    // Validate city field
    if (!formData.city) {
      errors.city = 'City is required';
    }

    // Validate address field
    if (!formData.address.trim()) {
      errors.address = 'Address is required';
    }

    if (Object.keys(errors).length > 0) {
      // If there are errors, update the state and prevent form submission
      setFormErrors(errors);
      return;
    }

    // If there are no errors, proceed with the form submission logic
    let data = new FormData();
    data.append("intUserID", userId);
    data.append("strShipmentContactPerson", formData.name);
    data.append("strShipmentPhone", formData.phone);
    data.append("strShipmentEmail", formData.email);
    data.append("intShipmentCityID", formData.city);
    data.append("strShipmentAddress", formData.address);

    const response = await fetch(`${cart_url}&tag=add_user_shipment_address`, {
      method: "POST",
      body: data,
    });

    if (response.ok) {
      alert("Shipment Address is updated");
      // Additional logic if needed
    }
    
    // Reset the form after submission
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
    });

    setFormErrors({});
  };

  return (
    <div className="row">
      <div className="form-group col-md-6">
        <label>Contact Person <span className="required">*</span></label>
        <input
          required=""
          className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
      </div>

      <div className="form-group col-md-6">
        <label>Contact No <span className="required">*</span></label>
        <input
          required=""
          className={`form-control ${formErrors.phone ? 'is-invalid' : ''}`}
          name="phone"
          id="phone"
          type="text"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
      </div>

      <div className="form-group col-md-6">
        <label>Email Address <span className="required">*</span></label>
        <input
          required=""
          className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
      </div>

      <div className="form-group col-md-6">
        <label>City<span className="required">*</span></label>
        <select
          className={`form-control ${formErrors.city ? 'is-invalid' : ''}`}
          name="city"
          id="city"
          value={formData.city}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select a city</option>
          {cities.map((pakCity, index) => (
            <option key={index} value={pakCity.intID}>{pakCity.strDesc}</option>
          ))}
        </select>
        {formErrors.city && <div className="invalid-feedback">{formErrors.city}</div>}
      </div>

      <div className="form-group col-md-12">
        <label>Address <span className="required">*</span></label>
        <input
          required=""
          className={`form-control ${formErrors.address ? 'is-invalid' : ''}`}
          name="address"
          id="address"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
        />
        {formErrors.address && <div className="invalid-feedback">{formErrors.address}</div>}
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
  );
};

export default YourComponent;
