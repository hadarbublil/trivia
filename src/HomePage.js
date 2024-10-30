import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Question from "./components/Question";
import question_mark from "./images/question_mark.jpg";
import GameOver from "./components/GameOver";

const HomePage = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const handleSelectedItem = (item) => console.log(item);

  const [timer, setTimer] = useState(20);
  const [gameOver, setGameOver] = useState(false);

  const startTimer = () => {
    setTimer(5);
  };

  const handleRestart = () => {
    setShowQuestion(true);
    setGameOver(false);
    startTimer();
    setScore(0);
  };

  const handleGoHome = () => {
    setShowQuestion(false);
    setGameOver(false); 
  };

  const endGame = () => {
    setGameOver(true); 
    clearInterval(timer); 
  };

  useEffect(() => {
    if (timer < 0) {
      endGame();
      return;
    }

    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]); 

  const [score, setScore] = useState(0);

  return (
    <div className="container">
      {!showQuestion ? (
        <>
          <h1 id="headline"> MyTrivia</h1>
          <img className="question-mark" src={question_mark}></img>
          <h3>Are you ready to start? </h3>
          <button className="btn" id="yes" onClick={handleRestart}>
            Yes
          </button>
        </>
      ) : (
        <div className="game-over-container">
          {" "}
          {gameOver ? (
            <GameOver
                score = {score}
                handleRestart = {handleRestart}
                handleGoHome = {handleGoHome}   
            />
          ) : (
            <Question
              handleSelectedItem={handleSelectedItem}
              endGame={endGame}                       
              timer={timer} 
              setScore={setScore}
              score={score}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
