import React from "react";
import Expert from "./Expert";
import "./Skills.css";

function Skills() {
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
