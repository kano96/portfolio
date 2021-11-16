import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="contact-links">
        <ul className="contact-list-container">
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
      <div className="footer-text">
        <p>
          Made with 🤎 by{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kevin-torres-iglesias-520311167/"
            rel="noreferrer"
          >
            Kevin Torres
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
