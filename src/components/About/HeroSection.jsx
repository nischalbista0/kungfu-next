import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";

const HeroSection = () => {
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const revealWithOpacity = gsap.utils.toArray(".reveal-with-opacity");
    gsap.set(revealWithOpacity, { opacity: 0 });
    revealWithOpacity.forEach((box) => {
      gsap.to(box, { opacity: 1, duration: 1.5 });
    });

    const challengePandaLeft = gsap.utils.toArray(".challenge-panda-left");
    gsap.to(challengePandaLeft, {
      x: "-5%",
      duration: 3,
      ease: "linear",
      repeat: -1,
      yoyo: true,
      scrub: 1,
    });

    const challengePandaRight = gsap.utils.toArray(".challenge-panda-right");
    gsap.to(challengePandaRight, {
      x: "5%",
      duration: 3,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    const pillarlarge = gsap.utils.toArray(".pillarlarge");
    gsap.set(pillarlarge, { y: 150, scale: 1 });
    pillarlarge.forEach((box) => {
      gsap.to(box, {
        y: 0,
        scale: 1.2,
        scrollTrigger: {
          trigger: box,
          scrub: 3,
          start: "top 100%",
          end: "bottom",
          // markers: false,
        },
      });
    });

    const pillarmedium = gsap.utils.toArray(".pillarmedium");
    gsap.set(pillarmedium, { y: 200, scale: 1 });
    pillarmedium.forEach((box) => {
      gsap.to(box, {
        y: 0,
        scale: 1.1,
        scrollTrigger: {
          trigger: box,
          scrub: 1,
          start: "top 100%",
          end: "bottom",
        },
      });
    });

    const pillarsmall = gsap.utils.toArray(".pillarsmall");
    gsap.set(pillarsmall, { y: 50 });
    pillarsmall.forEach((box) => {
      gsap.to(box, {
        y: 0,
        scrollTrigger: {
          trigger: box,
          scrub: 5,
          start: "top 100%",
          end: "bottom",
        },
      });
    });

    const cloudbig = gsap.utils.toArray(".cloudbig");
    gsap.set(cloudbig, { y: 0 });
    cloudbig.forEach((box) => {
      gsap.to(box, {
        y: 90,
        scrollTrigger: {
          trigger: box,
          scrub: 4,
          start: "top 60%",
          end: "bottom",
          // markers: false,
        },
      });
    });

    const cloudleft = gsap.utils.toArray(".cloudleft");
    gsap.set(cloudleft, { y: 0 });
    cloudleft.forEach((box) => {
      gsap.to(box, {
        left: -50,
        scrollTrigger: {
          trigger: box,
          scrub: 3,
          start: "top 100%",
          end: "bottom",
        },
      });
    });

    const cloudright = gsap.utils.toArray(".cloudright");
    gsap.set(cloudright, { y: 0 });
    cloudright.forEach((box) => {
      gsap.to(box, {
        right: -50,
        scrollTrigger: {
          trigger: box,
          scrub: 1,
          start: "top 100%",
          end: "bottom",
        },
      });
    });

    gsap.utils.toArray(".our-approach").forEach((section) => {
      const elems = section.querySelectorAll(".common-card");
      gsap.set(elems, { y: 50, opacity: 0 });
      elems.forEach((box, index) => {
        gsap.to(box, {
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 20%",
            stagger: 2,
            scrub: 1,
            onEnter: () => gsap.to(box, { y: 0, opacity: 1, duration: 1 }),
            onLeave: () => gsap.to(box, { y: -50, opacity: 0 }),
            onEnterBack: () => gsap.to(box, { y: 0, opacity: 1 }),
            onLeaveBack: () => gsap.to(box, { y: 50, opacity: 0 }),
            markers: true,
          },
        });
      });
    });

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
  }, []);

  return (
    <section className="learn-with-kungfu">
      <div className="custom-container">
        <div className="oval-background"></div>

        <div className="section-container type-small center">
          <div className="section-banner">
            <div className="image-container reveal-with-scale-opacity">
              <img
                src="img/static/left-panda.png"
                alt=""
                className="challenge-panda-left"
              />

              <img
                src="img/static/right-panda.png"
                alt=""
                className="challenge-panda-right"
              />
            </div>
          </div>
          <div className="section-title">
            <h1>
              <span>Learn</span> <span>with</span> <span>Kungfu</span>{" "}
              <span>Quiz!</span>
            </h1>
          </div>
          <div className="section-body">
            <p>
              Kungfu Quiz is a video-based quiz platform that takes a whole now
              level of learning. Utilise any YouTube videos or existing platform
              videos to create interactive quizzes that teachers, students, or
              any institution can create, share, and play. It&apos;s easy to use
              and makes learning exciting and fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
