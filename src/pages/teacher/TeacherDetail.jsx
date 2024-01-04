/* eslint-disable react-hooks/exhaustive-deps */
import he from "he";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { teacher_url } from "../../config/env";
import { api_url } from "../../config/env";
import { CartContext } from "../../context/CartContext";
import { WishListContext } from "../../context/WishListContext";
import { MyAccountContext } from "../../context/AccountContext";

export const TeacherDetail = () => {
  const { userId } = useContext(MyAccountContext);
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  const { strSEOLink } = useParams();
  const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const [teacherDetail, setTeacherDetail] = useState([]);
  const [publicationData, setPulicationData] = useState([]);
  const [selectedProductDesc, setSelectedProductDesc] = useState("");

  const [strSpec, setStrSpec] = useState("");

  const handleHeartClick = (itemId) => {
    if (userId !== null) {
      addToWishList(itemId);
    } else {
      alert("please first Login");
    }
  };

  const handleAddToCart = (productId, quantity, productDesc) => {
    if (userId !== null) {
      addToCart(productId, quantity);
      setSelectedProductDesc(productDesc);
      setTimeout(() => {
        setSelectedProductDesc("");
      }, 4000);
    } else {
      alert("please first Login");
      history && history.push("login");
    }
  };
  async function ShowPublication() {
    const response = await fetch(
      `${api_url}&tag=get_items_web& intSupplierID=${id}`
    );
    const respData = await response.json();

    setPulicationData(respData.data);
  }

  useEffect(() => {
    async function TeacherDetails() {
      const response = await fetch(
        `${teacher_url}&tag=get_teacher_detail&strSEOLink=${strSEOLink}`
      );
      const teacherData = await response.json();
      setStrSpec(teacherData.data.teacher[0].strProfile);
      const teacher_detail = [];
      const classes = [];
      const subjects = [];
      const institute = [];

      teacherData.data.teacher_detail.forEach((detail) => {
        if (detail.strType === "Class") {
          classes.push(detail.strDesc);
        } else if (detail.strType === "Subject") {
          subjects.push(detail.strDesc);
        } else if (detail.strType === "Institute") {
          institute.push(detail.strDesc);
        }
      });
      teacher_detail.push({ title: "Class", child: classes });
      teacher_detail.push({ title: "Institute", child: institute });
      teacher_detail.push({ title: "Subject Expertise", child: subjects });
      setTeacher(teacherData.data.teacher[0]);
      setTeacherDetail(teacher_detail);
    }
    TeacherDetails();
    ShowPublication();
  }, []);

  const htmlContent = he.decode(strSpec);

  return (
    <>
      <div className="container mb-30">
        <div
          className="archive-header-3 mt-30 mb-80"
          style={{ background: "#4fa0cf" }}
        >
          <div className="archive-header-3-inner">
            <div className="vendor-logo mr-50">
              <img src={teacher.strProfilePicture} alt="" />
            </div>
            <div className="vendor-content text-white">
              <h3 className="mb-5">
                <Link to="#" className="text-white">
                  {teacher.strDesc}
                </Link>
              </h3>
              <div className="change-to-white">
                <div
                  style={{ color: "white" }}
                  dangerouslySetInnerHTML={{
                    __html: htmlContent,
                  }}
                />
              </div>
              <hr />
              <div className="row">
                {teacherDetail?.map((item, index) => {
                  return (
                    <div
                      className="col-lg-3"
                      style={{ width: "500px" }}
                      key={index}
                    >
                      <div className="vendor-info text-white mb-15">
                        <h3 className="mb-5 text-white">
                          <Link to="#" className="text-white">
                            {item.title}
                          </Link>
                        </h3>
                        <ul className="font-sm mb-10">
                          {item.child?.map((subItem, index) => {
                            return (
                              <li key={index}>
                                <img className="mr-5" src="" alt="" />
                                <strong>{subItem}</strong>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <section className="product-tabs section-padding position-relative">
          <div className="container">
            <div
              className="section-title style-2 wow animate__ animate__fadeIn animated"
              style={{ visibility: "visible", animationName: "fadeIn" }}
            >
              <h3>Publication by {teacher.strDesc} </h3>
            </div>

            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="tab-one"
                role="tabpanel"
                aria-labelledby="tab-one"
              >
                <div className="row product-grid-4">
                  {Array.isArray(publicationData) ? (
                    publicationData.map((item, index) => (
                      <div
                        key={index}
                        className="col-lg-1-5 col-md-4 col-12 col-sm-6 "
                      >
                        <div
                          className="product-cart-wrap mb-30 wow animate__ animate__fadeIn animated"
                          data-wow-delay=".1s"
                          style={{
                            visibility: " visible",
                            animationDelay: "0.1s",
                            animationName: "fadeIn",
                          }}
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link to={`/product/${item?.strSEOLink}`}>
                                <img
                                  className="default-img"
                                  src={item?.strImageThumbnail}
                                  alt=""
                                />
                                <img
                                  className="hover-img"
                                  src={item?.strImageThumbnail}
                                  alt=""
                                />
                              </Link>
                            </div>
                            <div className="product-action-1">
                              <Link
                                aria-label="Add To Wishlist"
                                className="action-btn"
                                onClick={() => handleHeartClick(item.intID)}
                              >
                                <i className="fi-rs-heart"></i>
                              </Link>
                              <Link
                                to={`/product/${item.strSEOLink}`}
                                aria-label="Quick view"
                                className="action-btn"
                              >
                                <i className="fi-rs-eye"></i>
                              </Link>
                            </div>
                          </div>
                          <div className="product-content-wrap">
                            <div className="product-category">
                              <Link to="#">{item?.strItemCategory}</Link>
                            </div>
                            <h2>
                              <Link to="">{item?.strDesc}</Link>
                            </h2>
                            <div className="product-card-bottom">
                              <div className="product-price">
                                <span>Rs. {item?.dblSalePrice}</span>
                              </div>
                              <div className="contact-info">
                                <div className="social-info">
                                  <h4>{selectedProductDesc}</h4>
                                </div>
                              </div>
                              <div className="add-cart">
                                <button
                                  id="feature-prod-btn1500"
                                  type="button"
                                  className="btn btn-heading add_in_cart"
                                  onClick={() =>
                                    handleAddToCart(item.intID, 1, item.strDesc)
                                  }
                                >
                                  <i className="fi-rs-shopping-cart mr-5"></i>
                                  Add
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Publication data is not an array.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
