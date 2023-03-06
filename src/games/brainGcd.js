import { question, runGameEngine } from "../index.js";
import randomNum from "../utils.js";

const findGcdTwoRandomNum = () => {
  let num = randomNum(1, 10);
  let num2 = randomNum(1, 10);
  let correctAnsw = 0;
  const questionNums = `${num} ${num2}`;
  const numbers = `${question}${questionNums}`;

  while (num !== 0 && num2 !== 0) {
    if (num > num2) {
      num %= num2;
    } else {
      num2 %= num;
    }
    correctAnsw = num + num2;
  }
  return [numbers, correctAnsw.toString()];
};

const brainGcd = () => {
  const rules = "Find the greatest common divisor of given numbes.";
  const generateRound = () => findGcdTwoRandomNum();
  runGameEngine(rules, generateRound);
};

export default brainGcd;
