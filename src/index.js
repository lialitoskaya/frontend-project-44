import readlineSync from 'readline-sync';

const welcome = () => { console.log('Welcome to the Brain Games!'); };

let userName = '';
const hiUser = () => {
  userName = readlineSync.question('May I have your name? ');
  const helloUser = (`Hello, ${userName}!`);
  console.log(helloUser);
};

const randomNum = () => Math.round(Math.random() * 50);
const question = 'Question: ';
const answer = 'Your answer ';
const tryAgain = "\nLet's try again,";

const brain_even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const questionNum = randomNum();
    console.log(`${question}${questionNum}`);
    const userAnswer = readlineSync.question(answer);

    const correctAnsw = (questionNum % 2 !== 0) ? 'no' : 'yes';

    if (correctAnsw === userAnswer) { console.log('Correct!'); } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnsw}.${tryAgain} ${userName}!`);
      return;
    }

    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

const brain_calc = () => {
  console.log('What is the result of the expression?');

  const operator = ['+', '-', '*'];

  let i = 0;
  while (i < 3) {
    const num = randomNum();
    const num2 = randomNum();
    const randomOperator = operator[Math.round(Math.random() * 3)];
    const questionExpression = `${num} ${randomOperator} ${num2}`;

    console.log(question + questionExpression);

    const correctNum = eval(questionExpression);
    const userAnswer = Number(readlineSync.question(answer));

    if (userAnswer === correctNum) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctNum}.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let i = 0;
  while (i < 3) {
    let num = randomNum();
    let num2 = randomNum();
    let correctNum = 0;
    const questionNums = `${num} ${num2}`;
    console.log(`${question}${questionNums}`);

    const userAnswer = Number(readlineSync.question(answer));

    while (num !== 0 && num2 !== 0) {
      if (num > num2) {
        num %= num2;
      } else {
        num2 %= num;
      }
      correctNum = num + num2;
    }
    i++;
    if (correctNum === userAnswer) { console.log('Correct!'); } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctNum}'.${tryAgain} ${userName}!`);
      return;
    }
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const x = Math.round(Math.random() * 4) + 2;
    const result = [];
    let c = randomNum();
    result.push(c);

    let i1 = 0;
    while (i1 < 9) {
      c += x;
      result.push(c);
      i1 += 1;
    }
    const b = '..';
    const randomIndex = Math.round(Math.random() * 9);
    const correctNum = result.splice(randomIndex, 1, b).join();
    console.log(`${question} ${result.join(', ')}`);
    const userAnswer = readlineSync.question(answer);

    if (correctNum === userAnswer) { console.log('Correct!'); } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctNum}'.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`); }
};

export {
  brain_even, userName, hiUser, welcome, brain_calc, brainGcd, brainProgression,
};
