import React, { useEffect } from "react";
import Header from "../components/common/Header";
import HeroSection from "../components/Challenges/HeroSection";
import ChallengesModes from "../components/Challenges/ChallengesModes";
import CreateChallengeSection from "../components/Challenges/CreateChallengeSection";
import Footer from "../components/Challenges/Footer";

const Challenges = () => {
  return (
    <div className="challenges">
      <Header />

      <div className="challenges-main-container">
        <HeroSection />

        <ChallengesModes />
      </div>

      <div className="challenges-bottom-cloud">
        <img src="/img/static/challenges-cloud-down.png" alt="" />
      </div>

      <CreateChallengeSection />

      <section className="make-learning-fun">
        <div className="custom-container">
          <div className="section-container type-small center">
            <div className="section-title">
              <h1>Make learning fun with Kungfu Quiz</h1>
            </div>
            <div className="section-link">
              <a href="#" className="co-btn">
                <span>Join Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Challenges;
