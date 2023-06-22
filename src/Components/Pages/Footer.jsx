import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Footer(prop) {
  const handleClick = () => {
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  };
  return (
    <div className={`container-fluid ${prop.clsName}`}>
      <div className="row social1 d-flex justify-content-md-end justify-content-center">
        <div className="col-1 facebook w-auto">
          <a
            href="https://www.facebook.com/profile.php?id=100077660954995"
            target="_blank"
          >
            <div style={{ width: "40px", height: "40px" }}></div>
          </a>
        </div>
        <div className="col-1 instagram w-auto">
          <a href="https://www.instagram.com/tzekovpeter/" target="_blank">
            <div style={{ width: "40px", height: "40px" }}></div>
          </a>
        </div>
        <div className="col-1 Mail w-auto">
          <Link onClick={handleClick} to="/CONTACTS">
            <div style={{ width: "40px", height: "40px" }}></div>
          </Link>
        </div>
      </div>

      <div className="row rights"></div>
      <div className="row">
        <p className="paragRights">
          ©PeterTzekov.com 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
