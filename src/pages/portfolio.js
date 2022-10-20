import React from "react";
import Projects from "../components/Projects";
import Loader from "react-loaders";

const Portfolio = () => {
  return (
    <>
      <Projects title="portfolio" />
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default Portfolio;
