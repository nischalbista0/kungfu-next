import React from "react";

const HeroSection = () => {
  return (
    <>
      <div class="challenges-top-cloud">
        <img src="/img/static/challenges-cloud-up.png" alt="" />
      </div>

      <section class="create-challenge">
        <div class="custom-container">
          <div class="section-container type-small center">
            {/* <div class="section-title">
                            <h1 class="type-secondary-color">Create Your Challenge!</h1>
                        </div> */}

            <div class="section-title">
              <h1 class="type-secondary-color">
                <span>Create</span> <span>Your</span>
                <span>Challenge!</span>
              </h1>
            </div>
            <div class="section-body">
              <p>
                Select your video to customise the challenge questions using the
                available question types, set the passing threshold, and adjust
                the player limit. Create a unique learning experience for your
                squad!
              </p>
            </div>
          </div>

          <div class="image-container">
            <div class="left">
              <img src="/img/static/left-panda.png" alt="" />
            </div>

            <div class="center">
              <img src="/img/static/screen.png" alt="" />
            </div>

            <div class="right">
              <img src="/img/static/right-panda.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
