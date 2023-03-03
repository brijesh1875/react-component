import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary navbar-theme-${
          props.mode ? "dark" : "light"
        }`}
      >
        <div className="container">
          <Link
            className={`navbar-brand b-500 text-${
              props.mode ? "light" : "dark"
            }`}
            to="/"
          >
            TruTravel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-${props.mode ? "light" : "dark"}`}
                  aria-current="page"
                  to="/"
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-${props.mode ? "light" : "dark"}`}
                  to="/about"
                  activeclassname="active"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-${props.mode ? "light" : "dark"}`}
                  to="/contact"
                  activeclassname="active"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="mx-4">
              <span
                className={`toggle-mode text-${props.mode ? "light" : "dark"}`}
                onClick={props.switchMode}
              >
                <i
                  className={`fa-${props.mode ? "regular" : "solid"} fa-sun`}
                ></i>
              </span>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Header.propTypes = {
  mode: PropTypes.bool.isRequired,
};
