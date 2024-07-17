import React from "react";

const ChallengesModes = () => {
  return (
    <section class="challenges-mode-container">
      <div class="custom-container">
        <div class="challenges-btns-container">
          <button
            class="challenge-btn challenge-btn-1 left"
            data-challenge="1"
            data-color="#6dcbd3"
          >
            Feedback Mode
          </button>
          <button
            class="challenge-btn challenge-btn-2 active"
            data-challenge="2"
            data-color="#fecd73"
          >
            Assessment Mode
          </button>
          <button
            class="challenge-btn challenge-btn-3 right"
            data-challenge="3"
            data-color="#f59495"
          >
            Game Mode
          </button>
        </div>

        <div class="active-status-container">
          <div class="active-status"></div>
        </div>

        <div class="challenges-container">
          <div class="challenge-item challenge-item-1 left" data-challenge="1">
            <img src="img/static/feedback-mode.png" alt="Feedback Mode" />
          </div>
          <div
            class="challenge-item challenge-item-2 active"
            data-challenge="2"
          >
            <img src="img/static/assessment-mode.png" alt="Assessment Mode" />
          </div>
          <div class="challenge-item challenge-item-3 right" data-challenge="3">
            <img src="img/static/game-mode.png" alt="Game Mode" />
          </div>
        </div>

        <div class="challenges-container height-placeholder">
          <div class="challenge-item">
            <img src="img/static/Panda.png" alt="Feedback Mode" />
          </div>
        </div>

        <div class="challenges-description-container">
          <p
            class="challenges-description challenge-description-1"
            data-challenge="1"
          >
            In Feedback Mode, users can provide and receive feedback to improve
            their skills through constructive criticism.
          </p>
          <p
            class="challenges-description challenge-description-2 active"
            data-challenge="2"
          >
            In this mode, Sifus can craft tailored challenges to assess their
            squad’s understanding of any topic. These challenges will test their
            skills and guide each Ka toward true mastery!
          </p>
          <p
            class="challenges-description challenge-description-3"
            data-challenge="3"
          >
            Game Mode turns learning into an engaging and competitive
            experience, allowing users to test their knowledge against others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChallengesModes;
