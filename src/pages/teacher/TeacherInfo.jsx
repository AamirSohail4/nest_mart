import { Link } from "react-router-dom";

export const TeacherInfo = () => {
  return (
    <>
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
              <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                <div className="product-cart-wrap mb-30">
                  <div className="product-img-action-wrap">
                    <div className="product-img product-img-zoom">
                      <Link to="https://www.msbooks.pk/teacher/aamir-mustafa">
                        <img
                          className="default-img"
                          src=" https://weberp.pk/app/msbooks/images/supplier/46/amir-mustafa.png "
                          alt=""
                        />
                        <img
                          className="hover-img"
                          src=" https://weberp.pk/app/msbooks/images/supplier/46/amir-mustafa.png "
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="product-content-wrap">
                    <h2>
                      <Link to="https://www.msbooks.pk/teacher/aamir-mustafa">
                        Aamir Mustafa
                      </Link>
                    </h2>
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
