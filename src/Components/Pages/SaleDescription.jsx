import { imgInfo } from "../../helpers";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Shop-Context";
import { Link } from "react-router-dom";
function SaleDescr({ checkProducts, setCheckProducts }) {
  const val = useContext(AuthContext);
  const [addedToBskt, setAddedToBskt] = useState("Add to basket");

  function handleClick() {
    setCheckProducts([...checkProducts, val.info]);
    val.setProductNum(
      [...val.productNum, val.info].filter(
        (value, id, arr) => arr.indexOf(value) == id
      )
    );

    val.setSubtotal(
      [...val.subtotal, Number(imgInfo[val.info].price)].filter(
        (value, id, arr) => arr.indexOf(value) == id
      )
    );

    setTimeout(() => {
      if (checkProducts.filter((el) => el == val.info).length == 0) {
        setAddedToBskt("Added!");
      }
    }, 700);
  }

  useEffect(() => {
    checkProducts.filter((el) => el == val.info).length == 0
      ? setAddedToBskt("Add to basket!")
      : setAddedToBskt("Already added!");
  }, []);
  return (
    <div className="container saleDescrCont">
      <div className="container mb-3">
        <div className="row">
          <div className="col-auto ">
            <Link
              className="text-decoration-none text-dark icon-link"
              to="/STORE"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span className="retToStoreCol">RETURN TO STORE</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-5 col-12">
          <img
            className="salePaintingImg float-end w-100"
            src={imgInfo[val.info].imgSrc}
            alt=""
          />
        </div>
        <div className="col-xl-6 col-auto">
          <div className="container saleFont">
            <div className="row">
              <h1 className="saleTitle mt-4 ps-2">{imgInfo[val.info].title}</h1>
            </div>
            <div className="row">
              <p>Canvas oil painting</p>
            </div>
            <div className="row">
              <p>Size: 24 inches x 36 inches </p>
            </div>
            <div className="row">
              <p className="salePrice fs-5">
                Price: ${imgInfo[val.info].price}
              </p>
            </div>
          </div>

          <div className="container ">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col saleFont">
                    <p>{imgInfo[val.info].description}</p>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-xl-end justify-content-center ">
                <button className="addToBskt" onClick={handleClick}>
                  {addedToBskt}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleDescr;
