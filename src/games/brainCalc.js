import runGameEngine from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOperator = () => {
  const operator = ['+', '-', '*'];
  return operator[getRandomInRange(0, operator.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator ${operator} - is incorrect!`);
  }
};

const makeRound = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const operator = getRandomOperator();
  const correctAnswer = calculation(num1, num2, operator);

  const question = `Question: ${num1} ${operator} ${num2}`;

  return [question, `${correctAnswer}`];
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  runGameEngine(rules, makeRound);
};

export default brainCalc;
