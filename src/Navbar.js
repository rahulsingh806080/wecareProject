import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/logo.jpeg";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                {/* <NavLink className="navbar-brand" to="/">
                  MatriMeru Tech
                </NavLink> */}

                <div className="top-left pull-left fl-left">
                  <a href="index.php">
                    <img src={web} alt="" className="logosize" />
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink
                        exact
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/"
                      >
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/service"
                      >
                        Product Details
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu-active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="nav-box">
                  <div className="nav-btn nav-toggler navSidebar-button clearfix">
                    <i className="flaticon-sort"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
