import React from "react";

const Header = (props) => {
  return (
    <nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active" aria-current="page">
          <i className="fa-sharp fa-solid fa-rectangle-pro"></i>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Email
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Call
        </li>
        <li className="breadcrumb-item">
          <a href="#">Home</a>
        </li>
      </ol>
    </nav>
  );
};

export default Header;

