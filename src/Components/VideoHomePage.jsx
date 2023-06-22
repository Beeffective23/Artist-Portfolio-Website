import { Link } from "react-router-dom";
import ButtonHome from "./ButtonHome";
function Videos() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container videoCont">
      <div className="container">
        <iframe
          className="w-100 videoHomePlayer"
          src="https://www.youtube.com/embed/a7krTnIygdw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="container d-flex justify-content-center mt-5">
        <Link
          onClick={handleClick}
          className="moreVidLink"
          to="/VIDEOS"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <ButtonHome name="More videos" />
        </Link>
      </div>
    </div>
  );
}

export default Videos;
