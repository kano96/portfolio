import React from "react";
import "./Expert.css";
import { leng } from "./Leng";
import { Popup } from "semantic-ui-react";
function Expert() {
  return (
    <div class="expert-cont">
      <h2>Technologies and Lenguages</h2>
      <div className="skills-cont">
        <ul>
          {leng.map((skill) => {
            return (
              <li>
                <Popup
                  content={skill.label}
                  trigger={
                    <img src={skill.url} alt="" className={skill.class} />
                  }
                  position="top center"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Expert;
