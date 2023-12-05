import { Link, useParams } from "react-router-dom";
import "./singleproduct.css";
import { useEffect, useState } from "react";

export const SingleProduct = () => {
  const { id } = useParams();
  // console.log(id);

  const [mybook, setMybook] = useState([]);

  useEffect(() => {
    async function Books() {
      console.log(id);
      const response = await fetch(
        `https://www.weberp.pk/app/msbooks/weberp_api.php?mask=msbooks&tag=get_items_web&intCompanyID=1&strCategorySEOLink=o-level-unsolved-yearly-five-years&intID=${id}`
      );
      const mybooks = await response.json();
      setMybook(mybooks.data);
      console.log(mybooks);
    }
    Books(id);
  }, [id]);

  return (
    <div className="singleProduct-container">
      <div className="left-side"></div>
      <div className="singleProduct-innerside">
        {mybook?.map((item) => {
          console.log(item);
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
                <p>{item.strItemCategory}</p>
                <h3 className="tittle">{item.strTags}</h3>

                <div className="botoom-content">
                  <h4 className="price">{item.dblSalePrice}:</h4>
                  <button className="adtobtn" type="submit">
                    AddToCart
                  </button>
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
