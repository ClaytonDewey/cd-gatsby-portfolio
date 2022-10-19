import React from "react";
import Loader from "react-loaders";

const Contact = () => {
  return (
    <>
      <section className="portfolio__section">
        <h1 className="section__title">
          Contact Me
          <br />
          <span>Get in Touch</span>
        </h1>
      </section>
      <Loader type="semi-circle-spin" />
    </>
  );
};

export default Contact;
