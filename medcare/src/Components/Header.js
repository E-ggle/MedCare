import React from "react";
import "./Header.css";
import services from "../images/HEART.png";

function Header() {
  return (
    <div className="header">
      <span className="leftcell">
        <img className="services-img" src={services} alt="" />
        <text className="lefttitle">MedCare</text>
      </span>
      <span className="rightcell">
        <button className="service-button">Get Services</button>
      </span>
    </div>
  );
}

export default Header;
