import runGameEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (number) => number % 2 === 0 && number !== 0;

const makeRound = () => {
  const questionNumber = getRandomInRange(1, 50);
  const question = `Question: ${questionNumber}`;
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(rules, makeRound);
};
export default brainEven;
