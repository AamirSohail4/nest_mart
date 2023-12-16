import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { teacher_url } from "../../config/env";

export const Teacher = () => {
  const [allTeacher, setAllTeacher] = useState();

  useEffect(() => {
    async function AllTeacher() {
      const response = await fetch(`${teacher_url}&tag=get_teachers_web`);
      const teacherData = await response.json();
      setAllTeacher(teacherData.data);
    }
    AllTeacher();
  }, []);

  return (
    <>
      <main className="main" style={{ transform: "none" }}>
        <div className="page-header mt-30 mb-50">
          <div className="container">
            <div className="archive-header">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <h1 className="mb-15">All Teacher</h1>
                  <div className="breadcrumb">
                    <Link to="/" rel="nofollow">
                      <i className="fi-rs-home mr-5"></i>Home
                    </Link>
                    <span></span> Teacher <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-30">
          <div className="row flex-row-reverse">
            <div className="col-lg-4-5">
              <div className="shop-product-fillter">
                <div className="totall-product">
                  <p>
                    We found <strong className="text-brand">25</strong> teachers
                    for you!
                  </p>
                </div>
              </div>
              <div className="row product-grid">
                {allTeacher?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                    >
                      <div className="product-cart-wrap mb-30">
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link
                              to={`/teacher-detail/${item.strSEOLink}/${item.intID}`}
                            >
                              <img
                                className="default-img"
                                src={item.strProfilePicture}
                                alt=""
                              />
                              <img
                                className="hover-img"
                                src={item.strProfilePicture}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="product-content-wrap">
                          <h2>
                            <Link
                              to={`/teacher-detail/${item.strSEOLink}/${item.intID}`}
                            >
                              {item.strDesc}
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
