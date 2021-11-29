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
          <a href={repo} target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
          </a>
          {url && (
            <a href={url} target="_blank" rel="noreferrer">
              <i class="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
        <p className="desc">{desc}</p>
        <div className="stack">
          {stack.map((tec) => (
            <div key={tec}>{tec}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
