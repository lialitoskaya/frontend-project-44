import readlineSync from 'readline-sync';

const welcome = () => { console.log('Welcome to the Brain Games!'); };

let userName = '';
const hiUser = () => {
  userName = readlineSync.question('May I have your name? ');
  const helloUser = (`Hello, ${userName}!`);
  console.log(helloUser);
};

const question = 'Question: ';
const answer = 'Your answer ';
const tryAgain = "\nLet's try again,";

const brain_even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;

  while (i < 3) {
    const questionNum = Math.round(Math.random() * 100);

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
    const randomNum = Math.round(Math.random() * 50);
    const randomNum2 = Math.round(Math.random() * 50);
    const randomOperator = operator[Math.round(Math.random() * 3)];
    const questionExpression = `${randomNum} ${randomOperator} ${randomNum2}`;

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

export {
  brain_even, userName, hiUser, welcome, brain_calc,
};
