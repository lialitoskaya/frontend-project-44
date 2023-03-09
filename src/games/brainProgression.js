import randomNum from "../utils.js";
import { runGameEngine } from "../index.js";

const progression = (firstNumber, x, length) => {
  const progressionNumbers = [];
  progressionNumbers.push(firstNumber);
  let lastNumber = firstNumber;
  for (let i1 = 0; i1 < length; i1 += 1) {
    lastNumber += x;
    progressionNumbers.push(lastNumber);
  }
  return progressionNumbers;
};

const encryptNumber = (array, index) => {
  const b = "..";
  array.splice(index, 1, b).join();
  return array.join(" ");
};

const makeRound = () => {
  const x = randomNum(2, 6);
  const firstNumber = randomNum(1, 60);
  const length = randomNum(6, 9);
  const questionNum = progression(firstNumber, x, length);
  const index = randomNum(0, questionNum.length - 1);
  const correctAnsw = questionNum[index];
  const question = `Question: ${encryptNumber(questionNum, index)}`;
  return [question, correctAnsw.join()];
};

const brainProgression = () => {
  const rules = "What number is missing in the progression?";
  runGameEngine(rules, makeRound);
};

export default brainProgression;
