import { runGameEngine } from '../index.js';
import randomNum from '../utils.js';

const gcd = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
      num1 %= num2;
    } else {
      // eslint-disable-next-line no-param-reassign
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const makeRound = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const correctAnsw = gcd(num1, num2);
  const question = `Question: ${num1} ${num2}`;

  return [question, correctAnsw.toString()];
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runGameEngine(rules, makeRound);
};

export default brainGcd;
