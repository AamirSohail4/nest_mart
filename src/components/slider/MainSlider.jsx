
import Slider from "react-slick";
export const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
     <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px",background:"green"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
          <div>
            <div className="box"style={{color:"red",height:"100px", width:"200px"}}>
              <h3>This is a slider</h3>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}
