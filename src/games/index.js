import readlineSync from 'readline-sync';

const welcome = () => { console.log('Welcome to the Brain Games!'); };

let userName = '';
const hiUser = () => {
  userName = readlineSync.question('May I have your name? ');
  const helloUser = (`Hello, ${userName}!`);
  console.log(helloUser);
  return;
};

const randomNum = () => Math.round(Math.random() * 50);
const question = 'Question: ';
const answer = 'Your answer ';
const tryAgain = "\nLet's try again,";

const brainEven = () => {
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
  if (i === 3) { console.log(`Congratulations, ${userName}!`);
  return }
};

const brainCalc = () => {
  console.log('What is the result of the expression?');

  const operator = ['+', '-', '*'];

  let i = 0;
  while (i < 3) {
    const num = randomNum();
    const num2 = randomNum();
    const randomOperator = operator[Math.round(Math.random() * 2)];
    const questionExpression = `${num} ${randomOperator} ${num2}`;
    let correctNum;

    console.log(question + questionExpression);

    if (randomOperator === '-'){correctNum = num - num2};
    if (randomOperator === '+'){correctNum = num + num2};
    if (randomOperator === '*'){correctNum = num * num2};

    const userAnswer = Number(readlineSync.question(answer));

    if (userAnswer === correctNum) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctNum}.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`);
  return }
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
  if (i === 3) { console.log(`Congratulations, ${userName}!`);
  return }
};

const brainProgression = () => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const x = Math.round(Math.random() * 4) + 2;
    const result = [];
    let questionNumbers = randomNum();
    result.push(questionNumbers);

    let i1 = 0;
    while (i1 < 9) {
      questionNumbers += x;
      result.push(questionNumbers);
      i1 += 1;
    }
    const b = '..';
    const randomIndex = Math.round(Math.random() * 9);
    const correctNum = result.splice(randomIndex, 1, b).join();
    console.log(`${question} ${result.join(', ')}`);
    const userAnswer = readlineSync.question(answer);

    if (correctNum === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctNum}'.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`);
  return }
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const questionNum = randomNum();
    console.log(`${question}${questionNum}`);

    let count = 0;
    let correctAnsw;

    for (let i1 = 2; i1 <= questionNum; i1 += 1) {
      if (questionNum % i1 === 0) {
        count += 1;
      }
      correctAnsw = (count > 1 || questionNum === 1) ? 'no' : 'yes';
    }

    const userAnswer = readlineSync.question(answer);

    if (correctAnsw === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnsw}'.${tryAgain} ${userName}!`);
      return;
    }
    i += 1;
  }
  if (i === 3) { console.log(`Congratulations, ${userName}!`);
  return }
};

export {
  brainEven, userName, hiUser, welcome, brainCalc, brainGcd, brainProgression, brainPrime,
};
