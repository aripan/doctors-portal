import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active m-2"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-2" href="#dentalServices">
                  Dental Services
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white m-2" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white m-2" href="#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white m-2" href="#contactUs">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
