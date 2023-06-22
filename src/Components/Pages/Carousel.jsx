import leftArrow from "/Users/petertsekov/Desktop/Projects/Test2/my-app/src/Pictures/left-arrow.png";
import rightArrow from "/Users/petertsekov/Desktop/Projects/Test2/my-app/src/Pictures/right-arrow.png";
import { useContext } from "react";
import { AuthContext } from "../../Shop-Context";
function Carousel({ imgInfo, setShowCarousel }) {
  const val = useContext(AuthContext);
  function next() {
    if (val.info <= 7) {
      val.setInfo(val.info + 1);
    } else {
      val.setInfo(0);
    }
  }

  function previous() {
    if (val.info > 0) {
      val.setInfo(val.info - 1);
    } else {
      val.setInfo(8);
    }
  }
  function hideCarousel() {
    setShowCarousel(false);
  }
  return (
    <div className="carousel position-absolute top-0 bottom-0 z-3">
      <a className="closeCarousel float-end" onClick={hideCarousel}>
        X
      </a>
      <div className="carosCont">
        <img
          className="prevButton img-fluid p-0"
          src={leftArrow}
          alt="left Arrow"
          onClick={previous}
        />
        <img
          className="nextButton img-fluid p-0 float-end"
          src={rightArrow}
          alt="right Arrow"
          onClick={next}
        />
        <div className="container-fluid d-flex justify-content-center carosCont">
          <div className="row justify-content-center">
            <div className="col-9 col-sm-8 col-md-6 col-lg-6 col-xl-6 col-xxl-5">
              <img className="imgCarousel  img-fluid" src={imgInfo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
