import { runGameEngine } from "../index.js";
import randomNum from "../utils.js";

const getRandomOperator = () => {
  const operator = ["+", "-", "*"];
  return operator[randomNum(0, operator.length)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    default:
      return null;
  }
};

const makeRound = () => {
  const num1 = randomNum(1, 10);
  const num2 = randomNum(1, 10);
  const operator = getRandomOperator();
  const correctAnsw = calculation(num1, num2, operator);

  const question = `Question: ${num1} ${operator} ${num2}`;

  return [question, correctAnsw.toString()];
};

const brainCalc = () => {
  const rules = "What is the result of the expression?";
  runGameEngine(rules, makeRound);
};

export default brainCalc;
