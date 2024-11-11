import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const decodeHtml = (html) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(`<!doctype html><body>${html}`, 'text/html');
    return dom.body.textContent;
  };

export const convert = (question) => {
    return {
      question: decodeHtml(question.question),
      answers: [...question.incorrect_answers.map(decodeHtml), decodeHtml(question.correct_answer)],
      correctAnswer: decodeHtml(question.correct_answer)
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