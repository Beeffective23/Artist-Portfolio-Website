import { useContext } from "react";
import { AuthContext } from "../../Shop-Context";
import { imgInfo } from "../../helpers";
import { Link } from "react-router-dom";
function Store() {
  const val = useContext(AuthContext);

  let posters = imgInfo.map((post, index) => {
    return (
      <div className="col-sm-auto m-4 shadow-lg" key={index}>
        <Link to="/SALE">
          <img
            onClick={handleClick}
            className={`posterImg ${index} img-fluid`}
            src={post.imgSrc}
            alt=""
          />
        </Link>

        <div className="container posterInfo">
          <div className="row">
            <div className="col">
              <p className="posterDescription">{post.title}</p>
            </div>
            <div className="col">
              <p className="price">${post.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  function handleClick(e) {
    val.setInfo(Number(e.target.classList[1]));
  }

  return (
    <div className="container">
      <div className="container mb-5">
        <div className="row d-flex justify-content-center text-center StoreRow">
          {posters}
        </div>
      </div>
    </div>
  );
}

export default Store;
