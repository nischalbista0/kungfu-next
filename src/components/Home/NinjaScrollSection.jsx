import React, { useEffect } from "react";
import gsap from "gsap";

const NinjaScrollSection = () => {
  useEffect(() => {
    // GSAP animation for .left-scroll-handle and .right-scroll-handle
    gsap.fromTo(
      ".left-scroll-handle",
      { x: "-19%" },
      { x: "0%", duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".right-scroll-handle",
      { x: "19%" },
      { x: "0%", duration: 1, ease: "power2.out" }
    );

    const playBtn = document.getElementById("play-btn");
    const video = document.getElementById("video");

    const handlePlay = () => {
      video.play();
      playBtn.style.display = "none"; // Hide play button once the video starts
    };

    const handleVideoClick = () => {
      if (!video.paused) {
        video.pause();
        playBtn.style.display = "block";
      }
    };

    const handleVideoEnd = () => {
      playBtn.style.display = "block";
    };

    playBtn.addEventListener("click", handlePlay);
    video.addEventListener("click", handleVideoClick);
    video.addEventListener("ended", handleVideoEnd);

    // Cleanup event listeners on component unmount
    return () => {
      playBtn.removeEventListener("click", handlePlay);
      video.removeEventListener("click", handleVideoClick);
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <section className="ninja-scroll-container">
      <div className="ninja-scroll">
        <div className="scroll-desc">
          <h1>Youtube-based quizzes</h1>
          <p>
            Strengthen your understanding and achieve mastery in your learning
            journey.
          </p>
        </div>

        <div className="scroll">
          <div className="left-scroll-handle">
            <img src="/img/static/left-scroll-handlee.png" alt="" />
          </div>

          <div className="right-scroll-handle">
            <img src="/img/static/right-scroll-handlee.png" alt="" />
          </div>

          <img src="/img/static/Frame.png" alt="Ninja Scroll" />

          <div className="video-container">
            <video
              id="video"
              src=""
              // src="/img/placeholder/placeholder-video.mp4"
              width="600"
            ></video>
            <img
              src="/img/static/play.png"
              alt="Play"
              className="play-btn"
              id="play-btn"
            />
          </div>
        </div>
      </div>

      <div className="bottom-cloud">
        <img src="/img/static/scroll-bottom-cloud.png" alt="Bottom Cloud" />
      </div>
    </section>
  );
};

export default NinjaScrollSection;
