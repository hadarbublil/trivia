import { useState } from 'react';
// import { fetchQuestions } from '../TriviaService';
export const useGameState = (initialTimer = 20) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleRestart = () => {
    // fetchQuestions()
    setShowQuestion(true);
    setGameOver(false);
    setScore(0);
  };

  const handleGoHome = () => {
    setShowQuestion(false);
    setGameOver(false);
  };

  const endGame = () => {
    setGameOver(true);
  };

  return {
    showQuestion,
    gameOver,
    score,
    setScore,
    handleRestart,
    handleGoHome,
    endGame
  };
};

export default useGameState