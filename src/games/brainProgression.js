import randomNum from '../utils.js';
import {
  question,
  congratulations,
  responseСomparison,
  comparisonResult,
} from './index.js';

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const x = randomNum(2, 6);
    const result = [];
    let questionNumbers = randomNum(1, 60);
    result.push(questionNumbers);
    const resultRandomProgression = randomNum(6, 10);
    for (let i1 = 0; i1 < resultRandomProgression; i1 += 1) {
      questionNumbers += x;
      result.push(questionNumbers);
    }
    const b = '..';
    const randomIndex = randomNum(0, result.length - 1);
    const correctAnsw = result.splice(randomIndex, 1, b).join();
    console.log(`${question} ${result.join(' ')}`);

    responseСomparison(correctAnsw);
    if (comparisonResult === false) {
      return;
    }
    i += 1;
    congratulations(i);
  }
};
export default brainProgression;
