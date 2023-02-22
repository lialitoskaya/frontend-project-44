import randomNum from "../utils.js";
import {
  question,
  congratulations,
  responseСomparison,
  comparisonResult,
} from "./index.js";

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionNum = randomNum(1, 10);
    console.log(`${question}${questionNum}`);
    let count = 0;
    let correctAnsw;
    if (questionNum === 1) {
      correctAnsw = "no";
    }
    for (let i1 = 2; i1 <= questionNum; i1 += 1) {
      if (questionNum % i1 === 0) {
        count += 1;
      }
      correctAnsw = count > 1 ? "no" : "yes";
    }
    responseСomparison(correctAnsw);
    if (comparisonResult === false) {
      return;
    }
    i += 1;
    congratulations(i);
  }
};

export default brainPrime;
