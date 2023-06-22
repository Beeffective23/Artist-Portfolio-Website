import React from "react";
import { decorImgs } from "../../helpers";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ButtonHome from "../ButtonHome";
function DecorPaintings() {
  const myRef = useRef([]);
  const pushEl = (el) => myRef.current.push(el);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].target.classList.toggle("show", entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.3 }
    );

    myRef.current.forEach((ref) => {
      observer.observe(ref);
    });
  }, []);

  return (
    <div className="container allImgs">
      <div ref={pushEl} className="container decorImgCont">
        <img className="decorImg" src={decorImgs[0]} alt="" />
      </div>
      <div ref={pushEl} className="container decorImgCont">
        <img className="decorImg" src={decorImgs[1]} alt="" />
      </div>
      <div ref={pushEl} className="container decorImgCont">
        <img className="decorImg" src={decorImgs[2]} alt="" />
      </div>
      <div ref={pushEl} className="container decorImgCont">
        <img className="decorImg" src={decorImgs[3]} alt="" />
      </div>
      <div ref={pushEl} className="container decorImgCont">
        <img className="decorImg" src={decorImgs[4]} alt="" />
      </div>
      <div className="container morePaintCont">
        <Link onClick={handleClick} to="/PAINTINGS">
          <ButtonHome name="See paintings" />
        </Link>
      </div>
    </div>
  );
}

export default DecorPaintings;
