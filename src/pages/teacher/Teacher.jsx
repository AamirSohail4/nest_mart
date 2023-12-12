import { useEffect, useState } from "react";
import { teacher_url } from "../../config/env";
import { Link } from "react-router-dom";
Link;
export const Teacher = () => {
  const [allTeacher, setAllTeacher] = useState();
  const [teacherDetail, setteacherDetail] = useState();
  useEffect(() => {
    async function AllTeacher() {
      const response = await fetch(`${teacher_url}
      &tag=get_teacher_detail`);
      const teacherData = await response.json();
      setAllTeacher(teacherData.data.teacher_detail);
      setteacherDetail(teacherData.data.teacher);
    }
    AllTeacher();
  }, []);
  console.log("This is teacher Detail Array=>", teacherDetail);
  console.log("This Teacher array=>", allTeacher);
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
        <div className="container mb-30" style={{ transform: "none" }}>
          <div className="row" style={{ transform: "none" }}>
            <div className="col-lg-5-5">
              <div className="row product-grid">
                {teacherDetail?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="col-lg-1-5 col-md-4 col-12 col-sm-6"
                      id="teacherCard"
                    >
                      <Link
                        to={`/teacher-detail/${item.strDesc}`}
                        className="product-cart-wrap mb-30"
                      >
                        <div className="product-img-action-wrap">
                          <div className="product-img product-img-zoom">
                            <Link to={`/teacher-detail/${item.strDesc}`}>
                              <img src={item.strProfilePicture} />
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
                            <Link to={`/teacher-detail/${item.strDesc}`}>
                              {item.strDesc}
                            </Link>
                          </h2>

                          <div>
                            <span className="font-small text-muted"></span>
                          </div>
                        </div>
                      </Link>
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
