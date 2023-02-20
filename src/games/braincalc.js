import readlineSync from 'readline-sync';
import randomNum from '../utils.js';
import {
  trueAnswer, question, answer, tryAgain, congratulations,
} from './index.js';
import { userName } from '../cli.js';

const brainCalc = () => {
  console.log('What is the result of the expression?');
  const operator = ['+', '-', '*'];
  let i = 0;
  while (i < 3) {
    const num = randomNum(1, 10);
    const num2 = randomNum(1, 10);
    const randomOperator = operator[randomNum(0, 2)];
    const questionExpression = `${num} ${randomOperator} ${num2}`;
    let correctAnsw;
    console.log(question + questionExpression);
    switch (randomOperator) {
      case '-':
        correctAnsw = num - num2;
        break;
      case '+':
        correctAnsw = num + num2;
        break;
      case '*':
        correctAnsw = num * num2;
        break;
    }
    const userAnswer = Number(readlineSync.question(answer));
    trueAnswer(correctAnsw, userAnswer);
    if (correctAnsw !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnsw}.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
    congratulations(i);
  }
};

export default brainCalc;
