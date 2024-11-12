import { useState } from 'react';
import { fetchQuestions } from '../TriviaService';

export const useGameState = (initialTimer = 20) => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showCategories, setShowCategories] = useState(false)
  const [selectedCategoryId, setSelectedCategoryId] = useState(null); 

  const handleRestart = async (category) => {
    const fetchedQuestions = await fetchQuestions(10, category);
    setQuestions (fetchedQuestions)
    setShowQuestion(true);
    setGameOver(false);
    setScore(0);
    setShowCategories(false)
  };

  const handleGoHome = () => {
    setShowQuestion(false);
    setGameOver(false);
    setShowCategories(false)
  };

  const endGame = () => {
    setGameOver(true);
  };

  return {
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
  };
};

export default useGameState