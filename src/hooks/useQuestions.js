import { useState } from 'react';

export const useQuestions = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleNextQuestion = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedIndex(-1);
      setIsCorrect(null);
      setShowCorrectAnswer(false);
    }
  };

  const resetQuestions = () => {
    setCurrentQuestionIndex(0);
    setSelectedIndex(-1);
    setIsCorrect(null);
    setShowCorrectAnswer(false);
  };

  return {
    currentQuestion,
    selectedIndex,
    isCorrect,
    showCorrectAnswer,
    isLastQuestion,
    setSelectedIndex,
    setIsCorrect,
    setShowCorrectAnswer,
    handleNextQuestion,
    resetQuestions
  };
};

export default useQuestions