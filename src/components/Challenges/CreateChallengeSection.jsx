import React from "react";

const CreateChallengeSection = () => {
  return (
    <section id="content-wrapper">
      <div className="custom-container create-challenge-container">
        <div className="section-container type-small center">
          <div className="section-title">
            <h1>Create Your Challenge!</h1>
          </div>
        </div>

        <div className="quiz-main-container">
          <div className="quiz-video-container">
            <video
              id="video"
              src="/img/placeholder/placeholder-video.mp4"
            ></video>

            <img
              src="/img/static/play.png"
              alt="Play"
              className="play-btn"
              id="play-btn"
            />

            <div className="buttons">
              <div className="btn"></div>
              <div className="btn"></div>
            </div>
          </div>

          <div className="quiz-card-container">
            <h2 className="quiz-detail">Find Mari</h2>

            <h2 className="question">Where is Mari?</h2>

            <div className="quiz-options">
              {/* <div className="option">
                                <div className="checkbox">
                                    <input type="checkbox" checked>
                                    <div className="checkmark"></div>
                                </div>

                                <label for="option-1">Behind the bush</label>
                            </div>

                            <div className="option">
                                <div className="checkbox">
                                    <input type="checkbox">
                                    <div className="checkmark"></div>
                                </div>

                                <label for="option-2">Under the bush</label>
                            </div>

                            <div className="option">
                                <div className="checkbox">
                                    <input type="checkbox">
                                    <div className="checkmark"></div>
                                </div>

                                <label for="option-3">Inside the home</label>
                            </div>  */}

              <label className="_option_jogi6_18">
                <input className="_option--input_jogi6_36" type="checkbox" />
                <div className="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div className="slate-content">
                    <p>Behind the bush</p>
                  </div>
                </div>
              </label>

              <label className="_option_jogi6_18">
                <input className="_option--input_jogi6_36" type="checkbox" />
                <div className="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div className="slate-content">
                    <p>Under the bush</p>
                  </div>
                </div>
              </label>

              <label className="_option_jogi6_18">
                <input className="_option--input_jogi6_36" type="checkbox" />
                <div className="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div className="slate-content">
                    <p>Inside the home</p>
                  </div>
                </div>
              </label>
            </div>

            <button className="kungfu-btn submit-btn">
              <img src="/img/static/buttonBg.svg" alt="Background" />
              <p className="btn-label">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateChallengeSection;
