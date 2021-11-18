import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About-container" id="about">
      <div className="info-about">
        <h1>About</h1>
        <p className="p">
          I'm a web developer and programmer living in Quito, Ecuador. I enjoy
          building everything from small business to rich interactive web apps.
          I primarly use JavaScript, but picking up a new framework or language
          isn't a problem. I'm comfortable developing on the frontend or
          backend. If you are a business seeking web presence or an employer
          looking to hire, you can get in touch with me{" "}
          <a href="#contact">here</a>.
        </p>
      </div>
    </div>
  );
}

export default About;
