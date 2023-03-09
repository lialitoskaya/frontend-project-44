import randomNum from '../utils.js';
import { runGameEngine } from '../index.js';

const randomNumber = () => randomNum(1, 10);

const isPrime = (number) => {
  let count = 0;
  let correctAnswer;
  if (number === 1) {
    correctAnswer = 'no';
  }
  for (let i = 2; i <= number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
    correctAnswer = count > 1 ? 'no' : 'yes';
  }
  return correctAnswer;
};

const makeRound = () => {
  const questionNum = randomNumber();
  const correctAnsw = isPrime(questionNum);
  const question = `Question: ${questionNum}`;

  return [question, correctAnsw];
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGameEngine(rules, makeRound);
};

export default brainPrime;
