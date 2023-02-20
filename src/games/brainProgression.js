import readlineSync from 'readline-sync';
import randomNum from '../utils.js';
import {
  trueAnswer, question, answer, tryAgain, congratulations,
} from './index.js';
import { userName } from '../cli.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const x = randomNum(2, 6);
    const result = [];
    let questionNumbers = randomNum(1, 60);
    result.push(questionNumbers);

    let i1 = 0;
    while (i1 < 9) {
      questionNumbers += x;
      result.push(questionNumbers);
      i1 += 1;
    }
    const b = '..';
    const randomIndex = randomNum(1, 10);
    const correctAnsw = result.splice(randomIndex, 1, b).join();
    console.log(`${question} ${result.join(', ')}`);
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
export default brainProgression;
