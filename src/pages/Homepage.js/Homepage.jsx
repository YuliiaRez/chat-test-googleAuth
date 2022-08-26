import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/chatterbox-logo1.png";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage-container">
      <NavLink to="/login">
        <img src={logo} alt="ChatterBox Logo" />
        {/* <h1 className="homepage-slogan">Let's start ...</h1> */}
      </NavLink>
    </div>
  );
}

export default Homepage;
