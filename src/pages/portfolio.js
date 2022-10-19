import React from "react";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio__section">
        <h1 className="section__title">
          Portfolio
          <br />
          <span>My Work</span>
        </h1>
        <Projects />
      </section>
    </>
  );
};

export default Portfolio;
