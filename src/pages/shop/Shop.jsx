import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { teacher_url } from "../../config/env";
import img1 from "../../assets/imgs/banner/dummy-shop.png";
import { Modal, Button } from "react-bootstrap";

export const Shop = () => {
  const [allbookShops, setAllBookShop] = useState();
  const [openShopIndex, setOpenShopIndex] = useState(null);
  const [modalData, setModalData] = useState({});

  const handleShowModal = (index) => {
    setModalData(allbookShops[index]);
    setOpenShopIndex(index);
  };

  const handleCloseModal = () => {
    setOpenShopIndex(null);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${teacher_url}&tag=get_shops`);
      const shopData = await response.json();
      setAllBookShop(shopData.data);
    } catch (error) {
      console.error("Error fetching shop data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
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

      <div
        className="container-fluid mb-30"
        style={{ backgroundColor: "rgb(255, 255, 255)" }}
      >
        <div
          className="row flex-row-reverse"
          style={{ backgroundColor: "rgb(255, 255, 255)" }}
        >
          <div
            className="col-lg-4-5"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
          >
            <div
              className="row product-grid"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            >
              {allbookShops?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-1-6 col-md-4 col-12 col-sm-6"
                    style={{ backgroundColor: "rgb(255, 255, 255)" }}
                  >
                    <div
                      className="product-cart-wrap mb-30"
                      style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
                      <div
                        className="product-img-action-wrap"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      >
                        <div
                          className="product-img product-img-zoom"
                          style={{ backgroundColor: "rgb(255, 255, 255)" }}
                        >
                          <Link>
                            <button
                              style={{ border: "none", background: "none" }}
                            >
                              <img className="default-img" src={img1} alt="" />
                              <img className="hover-img" src={img1} alt="" />
                            </button>
                          </Link>
                        </div>
                      </div>
                      <div
                        className="product-content-wrap"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                      >
                        <div className="product-category">
                          <Link>{item.strCity}</Link>
                        </div>
                        <h2>
                          <Link>
                            <button
                              style={{ border: "none", background: "none" }}
                            >
                              {item.strDesc}
                            </button>
                          </Link>
                        </h2>
                        <button
                          className="btn w-100 hover-up"
                          onClick={() => handleShowModal(index)}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal */}
      <Modal show={openShopIndex !== null} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.strDesc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contact Person: {modalData.strContactPerson}</p>
          <p>Phone: {modalData.strCell}</p>
          <p>Address: {modalData.strAddress}</p>
          <p>City: {modalData.strCity}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};
