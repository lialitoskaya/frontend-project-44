import randomNum from '../utils.js';
import { question, runGameEngine } from '../index.js';

const primeNumberOrNo = () => {
  const questionNum = randomNum(1, 10);
  const numbers = `${question}${questionNum}`;
  let count = 0;
  let correctAnsw;
  if (questionNum === 1) {
    correctAnsw = 'no';
  }
  for (let i1 = 2; i1 <= questionNum; i1 += 1) {
    if (questionNum % i1 === 0) {
      count += 1;
    }
    correctAnsw = count > 1 ? 'no' : 'yes';
  }
  return [numbers, correctAnsw];
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRound = () => primeNumberOrNo();
  runGameEngine(rules, generateRound);
};

export default brainPrime;
