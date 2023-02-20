import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-cycle
import {
  trueAnswer, question, answer, tryAgain, congratulations,
} from './index.js';
import { userName } from '../cli.js';
import randomNum from '../utils.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const questionNum = randomNum(1, 50);
    console.log(`${question}${questionNum}`);
    const userAnswer = readlineSync.question(answer);
    const correctAnsw = (questionNum % 2 !== 0 || questionNum === 0) ? 'no' : 'yes';
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
export default brainEven;
