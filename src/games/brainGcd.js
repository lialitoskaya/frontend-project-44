import { responseСomparison, question, congratulations } from './index.js';
import randomNum from '../utils.js';

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    let num = randomNum(1, 10);
    let num2 = randomNum(1, 10);
    let correctAnsw = 0;
    const questionNums = `${num} ${num2}`;
    console.log(`${question}${questionNums}`);

    while (num !== 0 && num2 !== 0) {
      if (num > num2) {
        num %= num2;
      } else {
        num2 %= num;
      }
      correctAnsw = num + num2;
    }
    if (responseСomparison(String(correctAnsw)) === false) {
      return;
    }
    i += 1;
    congratulations(i);
  }
};

export default brainGcd;
