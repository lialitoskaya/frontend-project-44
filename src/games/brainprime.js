import readlineSync from 'readline-sync';
import randomNum from '../utils.js';
import {
  trueAnswer, question, answer, tryAgain, congratulations,
} from './index.js';
import { userName } from '../cli.js';

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionNum = randomNum(1, 10);
    console.log(`${question}${questionNum}`);

    let count = 0;
    let correctAnsw;

    for (let i1 = 2; i1 <= questionNum; i1 += 1) {
      if (questionNum % i1 === 0) {
        count += 1;
      }
      correctAnsw = count > 1 || questionNum === 1 ? 'no' : 'yes';
    }

    const userAnswer = readlineSync.question(answer);
    trueAnswer(correctAnsw, userAnswer);
    if (correctAnsw !== userAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnsw}.${tryAgain} ${userName}!`,
      );
      return;
    }
    i += 1;
    congratulations(i);
  }
};

export default brainPrime;
