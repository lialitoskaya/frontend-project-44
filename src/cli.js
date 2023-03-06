import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-mutable-exports

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// eslint-disable-next-line import/prefer-default-export
export default welcome;
