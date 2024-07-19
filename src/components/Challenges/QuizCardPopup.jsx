import {
  userPointsAtom,
  submittedAnswersAtom,
  quizCompletionAtom,
} from "@/atoms/atoms";
import { useAtom } from "jotai";
import React, { useState, useEffect } from "react";

const QuizCardPopup = ({
  setShowPopup,
  showPopup,
  quizItem,
  play,
  allQuizzes,
}) => {
  const [userPoints, setUserPoints] = useAtom(userPointsAtom);
  const [submittedAnswers, setSubmittedAnswers] = useAtom(submittedAnswersAtom);
  const [quizCompletion, setQuizCompletion] = useAtom(quizCompletionAtom);
  const [selectedOption, setSelectedOption] = useState(null);
  const isSubmitted = submittedAnswers[quizItem.question];

  useEffect(() => {
    if (isSubmitted) {
      setSelectedOption(submittedAnswers[quizItem.question]);
    }
  }, [isSubmitted, submittedAnswers, quizItem.question]);

  const handleOptionChange = (event) => {
    if (!isSubmitted) {
      setSelectedOption(event.target.value);
    }
  };

  const handleSubmit = () => {
    if (!isSubmitted) {
      if (selectedOption === quizItem.correctAnswer) {
        setUserPoints(userPoints + 1);
      }
      setSubmittedAnswers({
        ...submittedAnswers,
        [quizItem.question]: selectedOption,
      });
    }

    setShowPopup(false);
    play();
  };

  // useEffect(() => {
  //   console.log(submittedAnswers);
  // }, [submittedAnswers]);

  return (
    <div className="quiz-card-main-container">
      <div className="quiz-card-container">
        <div className="quiz-card">
          <div className="quiz-qa">
            <h2 className="quiz-detail">{quizItem.title}</h2>
            <h2 className="question">{quizItem.question}</h2>

            <div className="quiz-options">
              {quizItem.options.map((option, index) => (
                <label key={index} className="_option_jogi6_18">
                  <input
                    className="_option--input_jogi6_36"
                    type="checkbox"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    disabled={isSubmitted}
                  />
                  <div className="_typography_kzf5d_17 _mediumBase_kzf5d_98">
                    <div className="slate-content">
                      <p>{option}</p>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <button className="kungfu-btn submit-btn" onClick={handleSubmit}>
            <img src="/img/static/buttonBg.svg" alt="Background" />
            <p className="btn-label">Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCardPopup;
