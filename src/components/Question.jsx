import React, { useState } from "react";
import "./Question.css";
import questions from "../questions.json";

function Question({ handleSelectedItem }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (ans, index) => {
    setSelectedIndex(index);
    setIsCorrect(ans === currentQuestion.correctAnswer);
    handleSelectedItem(ans);
    setShowCorrectAnswer(!isCorrect);

    // Automatically move to the next question after a delay
    setTimeout(() => {
      setCurrentQuestionIndex(
        (prevIndex) => (prevIndex + 1) % questions.length
      );
      setSelectedIndex(-1); // Reset selection for the next question
      setIsCorrect(null); // Reset correctness state
      setShowCorrectAnswer(false);
    }, 1000); // Adjust delay as needed
  };

  return (
    <>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.answers.length === 0 && <p>No items found</p>}
      <div className="button-container">
        {currentQuestion.answers.map((ans, index) => (
          <div className="button-wrapper" key={index}>
            <li
              className={`list-group-item ${
                selectedIndex === index
                  ? isCorrect
                    ? "correct-answer"
                    : "incorrect-answer showCorrectAnswer"
                  : ""
              } ${
                showCorrectAnswer && ans === currentQuestion.correctAnswer
                  ? "highlight-correct-answer"
                  : ""
              }`}
              onClick={() => handleAnswerClick(ans, index)}
            >
              {ans}
            </li>
          </div>
        ))}
      </div>
    </>
  );
}

export default Question;
