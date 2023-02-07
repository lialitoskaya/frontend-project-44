import readlineSync from 'readline-sync';

const hiUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  const helloUser = (`Hello, ${userName}!`);
  console.log(helloUser);
};
export default hiUser;
