import React from "react";

const Header = (props) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar navbar-dark bg-dark">
      <div class="container-fluid fw-semibold">
        <a class="navbar-brand fs-3 " href="#">
          Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item fw-semibold">
              <a class="nav-link active " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item fw-semibold">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item fw-semibold">
              <a class="nav-link" href="#">
                Service
              </a>
            </li>
            <li class="nav-item fw-semibold">
              <a class="nav-link" href="#">
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
