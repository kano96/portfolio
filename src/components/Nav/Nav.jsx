import React, { useState } from "react";
import "./Nav.css";
import menuItems from "./Menuitems";
import logo from "../../assets/LogoKevin.png";

function Nav() {
  const [actMenu, setactMenu] = useState(false);
  const handleOnClick = (e) => {
    setactMenu(!actMenu);
  };
  return (
    <div className="allnav">
      <div className="Nav-container">
        <nav className="nav">
          <div className="logo">
            <img src={logo} alt="LogoKevin" width="50px" />
          </div>
          <div className="menu-icon" onClick={handleOnClick}>
            <i className={actMenu ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </nav>
      </div>
      <div className={actMenu ? "menu-mobile-container" : "menu"} id="menu">
        <div className="ul-container">
          <ul className="menu-active-mobile">
            {menuItems.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className={link.cName}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
