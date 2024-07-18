import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const HeroSection = () => {
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    // Select all span elements inside the section title
    const spans = document.querySelectorAll(".section-title h1 span");
    const paragraph = document.querySelector(".section-body p");
    const button = document.querySelector(".section-link a");

    // Create a GSAP timeline
    const gamesBeginTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".games-begin",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    // Loop through each span and add animations to the timeline
    spans.forEach((span, index) => {
      gamesBeginTimeline.fromTo(
        span,
        {
          scale: 2.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.2,
          ease: "linear",
        },
        index * 0.2
      );
    });

    // Animate the paragraph
    gamesBeginTimeline.fromTo(
      paragraph,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      }
    );

    // Animate the button
    gamesBeginTimeline.fromTo(
      button,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".left-scroll-handle",
      { x: "0" },
      {
        x: "-56%",
        scrollTrigger: {
          trigger: ".ninja-scroll",
          start: "top 75%",
          end: "bottom bottom",
          // scrub: 1.5,
          // stagger: 2,
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".right-scroll-handle",
      { x: "0" },
      {
        x: "59%",
        scrollTrigger: {
          trigger: ".ninja-scroll",
          start: "top 75%",
          end: "bottom bottom",
          // scrub: 1.5,
          // stagger: 2,
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".scroll-desc",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".ninja-scroll",
          start: "top 75%",
          end: "bottom center",
          scrub: 1.5,
          stagger: 2,
        },
      }
    );

    // gsap.fromTo(
    //   ".ninja-scroll-container .top-cloud",
    //   { y: "0" },
    //   {
    //     y: "0%",
    //     scrollTrigger: {
    //       trigger: ".ninja-scroll-container",
    //       start: "top 100%",
    //       end: "bottom 100%",
    //       scrub: 1.5,
    //       stagger: 2,
    //       yoyo: true,
    //     },
    //   }
    // );

    gsap.fromTo(
      ".ninja-scroll-container .bottom-cloud",
      { y: "0" },
      {
        y: "-20%",
        scrollTrigger: {
          trigger: ".bottom-cloud",
          start: "top 70%",
          end: "bottom 90%",
          scrub: 4,
          yoyo: true,
        },
      }
    );

    gsap.to(".dragon-house", {
      duration: 2.5,
      rotation: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.fromTo(
      ".top-cloud-left",
      { x: "-50%", opacity: 0 },
      {
        x: "-3%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".top-cloud-right",
      { x: "50%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".bottom-cloud-left",
      { x: "-50%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".bottom-cloud-right",
      { x: "40%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.to(".rays", {
      duration: 0.6,
      y: "-100%",
      ease: "power2.out",
    });

    gsap.to(".rays", {
      duration: 0.5,
      opacity: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // gsap.from(".house-center", {
    //   duration: 1,
    //   y: "100%",
    //   ease: "power2.out",
    // });
    gsap.fromTo(
      ".house-center",
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".house-left, .house-right",
      { y: "100%" },
      { y: "0%", duration: 1, ease: "power2.out", delay: 0.1 }
    );

    gsap.to(".house-container", {
      y: 150,
      scrollTrigger: {
        trigger: ".house-container-main",
        start: "top 50%",
        end: "bottom top",
        scrub: 4,
        // markers: false,
      },
    });

    gsap.from(".top-cloud-white, .top-cloud-blue", {
      duration: 1,
      y: "100%",
      ease: "power2.out",
      stagger: 0.1,
    });

    gsap.fromTo(
      ".top-cloud-white",
      { y: "0" },
      {
        y: "-5%",
        scrollTrigger: {
          trigger: ".house-container",
          start: "top 45%",
          end: "bottom 90%",
          scrub: 4,
          yoyo: true,
        },
      }
    );

    gsap.fromTo(
      ".top-cloud-blue",
      { y: "0" },
      {
        y: "-15%",
        scrollTrigger: {
          trigger: ".house-container",
          start: "top 45%",
          end: "bottom 90%",
          scrub: 4,
          yoyo: true,
          // markers: false,
        },
      }
    );
  }, []);

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
