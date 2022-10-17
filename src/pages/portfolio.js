import React from "react";
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
      </section>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
