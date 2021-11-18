import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "../../assets/LogoKevin.png";
function Nav() {
  // Actuación del botón de menú para mobile

  const [actMenu, setActMenu] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const [screenW, setScreenW] = useState(window.innerWidth);
  const handleOnClick = (e) => {
    setActMenu(!actMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenW(window.innerWidth);
    };
    const changeB = () => {
      if (window.scrollY > 99) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    window.addEventListener("scroll", changeB);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className={navBar ? "navbar active" : "navbar"}>
      {(actMenu || screenW > 700) && (
        <ul className="list">
          <li className="items">
            <a href="#top">Home</a>
          </li>
          <li className="items">
            <a href="#about">About</a>
          </li>
          <li className="items">
            <a href="#skills">Skills</a>
          </li>
          <li className="items">
            <a href="#portfolio">Porfolio</a>
          </li>
          <li className="items">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
      <button className="btn" onClick={handleOnClick}>
        <i class="fas fa-bars"></i>
      </button>
    </nav>
  );
}

export default Nav;
