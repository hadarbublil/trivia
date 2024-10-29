import React, { useState } from "react";
import "./Question.css";
import questions from "../questions.json";

function Question({ handleSelectedItem, timer, endGame, setScore, score }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleAnswerClick = (ans, index) => {
    setSelectedIndex(index);
    setIsCorrect(ans === currentQuestion.correctAnswer);
    handleSelectedItem(ans);
    const correct = ans === currentQuestion.correctAnswer;
    setShowCorrectAnswer(!isCorrect);
    
    if (correct) {
      setScore((prevScore) => prevScore + 1); // Increment score if correct
    }

    // Automatically move to the next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(prevIndex => prevIndex + 1);
          setSelectedIndex(-1); // Reset selection for the next question
          setIsCorrect(null); // Reset correctness state
          setShowCorrectAnswer(false); // Hide correct answer display
      } else {
          endGame(); // End the game if it was the last question
      }
    }, 1000); 
  };

  return (
    <>
      <h2>{currentQuestion.question}</h2>
      <h3>Time Remaining: {timer} seconds</h3>
      <h3>Score: {score} points</h3>
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
