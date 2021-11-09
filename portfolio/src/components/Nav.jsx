import React from "react";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="Nav-container">
      <nav className="nav">
        <img src="" alt="main-logo" />
        <FontAwesomeIcon icon={faBars} className="menu-icon" />
      </nav>
    </div>
  );
}

export default Nav;
