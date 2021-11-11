import React from "react";
import "./Portfolio.css";
import data from "./data-projects";
import Project from "./Projects";

function Portfolio() {
  return (
    <div id="portfolio" className="portfolio-cont">
      <div className="title" data-aos="fade-up">
        <h1>Portfolio</h1>
      </div>
      <div className="projects" data-aos="fade-up">
        {data.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            url={project.url}
            img={project.img}
            desc={project.desc}
            repo={project.repo}
            stack={project.stack}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
