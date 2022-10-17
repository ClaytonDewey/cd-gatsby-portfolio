import React from "react";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Project = () => {
  return (
    <>
      <article className="project">
        <StaticImage
          src="../assets/images/bookstore-comp.png"
          alt="University Book Store Project"
          className="project-img"
        />
        <div className="project-info">
          <span className="project-number">01.</span>
          <a className="project-slug" href="/projects/html-and-css">
            <h3>html&amp;css</h3>
          </a>
          <p className="project-desc">
            Four loko heirloom 90's, mustache readymade microdosing lumbersexual
            vexillologist synth. Sartorial shabby chic cloud bread, green juice
            meditation bitters before they sold out brunch. Four dollar toast
            retro pitchfork biodiesel cronut, waistcoat direct trade +1
            williamsburg cornhole. Health goth williamsburg cliche lumbersexual
            listicle small batch, cardigan franzen snackwave knausgaard poutine
            humblebrag put a bird on it godard. Godard chillwave put a bird on
            it locavore salvia echo park copper mug roof party dreamcatcher kale
            chips listicle.
          </p>
          <div className="project-stack">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com">
              <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
            <a href="https://www.claytondewey.io">
              <FaShareSquare className="project-icon"></FaShareSquare>
            </a>
          </div>
        </div>
      </article>

      <article className="project">
        <StaticImage
          src="../assets/images/alumniStore-comp.png"
          alt="University Book Store Project"
          className="project-img"
        />
        <div className="project-info">
          <span className="project-number">02.</span>
          <a className="project-slug" href="/projects/html-and-css">
            <h3>html&amp;css</h3>
          </a>
          <p className="project-desc">
            Four loko heirloom 90's, mustache readymade microdosing lumbersexual
            vexillologist synth. Sartorial shabby chic cloud bread, green juice
            meditation bitters before they sold out brunch. Four dollar toast
            retro pitchfork biodiesel cronut, waistcoat direct trade +1
            williamsburg cornhole. Health goth williamsburg cliche lumbersexual
            listicle small batch, cardigan franzen snackwave knausgaard poutine
            humblebrag put a bird on it godard. Godard chillwave put a bird on
            it locavore salvia echo park copper mug roof party dreamcatcher kale
            chips listicle.
          </p>
          <div className="project-stack">
            <span>html</span>
            <span>css</span>
            <span>javascript</span>
          </div>
          <div className="project-links">
            <a href="https://github.com">
              <FaGithubSquare className="project-icon"></FaGithubSquare>
            </a>
            <a href="https://www.claytondewey.io">
              <FaShareSquare className="project-icon"></FaShareSquare>
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default Project;
