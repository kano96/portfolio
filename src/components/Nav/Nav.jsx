import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  // Actuación del botón de menú para mobile

  const [actMenu, setActMenu] = useState(false);
  const [screenW, setScreenW] = useState(window.innerWidth);
  const handleOnClick = (e) => {
    setActMenu(!actMenu);
  };
  useEffect(() => {});

  return (
    <nav>
      {(actMenu || screenW >= 700) && (
        <ul className="list">
          <li className="items">Home</li>
          <li className="items">About</li>
          <li className="items">Skills</li>
          <li className="items">Porfolio</li>
          <li className="items">Contact</li>
        </ul>
      )}
      <button className="btn" onClick={handleOnClick}>
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  );
}

export default Nav;
