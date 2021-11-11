import React from "react";
import "./Projects.css";

function Project({ title, url, img, desc, stack, repo }) {
  return (
    <div className="card">
      <div className="img-box">
        <img src={img} alt="projectimg" />
      </div>
      <div className="content">
        <h2 style={{ fontSize: "22px" }}>{title}</h2>
        <div className="links-repo">
          <a href={repo}>
            <i class="fab fa-github"></i>
          </a>
          <a href={url}>
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
        <p className="desc">{desc}</p>
        <div className="stack">
          {stack.map((tec) => (
            <button value={tec} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
