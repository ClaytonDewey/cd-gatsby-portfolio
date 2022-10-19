import React from "react";
import { Link } from "gatsby";
import Loader from "react-loaders";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <>
      <section className="about__section">
        <h1 className="section__title">
          About Me
          <br />
          <span>Clayton Dewey</span>
        </h1>
        <div className="about__content">
          <div className="about__content-info px-2">
            <p>Hi. I'm Clayton</p>
            <p>
              I am a front-end web developer from Madison, WI. I am the full
              time developer and photographer for the{" "}
              <a href="https://www.uwbookstore.com/home">
                University Book Store
              </a>
              , where I've been for the past 18 years.
            </p>
            <p>
              I am currently enrolled in the Front End Developer program at{" "}
              <a href="https://madisoncollege.edu/">Madison College</a>, and I
              will be graduating in May 2023.
            </p>
            <p>
              When not working, or in class, I'm spending time with my daughter,
              listening to music, making pictures, or all of the above.
            </p>
            <div className="flex btn__container">
              <Link to="/contact" className="btn btn__primary">
                Get In Touch
              </Link>
              <a
                href="./files/Resume-Clayton_Dewey.pdf"
                target="_blank"
                className="btn btn__primary"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <div className="about__content-image px-2">
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="Clayton Dewey"
            />
          </div>
        </div>
      </section>
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default About;
