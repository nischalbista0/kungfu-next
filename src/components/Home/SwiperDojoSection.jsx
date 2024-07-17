import React, { useEffect, useState, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";

const SwiperDojoSection = () => {
  const [dojoContainerHeight, setDojoContainerHeight] = useState(0);
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

  useEffect(() => {
    swiperRef.current = new Swiper(".kungfu-modes-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 10,
        stretch: 10,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      },
      loop: true,
      slidesPerView: 2,
      fadeEffect: {
        crossFade: true,
      },
      speed: 700,
    });

    const handleSlideClick = (event) => {
      const slide = event.currentTarget;
      const clickedIndex = parseInt(
        slide.getAttribute("data-swiper-slide-index")
      );
      swiperRef.current.slideToLoop(clickedIndex);
      updateDescription(clickedIndex);
    };

    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.addEventListener("click", handleSlideClick);
    });

    const initialIndex = swiperRef.current.realIndex;
    updateDescription(initialIndex);

    return () => {
      slides.forEach((slide) => {
        slide.removeEventListener("click", handleSlideClick);
      });
      swiperRef.current.destroy(true, true);
    };
  }, []);

  const updateDescription = (index) => {
    const activeSlide = document.querySelector(
      `.swiper-slide[data-swiper-slide-index="${index}"]`
    );
    const newDescription = activeSlide
      ? activeSlide.getAttribute("data-description")
      : "";
    const descriptionElement = document.querySelector(".swiper-description");

    descriptionElement.style.opacity = 0;
    setTimeout(() => {
      descriptionElement.textContent = newDescription;
      descriptionElement.style.opacity = 1;
    }, 300);
  };

  return (
    <section className="custom-container swiper-dojo-container">
      <div className="swiper-container" ref={swiperContainerRef}>
        <h1 className="swiper-title">Kungfu Modes</h1>

        <div className="swiper kungfu-modes-swiper">
          <div className="swiper-wrapper our-approach">
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
            <div
              className="swiper-slide swiper-slide--five"
              data-description="Description for slide 5"
              data-swiper-slide-index="4"
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
