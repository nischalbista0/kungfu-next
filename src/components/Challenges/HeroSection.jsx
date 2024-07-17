import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="challenges-top-cloud">
        <img src="/img/static/challenges-cloud-up.png" alt="" />
      </div>

      <section className="create-challenge">
        <div className="custom-container">
          <div className="section-container type-small center">
            {/* <div className="section-title">
                            <h1 className="type-secondary-color">Create Your Challenge!</h1>
                        </div> */}

            <div className="section-title">
              <h1 className="type-secondary-color">
                <span>Create</span> <span>Your</span>
                <span>Challenge!</span>
              </h1>
            </div>
            <div className="section-body">
              <p>
                Select your video to customise the challenge questions using the
                available question types, set the passing threshold, and adjust
                the player limit. Create a unique learning experience for your
                squad!
              </p>
            </div>
          </div>

          <div className="image-container">
            <div className="left">
              <img src="/img/static/left-panda.png" alt="" />
            </div>

            <div className="center">
              <img src="/img/static/screen.png" alt="" />
            </div>

            <div className="right">
              <img src="/img/static/right-panda.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
