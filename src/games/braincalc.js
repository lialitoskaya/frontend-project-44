import {
  question,
  congratulations,
  responseСomparison,
  comparisonResult,
} from './index.js';
import randomNum from '../utils.js';

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
      default:
        correctAnsw = null;
    }

    responseСomparison(String(correctAnsw));
    if (comparisonResult === false) {
      return;
    }
    i += 1;
    congratulations(i);
  }
};

export default brainCalc;
