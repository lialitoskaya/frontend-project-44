import readlineSync from 'readline-sync';

export const question = 'Question: ';

const runGameEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [numbers, correctAnsw] = generateRound();
    console.log(numbers);
    const userAnswer = readlineSync.question('Your answer ');

    if (userAnswer === correctAnsw) {
      console.log('Correct!');
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnsw}.\nLet's try again, ${userName}!`,
      );
      return;
    }
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export { runGameEngine };
