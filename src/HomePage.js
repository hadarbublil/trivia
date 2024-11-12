import React from "react";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import { useGameState } from "./hooks/useGameState";
import { useTimer } from "./hooks/useTimer";
import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories"; // Ensure this import exists
// Assuming Categories is a component that takes `categories` as a prop

const HomePage = () => {
  const {
    questions,
    showQuestion,
    gameOver,
    score,
    setScore,
    handleRestart,
    handleGoHome,
    endGame,
    showCategories,
    setShowCategories,
    selectedCategoryId,
    setSelectedCategoryId
  } = useGameState();

  const { timer, resetTimer } = useTimer(20, endGame);

  const handleStart = () => {
    setShowCategories(true);
  };

  const handleChosenCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    startOver();
    
  };

  const startOver = () => {
    handleRestart(selectedCategoryId);
    resetTimer();
  }

 
 
  
  return (
    <div className="container">
      <Navbar />
      {!showQuestion && !showCategories ? (
        <WelcomeScreen onStart={handleStart} />
      ) : !showQuestion ? (
        <Categories
          handleChosenCategory={handleChosenCategory}
        />
      ) : (
        <div className="game-over-container">
          {gameOver ? (
            <GameOver
              score={score}
              handleRestart={startOver}
              handleGoHome={handleGoHome}
            />
          ) : (
            <Question
              questions={questions}
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
