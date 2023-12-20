import he from "he";
import { useState } from "react";
import img1 from "../assets/imgs/banner/banner-9.png";
import { useEffect } from "react";
import { bannerText_url } from "../config/env";
export const NewsLetterForm = () => {
  const [contentBanner, setContentBanner] = useState();

  useEffect(() => {
    async function TextDisplay() {
      const response = await fetch(
        `${bannerText_url}&tag=get_webtext_content&intID=15`
      );
      const bannerData = await response.json();
      // console.log("mydata====>", bannerData);
      setContentBanner(bannerData.data[0].strText);
    }
    TextDisplay();
  }, []);
  // console.log("-This is Banner WebTex-===>", myWebText);
  const bannerText = contentBanner;
  // const htmlContent = he.decode(bannerText);

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
                      __html: bannerText,
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
