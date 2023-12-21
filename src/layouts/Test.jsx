import img10 from "../assets/imgs/theme/msbooks_logo.png";

import { Link } from "react-router-dom";
import { cart_url } from "../config/env";
import { useEffect, useState } from "react";
export const Test = () => {
  const [showManu, setShowManau] = useState();

  async function ManuDisplay() {
    const response = await fetch(
      `${cart_url}&tag=get_all_category&intCompanyID=1`
    );
    const paymentMode = await response.json();
    // console.log("all cart item api respo", bannerData);
    const responseData = paymentMode.data;
    setShowManau(responseData);
  }
  console.log("show Manu Categories===", showManu);
  useEffect(() => {
    ManuDisplay();
  }, []);
  return (
    <div className={`header-bottom header-bottom-bg-color sticky-bar`}>
      <div className="container">
        <div className="header-wrap header-space-between position-relative">
          <div className="logo logo-width-1 d-block d-lg-none">
            <Link to="index.html">
              <img src={img10} alt="logo" />
            </Link>
          </div>
          <div className="header-nav d-none d-lg-flex">
            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
              <nav>
                <ul>
                  {showManu
                    ?.filter(
                      (item) =>
                        item.intParentID === "0" && item.intLevel === "1"
                    )
                    .map((item, index) => (
                      <li key={index}>
                        {item.strDesc}
                        <ul>
                          {showManu
                            ?.filter(
                              (subItem) =>
                                subItem.intParentID === item.intID &&
                                subItem.intLevel === "2"
                            )
                            .map((subItem, subIndex) => (
                              <li key={subIndex}>
                                {subItem.strDesc}
                                <ul>
                                  {showManu
                                    ?.filter(
                                      (thirdItem) =>
                                        thirdItem.intParentID ===
                                          subItem.intID &&
                                        thirdItem.intLevel === "3"
                                    )
                                    .map((thirdItem, thirdIndex) => (
                                      <li key={thirdIndex}>
                                        {thirdItem.strDesc}
                                      </li>
                                    ))}
                                </ul>
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
                <ul>
                  <li>
                    <Link to="/teacher">
                      Teacher <i className="fi-rs-angle-down"></i>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="#">
                          Single Post <i className="fi-rs-angle-right"></i>
                        </Link>
                        <ul className="level-menu level-menu-modify">
                          <li>
                            <Link to="blog-post-left.html">Left Sidebar</Link>
                          </li>
                          <li>
                            <Link to="blog-post-right.html">Right Sidebar</Link>
                          </li>
                          <li>
                            <Link to="blog-post-fullwidth.html">
                              No Sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
