import React from "react";

const HeroSection = () => {
  return (
    <section className="games-begin">
      <div className="rays"></div>

      <div className="floating-cloud top-cloud-left"></div>
      <div className="floating-cloud top-cloud-right"></div>
      <div className="floating-cloud bottom-cloud-left"></div>
      <div className="floating-cloud bottom-cloud-right"></div>

      <div className="custom-container">
        <div className="section-container type-small center">
          <div className="section-title">
            <h1>
              <span>Let</span> <span>the</span> <br />
              <span>games</span> <span>begin!</span>
            </h1>
          </div>

          <div className="section-body">
            <p>
              Welcome to the Kung Fu Arena where teachers and students unite to
              sharpen their skills through video quizzes.
            </p>
          </div>
          <div className="section-link">
            <a href="#" className="co-btn">
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </div>

      <div className="house-container-main">
        <div className="custom-container house-container">
          <div className="house-left">
            <img src="/img/static/house-left.png" alt="" />
          </div>
          <div className="house-center">
            <img src="/img/static/house-center.png" alt="" />
          </div>
          <div className="house-right">
            <img src="/img/static/house-right.png" alt="" />
          </div>
        </div>

        <div className="top-cloud-white">
          <img src="/img/static/scroll-cloud-top-white.png" alt="Top Cloud" />
        </div>

        <div className="top-cloud-blue">
          <img src="/img/static/scroll-cloud-top-blue.png" alt="Top Cloud" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
