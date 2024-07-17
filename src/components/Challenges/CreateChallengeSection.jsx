import React from "react";

const CreateChallengeSection = () => {
  return (
    <section id="content-wrapper">
      <div class="custom-container create-challenge-container">
        <div class="section-container type-small center">
          <div class="section-title">
            <h1>Create Your Challenge!</h1>
          </div>
        </div>

        <div class="quiz-main-container">
          <div class="quiz-video-container">
            <video
              id="video"
              src="/img/placeholder/placeholder-video.mp4"
            ></video>

            <img
              src="/img/static/play.png"
              alt="Play"
              class="play-btn"
              id="play-btn"
            />

            <div class="buttons">
              <div class="btn"></div>
              <div class="btn"></div>
            </div>
          </div>

          <div class="quiz-card-container">
            <h2 class="quiz-detail">Find Mari</h2>

            <h2 class="question">Where is Mari?</h2>

            <div class="quiz-options">
              {/* <div class="option">
                                <div class="checkbox">
                                    <input type="checkbox" checked>
                                    <div class="checkmark"></div>
                                </div>

                                <label for="option-1">Behind the bush</label>
                            </div>

                            <div class="option">
                                <div class="checkbox">
                                    <input type="checkbox">
                                    <div class="checkmark"></div>
                                </div>

                                <label for="option-2">Under the bush</label>
                            </div>

                            <div class="option">
                                <div class="checkbox">
                                    <input type="checkbox">
                                    <div class="checkmark"></div>
                                </div>

                                <label for="option-3">Inside the home</label>
                            </div>  */}

              <label class="_option_jogi6_18">
                <input class="_option--input_jogi6_36" type="checkbox" />
                <div class="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div class="slate-content">
                    <p>Behind the bush</p>
                  </div>
                </div>
              </label>

              <label class="_option_jogi6_18">
                <input class="_option--input_jogi6_36" type="checkbox" />
                <div class="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div class="slate-content">
                    <p>Under the bush</p>
                  </div>
                </div>
              </label>

              <label class="_option_jogi6_18">
                <input class="_option--input_jogi6_36" type="checkbox" />
                <div class="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                  <div class="slate-content">
                    <p>Inside the home</p>
                  </div>
                </div>
              </label>
            </div>

            <button class="kungfu-btn submit-btn">
              <img src="/img/static/buttonBg.svg" alt="Background" />
              <p class="btn-label">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateChallengeSection;
