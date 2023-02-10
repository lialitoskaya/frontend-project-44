import readlineSync from 'readline-sync';
import { welcome, hiUser, userName } from './index.js';

welcome();
hiUser();

const brain_even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionNum = Math.round(Math.random() * 100);
    const question = 'Question: ';
    console.log(`${question}${questionNum}`);
    const yesOrNo = ['yes', 'no'];
    const index = readlineSync.keyInSelect(yesOrNo);
    console.log(`Your answer: ${yesOrNo[index]}`);

    if (index === 1 && questionNum % 2 !== 0) {
      console.log('Correct!');
    }
    if (index === 0 && questionNum % 2 === 0) {
      console.log('Correct!');
    }
    if (index === 0 && questionNum % 2 !== 0) {
      console.log(`${yesOrNo[index]} is wrong answer ;(. Correct answer was ${yesOrNo[1]}.\nLet's try again, ${userName}!`);
      return;
    }
    if (index === 1 && questionNum % 2 === 0) {
      console.log(`${yesOrNo[index]} is wrong answer ;(. Correct answer was ${yesOrNo[1]}.\nLet's try again, ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

export default brain_even;
