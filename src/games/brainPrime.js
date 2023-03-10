import getRandomInRange from '../utils.js';
import runGameEngine from '../index.js';

const isPrime = (number) => {
  let count = 0;
  let correctAnswer;
  if (number === 1) {
    correctAnswer = true;
  }
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
    correctAnswer = count > 1;
  }
  return correctAnswer;
};

const makeRound = () => {
  const questionNumbers = getRandomInRange(1, 10);
  const correctAnswer = isPrime(questionNumbers) ? 'no' : 'yes';
  const question = `Question: ${questionNumbers}`;

  return [question, correctAnswer];
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(rules, makeRound);
};

export default brainPrime;
