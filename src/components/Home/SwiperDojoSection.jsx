import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const SwiperDojoSection = () => {
  const [dojoContainerHeight, setDojoContainerHeight] = useState(0);
  const [activeDescription, setActiveDescription] = useState("");
  const swiperContainerRef = useRef(null);
  const dojoContainerRef = useRef(null);
  const dojoImageRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const dojoImage = dojoImageRef.current;

    const updateDojoContainerHeight = () => {
      const imageHeight = dojoImage.clientHeight;
      setDojoContainerHeight(imageHeight);
    };

    if (dojoImage.complete) {
      updateDojoContainerHeight();
    } else {
      dojoImage.addEventListener("load", updateDojoContainerHeight);
    }

    window.addEventListener("resize", updateDojoContainerHeight);

    return () => {
      window.removeEventListener("resize", updateDojoContainerHeight);
      dojoImage.removeEventListener("load", updateDojoContainerHeight);
    };
  }, []);

  const updateDescription = (swiper) => {
    const activeSlide = swiper.slides[swiper.realIndex];
    const description =
      activeSlide.querySelector(".swiper-slide").dataset.description;
    setActiveDescription(description);
  };

  return (
    <section className="custom-container swiper-dojo-container">
      <div className="swiper-container" ref={swiperContainerRef}>
        <h1 className="swiper-title">Kungfu Modes</h1>

        <div className="swiper kungfu-modes-swiper">
          <div className="swiper-wrapper our-approach">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"2"}
              coverflowEffect={{
                rotate: 10,
                stretch: 10,
                depth: 100,
                modifier: 3,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
              ref={swiperRef}
              // after slide
              // onTransitionEnd={(swiper) => updateDescription(swiper)}
            >
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide--one"
                  data-description="Description for slide 1"
                  data-swiper-slide-index="0"
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
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide--two"
                  data-description="Description for slide 2"
                  data-swiper-slide-index="1"
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
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide--three"
                  data-description="Description for slide 3"
                  data-swiper-slide-index="2"
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
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide swiper-slide--four"
                  data-description="Description for slide 4"
                  data-swiper-slide-index="3"
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
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <p className="custom-container swiper-description">
          {activeDescription}
        </p>

        <div
          className="custom-container dojo-container"
          id="dojo"
          style={{ height: `${dojoContainerHeight}px` }}
          ref={dojoContainerRef}
        >
          <img
            src="img/static/house-ray.png"
            alt="Dojo"
            className="dojo"
            ref={dojoImageRef}
          />
          <img src="img/static/Ground.png" alt="Ground" className="ground" />
        </div>
      </div>
    </section>
  );
};

export default SwiperDojoSection;
