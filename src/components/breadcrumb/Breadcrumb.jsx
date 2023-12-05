import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./breadcrumb.css";
export const Breadcrumb = () => {
  return (
    <>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link to="index.html" rel="nofollow">
              <Icon icon="mynaui:home" />
              Home
            </Link>
            <span></span>
            <Link to="shop-grid-right.html">Vegetables &amp; tubers</Link>
            <span></span> Seeds of Change Organic
          </div>
        </div>
      </div>
    </>
  );
};
