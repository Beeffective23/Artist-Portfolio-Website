import React from "react";
import { useState, useContext } from "react";
import Carousel from "./Pages/Carousel";
import { AuthContext } from "../Shop-Context";
import Footer from "./Pages/Footer";
function Pictures(props) {
  const [showCarousel, setShowCarousel] = useState(false);
  let paintGener = [];
  const val = useContext(AuthContext);

  function handleClick(e) {
    val.setInfo(Number(e.target.classList[1]));
    setShowCarousel(true);
  }

  paintGener = props.imgInfo.map((imgInf) => {
    return (
      <div
        className={`col-md-4 col-12 painting d-flex justify-content-center image${imgInf.id} mb-5 mt-3 position-relative `}
        key={imgInf.id}
      >
        <div
          className={`filterTitlePrice position-absolute bg-white w-100 h-100  ${imgInf.id}`}
        >
          <h3
            className={`mb-5 ${imgInf.id} filterTitle position-relative top-50`}
            onClick={handleClick}
          >
            {imgInf.title}
          </h3>
        </div>
        <img className={`painting1 w-100 ps-3`} src={imgInf.imgSrc} alt="" />
      </div>
    );
  });

  return (
    <div className="Pictures">
      <div className="container">
        <div className="row paintRow d-flex justify-content-center">
          {showCarousel == false ? (
            <>
              <div className="container">
                <div className="row">
                  <h2 className="paintings">PAINTINGS</h2>
                </div>
              </div>
              {paintGener}
              <Footer />
            </>
          ) : (
            <Carousel
              imgInfo={props.imgInfo[val.info].imgSrc}
              setShowCarousel={setShowCarousel}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Pictures;
