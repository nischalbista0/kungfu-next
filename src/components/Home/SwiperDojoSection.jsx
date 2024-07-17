import React from "react";

const SwiperDojoSection = () => {
  return (
    <section className="custom-container swiper-dojo-container">
      <div className="swiper-container">
        <h1 className="swiper-title">Kungfu Modes</h1>

        <div className="swiper kungfu-modes-swiper">
          <div className="swiper-wrapper our-approach">
            <div
              className="swiper-slide swiper-slide--one"
              data-description="Description for slide 1"
            >
              <img
                src="img/placeholder/Group.png"
                alt=""
                className="swiper-placeholder"
              />

              <img
                src="/img/static/Panda.png"
                alt=""
                className="swiper-image common-card"
              />
            </div>
            <div
              className="swiper-slide swiper-slide--two"
              data-description="Description for slide 2"
            >
              <img
                src="img/placeholder/Group.png"
                alt=""
                className="swiper-placeholder"
              />

              <img
                src="/img/static/Panda.png"
                alt=""
                className="swiper-image common-card"
              />
            </div>

            <div
              className="swiper-slide swiper-slide--three"
              data-description="Description for slide 3"
            >
              <img
                src="img/placeholder/Group.png"
                alt=""
                className="swiper-placeholder"
              />

              <img
                src="/img/static/Panda.png"
                alt=""
                className="swiper-image common-card"
              />
            </div>

            <div
              className="swiper-slide swiper-slide--four"
              data-description="Description for slide 4"
            >
              <img
                src="img/placeholder/Group.png"
                alt=""
                className="swiper-placeholder"
              />

              <img
                src="/img/static/Panda.png"
                alt=""
                className="swiper-image common-card"
              />
            </div>

            <div
              className="swiper-slide swiper-slide--five"
              data-description="Description for slide 5"
            >
              <img
                src="img/placeholder/Group.png"
                alt=""
                className="swiper-placeholder"
              />

              <img
                src="/img/static/Panda.png"
                alt=""
                className="swiper-image common-card"
              />
            </div>
          </div>
        </div>

        <p className="custom-container swiper-description"></p>

        <div className="custom-container dojo-container" id="dojo">
          <img src="img/static/house-ray.png" alt="Dojo" className="dojo" />

          <img src="img/static/Ground.png" alt="Ground" className="ground" />
        </div>
      </div>
    </section>
  );
};

export default SwiperDojoSection;
