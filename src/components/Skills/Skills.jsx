import React from "react";
import Expert from "./Expert";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react/cjs/react.development";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className="Skills-section" id="skills">
      <div className="info">
        <h1 data-aos="fade-down">SKILLSET</h1>
      </div>
      <div className="expert-section" data-aos="fade-up">
        <Expert />
      </div>
    </section>
  );
}

export default Skills;
