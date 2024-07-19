import React from "react";

const ChallengesModesNew = () => {
  return (
    <div className="challenges-modes-new" id="content-wrapper">
      <h1 className="type-secondary-color">Modes</h1>

      <div className="challenges-modes">
        <div className="challenge-mode">
          <div className="image-container challenge-item-1">
            <img src="img/static/feedback-mode.png" alt="" />
          </div>

          <div className="detail-container">
            <h2>Feedback Mode</h2>

            <p>
              In this mode, Sifus can create custom challenges and provide the
              correct answers afterward, assisting their squad in learning and
              mastering complex topics.
            </p>
          </div>
        </div>

        <div className="challenge-mode">
          <div className="image-container challenge-item-3">
            <img src="img/static/game-mode.png" alt="" />
          </div>

          <div className="detail-container">
            <h2>Game Mode</h2>

            <p>
              In this mode, Sifus can design custom challenges to share with
              their squad, while an engaging leaderboard awaits at the end to
              showcase their mastery and competitive spirit!{" "}
            </p>
          </div>
        </div>

        <div className="challenge-mode">
          <div className="image-container challenge-item-2">
            <img src="img/static/assessment-mode.png" alt="" />
          </div>

          <div className="detail-container">
            <h2>Assessment Mode</h2>

            <p>
              In this mode, Sifus can craft tailored challenges to assess their
              squad&apos;s understanding of any topic. These challenges will
              test their skills and guide each Ka toward true mastery!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesModesNew;
