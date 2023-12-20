export const ModelView = () => {
  return (
    <>
      <h3>Model View</h3>
      <div
        className="modal fade custom-modal"
        id="modalAddress"
        tabIndex="-1"
        aria-labelledby="onloadModalLabel"
        style={{
          display: "none",
          backgroundColor: "rgb(255, 255, 255)",
          ariaHidden: "true",
        }}
      >
        <div
          className="modal-dialog"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div
            className="modal-content"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              My Button
            </button>
            <div
              className="modal-body"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              <div
                className="deal"
                style={{
                  backgroundImage: 'url("assets/imgs/banner/popup-1.png")',
                  backgroundColor: "rgb(255, 255, 255)",
                }}
              >
                <div className="deal-top">
                  <h4 className="mb-10 text-brand-2">Add Address</h4>
                </div>
                <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                  <div
                    className="card-body"
                    style={{ backgroundColor: "rgb(255, 255, 255)" }}
                  >
                    <div
                      className="row"
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
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
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>
                          City<span className="required">*</span>
                        </label>

                        <select
                          className="form-control"
                          name="city"
                          id="getcityid"
                        >
                          <option>Lodhran</option>
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
                        />
                      </div>

                      <div
                        className="col-md-12"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      >
                        <button
                          id="address-btn"
                          type="button"
                          className="btn btn-fill-out submit font-weight-bold btnAddAddress"
                          name="submit"
                          value="Submit"
                          disabled="disabled"
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
