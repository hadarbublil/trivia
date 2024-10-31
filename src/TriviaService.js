import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const convert = (question) => {
    return {
      question: question.question,
      answers: [...question.incorrect_answers, question.correct_answer],
      correctAnswer: question.correct_answer
    };
  };

export const fetchQuestions = async (amount = 10, category = 9, difficulty = 'easy', type = 'multiple') => {
  try {
    await delay(500); // Wait 500ms before making request
    const response = await axios.get(BASE_URL, {
      params: {
        amount,
        category,
        difficulty,
        type,
      },
    });
    return response.data.results.map(convert)
  } catch (err) {
    if (err.response?.status === 429) {
      throw new Error('Rate limit exceeded. Please try again in a few seconds.');
    }
    throw new Error(err.message || 'Failed to fetch questions');
  }
};