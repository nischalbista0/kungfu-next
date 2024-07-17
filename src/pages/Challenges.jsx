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

      <div class="challenges-main-container">
        <HeroSection />

        <ChallengesModes />
      </div>

      <div class="challenges-bottom-cloud">
        <img src="/img/static/challenges-cloud-down.png" alt="" />
      </div>

      <CreateChallengeSection />

      <section class="make-learning-fun">
        <div class="custom-container">
          <div class="section-container type-small center">
            <div class="section-title">
              <h1>Make learning fun with Kungfu Quiz</h1>
            </div>
            <div class="section-link">
              <a href="#" class="co-btn">
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
