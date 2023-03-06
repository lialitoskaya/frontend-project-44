import randomNum from '../utils.js';
import { question, runGameEngine } from '../index.js';

const rules = 'What number is missing in the progression?';

const randomProgression = () => {
  const x = randomNum(2, 6);
  let lastNumberProgression = randomNum(1, 60);
  const lengthProgression = randomNum(6, 9);

  const questionNum = [];
  questionNum.push(lastNumberProgression);

  for (let i1 = 0; i1 < lengthProgression; i1 += 1) {
    lastNumberProgression += x;
    questionNum.push(lastNumberProgression);
  }
  const b = '..';
  const randomIndex = randomNum(0, questionNum.length - 1);
  const correctAnsw = questionNum.splice(randomIndex, 1, b).join();
  const numbersProgression = `${question}${questionNum.join(' ')}`;
  return [numbersProgression, correctAnsw];
};

const brainProgression = () => {
  const generateRound = () => randomProgression();
  runGameEngine(rules, generateRound);
};

export default brainProgression;
