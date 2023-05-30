import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar navbar-dark bg-dark d-flex">
      <div className="container-fluid fw-semibold">
        <a className="navbar-brand fs-3 " href="#">
          Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarText">
          <ul className="navbar-nav ">
            <li className="nav-item fw-semibold">
              <a className="nav-link active " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item fw-semibold">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
