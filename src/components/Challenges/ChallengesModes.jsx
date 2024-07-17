import React, { useEffect, useRef } from "react";

const ChallengesModes = () => {
  const buttonsRef = useRef([]);
  const activeStatusRef = useRef(null);

  useEffect(() => {
    const buttons = buttonsRef.current;
    const activeStatus = activeStatusRef.current;

    const handleClick = (e) => {
      const clickedBtn = e.currentTarget;
      const isLeft = clickedBtn.classList.contains("left");
      const activeBtn = document.querySelector(".challenge-btn.active");
      const activeItem = document.querySelector(".challenge-item.active");
      const activeDescription = document.querySelector(
        ".challenges-description.active"
      );

      // Update the active-status background color
      const newColor = clickedBtn.getAttribute("data-color");
      activeStatus.style.backgroundColor = newColor;

      if (activeBtn === clickedBtn) return;

      // Description change logic
      const newDescription = document.querySelector(
        `.challenges-description[data-challenge="${clickedBtn.getAttribute(
          "data-challenge"
        )}"]`
      );
      if (activeDescription !== newDescription) {
        activeDescription.classList.remove("active");
        newDescription.classList.add("active");
      }

      // Update z-index for challenges
      activeItem.style.zIndex = "1"; // Decrease z-index of previous active item
      const newItem = document.querySelector(
        `.challenge-item[data-challenge="${clickedBtn.getAttribute(
          "data-challenge"
        )}"]`
      );
      newItem.style.zIndex = "2"; // Increase z-index of new active item

      if (isLeft) {
        switchClasses(activeBtn, clickedBtn, "left");
        switchClasses(
          activeItem,
          document.querySelector(".challenge-item.left"),
          "left"
        );
      } else {
        switchClasses(activeBtn, clickedBtn, "right");
        switchClasses(
          activeItem,
          document.querySelector(".challenge-item.right"),
          "right"
        );
      }
    };

    function switchClasses(activeElement, newActiveElement, className) {
      activeElement.classList.remove("active");
      activeElement.classList.add(className);
      newActiveElement.classList.remove(className);
      newActiveElement.classList.add("active");
    }

    buttons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <section className="challenges-mode-container">
      <div className="custom-container">
        <div className="challenges-btns-container">
          <button
            className="challenge-btn challenge-btn-1 left"
            data-challenge="1"
            data-color="#6dcbd3"
            ref={(el) => (buttonsRef.current[0] = el)}
          >
            Feedback Mode
          </button>
          <button
            className="challenge-btn challenge-btn-2 active"
            data-challenge="2"
            data-color="#fecd73"
            ref={(el) => (buttonsRef.current[1] = el)}
          >
            Assessment Mode
          </button>
          <button
            className="challenge-btn challenge-btn-3 right"
            data-challenge="3"
            data-color="#f59495"
            ref={(el) => (buttonsRef.current[2] = el)}
          >
            Game Mode
          </button>
        </div>

        <div className="active-status-container">
          <div className="active-status" ref={activeStatusRef}></div>
        </div>

        <div className="challenges-container">
          <div
            className="challenge-item challenge-item-1 left"
            data-challenge="1"
          >
            <img src="img/static/feedback-mode.png" alt="Feedback Mode" />
          </div>
          <div
            className="challenge-item challenge-item-2 active"
            data-challenge="2"
          >
            <img src="img/static/assessment-mode.png" alt="Assessment Mode" />
          </div>
          <div
            className="challenge-item challenge-item-3 right"
            data-challenge="3"
          >
            <img src="img/static/game-mode.png" alt="Game Mode" />
          </div>
        </div>

        <div className="challenges-container height-placeholder">
          <div className="challenge-item">
            <img src="img/static/Panda.png" alt="Feedback Mode" />
          </div>
        </div>

        <div className="challenges-description-container">
          <p
            className="challenges-description challenge-description-1"
            data-challenge="1"
          >
            In Feedback Mode, users can provide and receive feedback to improve
            their skills through constructive criticism.
          </p>
          <p
            className="challenges-description challenge-description-2 active"
            data-challenge="2"
          >
            In this mode, Sifus can craft tailored challenges to assess their
            squad’s understanding of any topic. These challenges will test their
            skills and guide each Ka toward true mastery!
          </p>
          <p
            className="challenges-description challenge-description-3"
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
