import welcome, { userName } from '../cli.js';

export const question = 'Question: ';
export const answer = 'Your answer ';
export const tryAgain = "\nLet's try again,";

const trueAnswer = (correctAnsw, userAnswer) => {
  if (correctAnsw === userAnswer) {
    console.log('Correct!');
  }
};

const congratulations = (i) => {
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export { trueAnswer, welcome, congratulations };
