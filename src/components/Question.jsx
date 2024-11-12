import React from "react";
import { useQuestions } from "../hooks/useQuestions";

import AnswerButton from "./AnswerButton";
import "./Question.css";

const Question = ({questions, endGame, timer, setScore, score, categoryName }) => {
  const {
    currentQuestion,
    selectedIndex,
    isCorrect,
    showCorrectAnswer,
    isLastQuestion,
    setSelectedIndex,
    setIsCorrect,
    setShowCorrectAnswer,
    handleNextQuestion,
  } = useQuestions(questions);

  const handleAnswerClick = (answer, index) => {
    if (selectedIndex === -1) {
      setSelectedIndex(index);
      const correct = answer === currentQuestion.correctAnswer;
      setIsCorrect(correct);
      setShowCorrectAnswer(true);

      if (correct) {
        setScore((prev) => prev + 1);
      }

      setTimeout(() => {
        if (isLastQuestion) {
          endGame();
        } else {
          handleNextQuestion();
        }
      }, 1000);
    }
  };

  return (
    <>
      <h2>{currentQuestion.question}</h2>
      <h3>Category: {categoryName}</h3>
      <h3>Time Remaining: {timer} seconds</h3>
      <h3>Score: {score} points</h3>
      <div className="button-container">
        {currentQuestion.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            answer={answer}
            index={index}
            selectedIndex={selectedIndex}
            isCorrect={isCorrect}
            showCorrectAnswer={showCorrectAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onClick={() => handleAnswerClick(answer, index)}
          />
        ))}
      </div>
    </>
  );
};

export default Question;
