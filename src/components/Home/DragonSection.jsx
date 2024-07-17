import React from "react";

const DragonSection = () => {
  return (
    <section className="new-challenges">
      <div className="custom-container">
        <div className="section-container type-small center">
          <div className="section-title">
            <h1>Set New Challenges</h1>
          </div>
          <div className="section-body">
            <p>
              Kickstart your learner's journey with our interactive quizzes, and
              set challenges that encourage them to achieve more
            </p>
          </div>
        </div>
      </div>

      <div className="dragon-with-clouds">
        <div className="background-cloud">
          <img src="/img/static/dragon-bg-cloud.png" alt="Cloud" />
        </div>

        <div className="dragon-head">
          <img src="/img/static/dragon-head.png" alt="Dragon" />
        </div>

        <div className="dragon-tail">
          <img src="/img/static/dragon-tail.png" alt="Dragon" />

          <div className="tail-cloud-left">
            <img src="/img/static/tail_cloud_left.png" alt="Tail Cloud" />
          </div>

          <div className="tail-cloud-right">
            <img src="/img/static/tail-cloud-right.png" alt="Tail Cloud" />
          </div>
        </div>

        <div className="dragon-house">
          <img src="/img/static/dragon-house.png" alt="House" />
        </div>

        <div className="tail-cloud">
          <img src="/img/static/small-tail-cloud.png" alt="Tail Cloud" />
        </div>

        <div className="small-tail">
          <img src="/img/static/dragon-small-tail.png" alt="Tail" />
        </div>
      </div>
    </section>
  );
};

export default DragonSection;
