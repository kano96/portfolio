import React, { useEffect, useState } from "react";
import "./Mainview.css";
import img from "../assets/profile-img.png";
const title = "I'm Kevin Torres";
function Mainview() {
  const [type, setType] = useState("");
  useEffect(() => {
    const nextType = title.slice(0, type.length + 1);
    if (nextType === type) return;
    const timeout = setTimeout(() => {
      setType(title.slice(0, type.length + 1));
    }, 150);

    return () => clearTimeout(timeout);
  }, [type]);
  return (
    <section className="main-container">
      <div className="banner-container">
        <div className="info">
          <div className="contact-icons">
            <ul className="icons-list">
              <li className="linkedin">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kevin-torres-iglesias-520311167/"
                  rel="noreferrer"
                  className="contact-links"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="github">
                <a
                  target="_blank"
                  href="https://github.com/kano96"
                  rel="noreferrer"
                  className="contact-links"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li className="twitter">
                <a
                  target="_blank"
                  href="https://twitter.com/kevinSDQ"
                  rel="noreferrer"
                  className="contact-links"
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mail">
                <a
                  target="_blank"
                  href="#contact"
                  rel="noreferrer"
                  className="contact-links"
                >
                  <i class="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="title-container">
            <h1 className="blinking-cursor">{type}</h1>
          </div>
          <div className="descr">
            <p>
              Hi there, I'm Kevin, a full stack web developer with experience in
              ReactJS and NodeJs
            </p>
          </div>
          <div className="action-btn">
            <button className="port-btn">
              <a href="#portfolio">My Portfolio</a>
            </button>
          </div>
        </div>
        <div className="profile-img">
          <img src={img} alt="profile-kev" />
        </div>
      </div>
    </section>
  );
}

export default Mainview;
