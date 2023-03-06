import { question, runGameEngine } from '../index.js';
import randomNum from '../utils.js';

const randomNumEvenOrNo = () => {
  const questionNum = randomNum(1, 50);
  const number = `${question}${questionNum}`;
  const correctAnsw = questionNum % 2 !== 0 || questionNum === 0 ? 'no' : 'yes';
  return [number, correctAnsw];
};

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => randomNumEvenOrNo();
  runGameEngine(rules, generateRound);
};
export default brainEven;
