import React from "react";
import "./Expert.css";
import { leng } from "./Leng";

function Expert() {
  return (
    <div class="expert-cont">
      <h2>Technologies and Lenguages</h2>
      <div className="skills-cont">
        <ul>
          {leng.map((skill) => {
            return (
              <li>
                <img src={skill.url} alt="" className={skill.class} />
                <span className={skill.labelclass}>{skill.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Expert;
