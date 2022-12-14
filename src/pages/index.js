import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaJediOrder } from "react-icons/fa";
import Loader from "react-loaders";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";

const IndexPage = () => {
  return (
    <>
      <section className="home__section">
        <div className="home__section-wrapper">
          <div className="home__section-info">
            <StaticImage src="../assets/images/profile.jpeg" alt="avatar" />
            <h1>Clayton Dewey</h1>
            <p className="subhead">Front End Developer</p>
            <p className="text-center">
              <FaJediOrder />
            </p>
          </div>
        </div>
      </section>
      <Jobs />
      <Projects title="featured projects" />
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default IndexPage;
