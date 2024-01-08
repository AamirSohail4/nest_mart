import { useContext, useEffect, useState } from "react";
import img1 from "../assets/imgs/banner/banner-9.png";
import { api_url } from "../config/env";
import { MyAccountContext } from "../context/AccountContext";

export const NewsLetterProduct = () => {
  const { catParentId } = useContext(MyAccountContext);
  const [newsData, setNewsData] = useState();
  const NewsLetterDisplay = async () => {
    const response = await fetch(
      `${api_url}&tag=get_category_web&intParentID=${catParentId}`
    );
    const newsdata = await response.json();
    console.log(newsData);
    setNewsData(newsdata?.data[0]?.strRemarks);
  };
  console.log("This is Response", newsData);
  useEffect(() => {
    NewsLetterDisplay();
  }, []);
  return (
    <>
      <section
        className="newsletter mb-15 wow animate__ animate__fadeIn animated"
        style={{
          visibility: "visible",
          animationDelay: "0.4s",
          animationName: "fadeIn",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-relative newsletter-inner">
                <div className="newsletter-content">
                  <div
                    style={{ color: "white" }}
                    dangerouslySetInnerHTML={{
                      __html: newsData,
                    }}
                  />
                </div>
                <img src={img1} alt="newsletter" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
