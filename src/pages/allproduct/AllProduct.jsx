import { useState, useEffect } from "react";
// import './allproduct.css';
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const AllProduct = () => {
  const [mybook, setMybook] = useState([]);
  const api_url =
    "https://www.weberp.pk/app/msbooks/weberp_api.php?mask=msbooks&tag=get_items_web&intCompanyID=1&strCategorySEOLink=o-level-unsolved-yearly-five-years";
  useEffect(() => {
    async function Books() {
      const response = await fetch(api_url);
      const mybooks = await response.json();
      setMybook(mybooks.data);
      // console.log(mybooks);
    }
    Books();
  }, []);
  return (
    <div className="singleProduct-container">
      <div className="left-side"></div>
      <div className="singleProduct-innerside">
        {mybook?.map((item) => {
          // console.log(item);
          return (
            <Link
              to={`/singleproduct/${item.intID}`}
              key={item.intID}
              className="product-cart"
            >
              <div className="product-img">
                <img src={item.strImageThumbnail} alt="books" />
              </div>
              <div className="product-content">
                <div className="item-category">
                  <Link to="" className="link-item">
                    {item.strItemCategory}
                  </Link>
                </div>
                <h2 className="item-title">
                  <Link to="" className="link-item">
                    {item.strTags}
                  </Link>
                </h2>
                <span className="vendour-details">
                  By:
                  <Link to="link-item">Vender</Link>
                </span>
                <div className="product-card-bottom">
                  <div className="product-price">
                    <span>$28.85</span>
                    <span className="old-price">$32.8</span>
                  </div>
                  <div className="add-cart">
                    <Link to="" className="add">
                      <Icon icon="material-symbols-light:shopping-cart-outline" />
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="right-side"></div>
    </div>
  );
};
