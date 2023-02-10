import readlineSync from 'readline-sync';

export const welcome = () => { console.log('Welcome to the Brain Games!'); };
let userName = '';
const hiUser = () => {
  userName = readlineSync.question('May I have your name? ');
  const helloUser = (`Hello, ${userName}!`);
  console.log(helloUser);
};
export { userName };
export default hiUser;
