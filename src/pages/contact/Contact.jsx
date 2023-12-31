import { useContext } from "react";
import { Link } from "react-router-dom";
import { AddressContext } from "../../context/AddresContext";

export const Contact = () => {
  const { address } = useContext(AddressContext);
  console.log("bbbbbbb", address);
  return (
    <>
      <main className="main">
        <div className="page-header breadcrumb-wrap">
          <div className="container">
            <div className="breadcrumb">
              <a href="/" rel="nofollow">
                <i className="fi-rs-home mr-5"></i>Home
              </a>
              <span></span> Contact
            </div>
          </div>
        </div>
        <div className="page-content pt-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <section className="mb-50">
                  <div className="row mb-60">
                    <p className="col-md-4"></p>
                    <h4 className="mb-15 text-brand">Office</h4>
                    <li>
                      <strong>Address: </strong>{" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: address,
                        }}
                      />
                    </li>

                    <div style={{ display: "flex" }}>
                      <div style={{ paddingRight: "20px" }}>
                        <h6 style={{ color: "#7E7E7E" }}>Follow Us:</h6>
                      </div>
                      <div className="mobile-social-icon">
                        <Link to="https://www.instagram.com/msbooks.pk">
                          <img
                            src="https://weberp.pk/app/msbooks/images/web_imageslist/42/icon-instagram-white.svg"
                            alt=""
                          />
                        </Link>
                        <Link to="https://facebook.com/msbooks.pk">
                          <img
                            src="https://www.weberp.pk/app/msbooks/images/web_imageslist/41/icon-facebook-white.svg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
