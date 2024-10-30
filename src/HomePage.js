import React from 'react';
import Question from './components/Question';
import GameOver from './components/GameOver';
import { useGameState } from './hooks/useGameState';
import { useTimer } from './hooks/useTimer';
import WelcomeScreen from './components/WelcomeScreen'

const HomePage = () => {
  const {
    showQuestion,
    gameOver,
    score,
    setScore,
    handleRestart,
    handleGoHome,
    endGame
  } = useGameState();

  const { timer, resetTimer } = useTimer(20, endGame);

  const handleStart = () => {
    handleRestart();
    resetTimer();
  };

  return (
    <div className="container">
      {!showQuestion ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <div className="game-over-container">
          {gameOver ? (
            <GameOver
              score={score}
              handleRestart={handleStart}
              handleGoHome={handleGoHome}
            />
          ) : (
            <Question
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

export default HomePage