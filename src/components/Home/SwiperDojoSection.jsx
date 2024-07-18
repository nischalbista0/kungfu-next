import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SwiperDojoSection = () => {
  const [dojoContainerHeight, setDojoContainerHeight] = useState(0);
  const [activeDescription, setActiveDescription] = useState("");
  const [activeTitle, setActiveTitle] = useState("");
  const swiperContainerRef = useRef(null);
  const dojoContainerRef = useRef(null);
  const dojoImageRef = useRef(null);
  const swiperRef = useRef(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray(".our-approach").forEach((section) => {
      const elems = section.querySelectorAll(".common-card");
      gsap.set(elems, { y: 50, opacity: 0 });
      elems.forEach((box, index) => {
        gsap.to(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 100%",
            end: "bottom 20%",
            stagger: 2,
            scrub: 1,
            onEnter: () => gsap.to(box, { y: 0, opacity: 1, duration: 1 }),
            onLeave: () => gsap.to(box, { y: -50, opacity: 0 }),
            onEnterBack: () => gsap.to(box, { y: 0, opacity: 1 }),
            onLeaveBack: () => gsap.to(box, { y: 50, opacity: 0 }),
            markers: false,
          },
        });
      });
    });
  }, []);

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
    const activeSlide = swiper.slides[swiper.activeIndex];
    const description = activeSlide.getAttribute("data-description");
    const title = activeSlide.getAttribute("data-title");
    setActiveDescription(description);
    setActiveTitle(title);
  };

  return (
    <section className="custom-container swiper-dojo-container">
      <div className="swiper-container" ref={swiperContainerRef}>
        <h1 className="swiper-title">Discover the Power of Video-Quizzes</h1>

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
              onSlideChange={updateDescription}
            >
              <SwiperSlide
                data-title="Quick Mastery"
                data-description="Video-based learning and interactive quizzes make it easy to understand and quickly master the topics. "
                data-swiper-slide-index="0"
              >
                <div>
                  <div className="swiper-slide swiper-slide--one">
                    <img
                      src="img/placeholder/Group.png"
                      alt=""
                      className="swiper-placeholder"
                    />
                    <img
                      src="/img/static/mastery.png"
                      alt=""
                      className="swiper-image common-card"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                data-title="Challenge Yourself"
                data-description="Interactive video quizzes improve long-term retention and compete among friends. "
                data-swiper-slide-index="1"
              >
                <div className="swiper-slide swiper-slide--two">
                  <img
                    src="img/placeholder/Group.png"
                    alt=""
                    className="swiper-placeholder"
                  />
                  <img
                    src="/img/static/challenge.png"
                    alt=""
                    className="swiper-image common-card"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                data-title="Active Learning"
                data-description="Video quizzes help students actively focus on a specific topic and study at their own pace."
                data-swiper-slide-index="2"
              >
                <div className="swiper-slide swiper-slide--three">
                  <img
                    src="img/placeholder/Group.png"
                    alt=""
                    className="swiper-placeholder"
                  />
                  <img
                    src="/img/static/learning.png"
                    alt=""
                    className="swiper-image common-card learning"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                data-title="Quick Mastery"
                data-description="Video-based learning and interactive quizzes make it easy to understand and quickly master the topics. "
                data-swiper-slide-index="0"
              >
                <div>
                  <div className="swiper-slide swiper-slide--one">
                    <img
                      src="img/placeholder/Group.png"
                      alt=""
                      className="swiper-placeholder"
                    />
                    <img
                      src="/img/static/mastery.png"
                      alt=""
                      className="swiper-image common-card"
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                data-title="Challenge Yourself"
                data-description="Interactive video quizzes improve long-term retention and compete among friends. "
                data-swiper-slide-index="1"
              >
                <div className="swiper-slide swiper-slide--two">
                  <img
                    src="img/placeholder/Group.png"
                    alt=""
                    className="swiper-placeholder"
                  />
                  <img
                    src="/img/static/challenge.png"
                    alt=""
                    className="swiper-image common-card"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                data-title="Active Learning"
                data-description="Video quizzes help students actively focus on a specific topic and study at their own pace."
                data-swiper-slide-index="2"
              >
                <div className="swiper-slide swiper-slide--three">
                  <img
                    src="img/placeholder/Group.png"
                    alt=""
                    className="swiper-placeholder"
                  />
                  <img
                    src="/img/static/learning.png"
                    alt=""
                    className="swiper-image common-card learning"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="custom-container swiper-description">
          <strong className="active-title">{activeTitle}</strong>
          <p className="active-description">{activeDescription}</p>
        </div>

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
