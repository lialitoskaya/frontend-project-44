/* eslint-disable no-continue */
import readlineSync from "readline-sync";
import welcome, { userName } from "../cli.js";

export const question = "Question:";
export const answer = "Your answer ";
export const tryAgain = "\nLet's try again,";

const trueAnswer = (correctAnsw, userAnswer) => {
  if (correctAnsw === userAnswer) {
    console.log("Correct!");
  }
};

const congratulations = (i) => {
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

let comparisonResult;
const responseСomparison = (correctAnsw) => {
  const userAnswer = readlineSync.question(answer);
  if (correctAnsw === userAnswer) {
    console.log("Correct!");
    comparisonResult = true;
  } else {
    console.log(
      `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnsw}.${tryAgain} ${userName}!`
    );
    comparisonResult = false;
  }
};

export {
  trueAnswer,
  welcome,
  congratulations,
  responseСomparison,
  comparisonResult,
};
