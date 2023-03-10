/* eslint-disable no-param-reassign */
import runGameEngine from '../index.js';
import getRandomInRange from '../utils.js';

const gcd = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const makeRound = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const correctAnswer = gcd(num1, num2).toString();
  const question = `Question: ${num1} ${num2}`;

  return [question, correctAnswer];
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runGameEngine(rules, makeRound);
};

export default brainGcd;
