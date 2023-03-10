/* eslint-disable no-plusplus */
import getRandomInRange from '../utils.js';
import runGameEngine from '../index.js';

const progression = (firstNumber, step, length) => {
  const progressionNumbers = [];
  for (let i = 0; i < length; i++) {
    progressionNumbers.push(firstNumber + step * i);
  }
  return progressionNumbers;
};

const makeRound = () => {
  const step = getRandomInRange(2, 6);
  const firstNumber = getRandomInRange(1, 60);
  const length = getRandomInRange(6, 9);
  const questionProgression = progression(firstNumber, step, length);
  const hiddenIndex = getRandomInRange(0, questionProgression.length - 1);
  const correctAnswer = questionProgression[hiddenIndex];
  questionProgression[hiddenIndex] = '..';
  const question = `Question: ${questionProgression.join(' ')}`;
  return [question, `${correctAnswer}`];
};

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  runGameEngine(rules, makeRound);
};

export default brainProgression;
