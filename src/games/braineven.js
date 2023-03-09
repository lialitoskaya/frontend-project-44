import { runGameEngine } from '../index.js';
import randomNum from '../utils.js';

const randomNumber = () => randomNum(1, 50);

const isEven = (number) => (number % 2 !== 0 || number === 0 ? 'no' : 'yes');

const makeRound = () => {
  const questionNum = randomNumber();
  const question = `Question: ${questionNum}`;
  const correctAnsw = isEven(questionNum);

  return [question, correctAnsw];
};

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGameEngine(rules, makeRound);
};
export default brainEven;
