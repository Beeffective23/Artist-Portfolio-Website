import { imgInfo } from "../../helpers";
import { useContext } from "react";
import { AuthContext } from "../../Shop-Context";
import { Link } from "react-router-dom";
import ButtonHome from "../ButtonHome";
function Basket({ checkProducts, setCheckProducts }) {
  const val = useContext(AuthContext);

  let emptyBskt = (
    <div className="container mptyBskt">
      <h2>YOUR BASKET IS EMPTY</h2>
      <Link to="/STORE">
        <ButtonHome name="Return to store" m="m-" />
      </Link>
    </div>
  );

  let checkOut = (
    <div className="container">
      <div className="row d-flex justify-content-end">
        <div className="col-auto sub">
          <p>Subtotal</p>
        </div>
        <div className="col-auto">
          <p className="subtotal">
            $
            {val.subtotal.length == 0
              ? ""
              : val.subtotal.reduce((acc, curr) => acc + curr)}
          </p>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button className="checkoutBtn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );

  function removePaint(e) {
    val.setProductNum(
      val.productNum.filter((value) => value !== Number(e.target.classList[1]))
    );
    val.setSubtotal(
      val.subtotal.filter(
        (curr) => curr !== imgInfo[Number(e.target.classList[1])].price
      )
    );
    setCheckProducts(
      checkProducts.filter((curr) => curr !== Number(e.target.classList[1]))
    );
  }
  let finalPage = val.productNum.map((prNum) => {
    return (
      <div className="container" key={prNum}>
        <div className="row checkOutBorder">
          <div className="col-3 basketImg">
            <img className="checkOutImg" src={imgInfo[prNum].imgSrc} alt="" />
          </div>
          <div className="col-3">
            <p className=" m-0">{imgInfo[prNum].title}</p>
          </div>
          <div className="col-3">
            <p className=" m-0">${imgInfo[prNum].price}</p>
          </div>
          <div className="col-3">
            <button onClick={removePaint} className={`removePainting ${prNum}`}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="productInBskt">
      {finalPage[0] == undefined ? (
        emptyBskt
      ) : (
        <>
          {finalPage} {checkOut}
        </>
      )}
    </div>
  );
}

export default Basket;
