import React from "react";
import Project from "./Project";
import Title from "./Title";

const Projects = ({ title }) => {
  return (
    <>
      <section className="portfolio__section">
        <Title title={title} />
        <Project />
      </section>
    </>
  );
};

export default Projects;
