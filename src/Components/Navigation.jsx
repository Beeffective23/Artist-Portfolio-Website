import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "/Users/petertsekov/Desktop/Projects/Test2/my-app/src/Pictures/PTZ_logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Shop-Context";

function Navigation() {
  const val = useContext(AuthContext);

  const handleClick = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar sticky-top navbar-expand-xxl bg-white bg-opacity-75 z-3">
      <div class="container-fluid">
        <Link onClick={handleClick} to="/">
          <img className="logo" src={logo} alt="PTZLogo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link onClick={handleClick} to="/" className="nav-link px-0 fw-6">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClick} to="/BIO" className="nav-link px-0">
                Bio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleClick}
                to="/PAINTINGS"
                className="nav-link px-0"
              >
                Paintings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleClick}
                to="/CONTACTS"
                className="nav-link px-0"
              >
                Contacts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={handleClick}
                to="/VIDEOS"
                className="nav-link px-0"
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClick} to="/STORE" className="nav-link px-0">
                Store
              </Link>
            </li>

            <li className="nav-item d-flex justify-content-center">
              <Link
                onClick={handleClick}
                to="/BASKET"
                className="shoppingCart text-decoration-none d-flex d-sm-inline-flex"
              >
                <FontAwesomeIcon icon={faCartShopping} />
                {val.productNum.length === 0 ? (
                  ""
                ) : (
                  <p className="numOfProducts text-dark fs-6 ps-2">
                    {val.productNum.length}
                  </p>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
