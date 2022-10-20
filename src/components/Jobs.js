import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";

const Jobs = () => {
  return (
    <section className="jobs__section">
      <Title title="Experience" />
      <div className="jobs__center">
        <article class="jobs__info">
          <h3>Web Administrator</h3>
          <h4>University Book Store</h4>
          <p class="jobs__date">February 2003 - Present</p>
          <div class="jobs__desc">
            <FaAngleDoubleRight className="jobs__icon" />
            <p>
              Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
              leggings offal cold-pressed brunch neutra. Hammock photo booth
              live-edge disrupt.
            </p>
          </div>
          <div class="jobs__desc">
            <FaAngleDoubleRight className="jobs__icon" />
            <p>
              Post-ironic selvage chambray sartorial freegan meditation.
              Chambray chartreuse kombucha meditation, man bun four dollar toast
              street art cloud bread live-edge heirloom.
            </p>
          </div>
          <div class="jobs__desc">
            <FaAngleDoubleRight className="jobs__icon" />
            <p>
              Butcher drinking vinegar franzen authentic messenger bag copper
              mug food truck taxidermy. Mumblecore lomo echo park readymade
              iPhone migas single-origin coffee franzen cloud bread tilde vegan
              flexitarian.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Jobs;
