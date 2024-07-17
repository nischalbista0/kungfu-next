import React, { useEffect } from "react";

const NinjaScrollSection = () => {
  return (
    <section className="ninja-scroll-container">
      <div className="ninja-scroll">
        <p className="scroll-desc">
          Youtube-based quizzes to master your learning.
        </p>

        <div className="scroll">
          <div className="left-scroll-handle">
            <img src="/img/static/left-scroll-handle.png" alt="" />
          </div>

          <div className="right-scroll-handle">
            <img src="/img/static/right-scroll-handle.png" alt="" />
          </div>

          <img src="/img/static/Frame.png" alt="Ninja Scroll" />

          <div className="video-container">
            <video id="video" src="" width="600"></video>
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
        <img src="/img/static/scroll-cloud-bottom.png" alt="Bottom Cloud" />
      </div>
    </section>
  );
};

export default NinjaScrollSection;
