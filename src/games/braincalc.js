import { question, runGameEngine } from '../index.js';
import randomNum from '../utils.js';

const calc = () => {
  const operator = ['+', '-', '*'];

  const num = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const randomOperator = operator[randomNum(0, 2)];
  const questionExpression = `${question}${num} ${randomOperator} ${num2}`;
  let correctAnsw;
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
  return [questionExpression, correctAnsw.toString()];
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  const generateRound = () => calc();
  runGameEngine(rules, generateRound);
};

export default brainCalc;
