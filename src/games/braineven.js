import { responseСomparison, question, congratulations } from './index.js';
import randomNum from '../utils.js';

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionNum = randomNum(1, 50);
    console.log(`${question}${questionNum}`);
    const correctAnsw = questionNum % 2 !== 0 || questionNum === 0 ? 'no' : 'yes';
    if (responseСomparison(correctAnsw) === false) {
      return;
    }
    i += 1;
    congratulations(i);
  }
};
export default brainEven;
