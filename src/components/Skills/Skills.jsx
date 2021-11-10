import React from "react";
import Expert from "./Expert";
import "./Skills.css";

function Skills() {
  return (
    <section className="Skills-section" id="skills">
      <div className="info">
        <h1>SKILLSET</h1>
      </div>
      <div className="expert-section">
        <Expert />
      </div>
    </section>
  );
}

export default Skills;
