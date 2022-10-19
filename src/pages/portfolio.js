import React from "react";
import Projects from "../components/Projects";
import Loader from "react-loaders";

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
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default Portfolio;
