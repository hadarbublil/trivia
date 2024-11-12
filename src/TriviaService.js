import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php';
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const decodeHtml = (html) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(`<!doctype html><body>${html}`, 'text/html');
    return dom.body.textContent;
  };

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const convert = (question) => {
    const answers = [...question.incorrect_answers.map(decodeHtml), decodeHtml(question.correct_answer)]
    shuffleArray(answers)
    return {
      question: decodeHtml(question.question),
      answers: answers,
      correctAnswer: decodeHtml(question.correct_answer)
    };
  };

export const fetchQuestions = async (amount = 10, category = 9, difficulty = 'easy', type = 'multiple') => {
  try {

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