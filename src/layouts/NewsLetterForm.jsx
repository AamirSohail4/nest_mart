import img1 from "../assets/imgs/banner/banner-9.png";

export const NewsLetterForm = () => {
  // const [webText, setWebText] = useState();
  // const [bannerText, setbannerText] = useState();

  // useEffect(() => {
  //   async function TextDisplay() {
  //     const response = await fetch(
  //       `${bannerText_url}&tag=get_webtext_content&intID=15`
  //     );
  //     const teacherData = await response.json();
  //     // console.log("MyDat======>", teacherData);
  //     setWebText(teacherData.data[0].strText);
  //     setbannerText(teacherData.data[0].strText);
  //   }
  //   TextDisplay();
  // }, []);
  // console.log("-This is Banner WebTex-===>", webText);
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
                  <h2 className="mb-20">
                    Stay home &amp; get your daily <br></br>
                    needs from our shop
                  </h2>
                  <p className="mb-45">
                    Start Your Daily Shopping with{" "}
                    <span className="text-brand">MSBOOKS</span>
                  </p>
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
