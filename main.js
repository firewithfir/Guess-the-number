const MAX_NUMBER = 20;
const TOO_HIGH_DIFF_THRESHOLD = 6;
const TOO_LOW_DIFF_THRESHOLD = -6;
const HIGH_DIFF_THRESHOLD = 5;
const LOW_DIFF_THRESHOLD = -5;

let secretNumber = Math.ceil(MAX_NUMBER * Math.random());
let playerScore = MAX_NUMBER;
let highestScore = 0;

const clickHandler = () => {
  const inputValue = parseInt(document.getElementById('input-box').value, 10);
  if (isNaN(inputValue)) {
    updateElement('.number > span', 'Only Number', 'color: red; font-size: 3rem');
    return;
  }

  const difference = inputValue - secretNumber;
  console.log(difference);

  if (difference === 0) {
    updateHighScore();
    } else if (difference >= TOO_HIGH_DIFF_THRESHOLD) { updateScore('Too high!');
    } else if(difference <= HIGH_DIFF_THRESHOLD && difference >=1){
    updateScore('High!')
    } else if (difference <= TOO_LOW_DIFF_THRESHOLD) {
    updateScore('Too low!');
    } else {
    updateScore('low!');
    } 
  document.getElementById('input-box').value = '';
}

const button = document.getElementById('input-btn');
button.addEventListener('click', clickHandler);

const updateElement = (selector, text, style) => {
  const element = document.querySelector(selector);
  element.innerText = text;
  if (style) {
    element.style.cssText = style;
  }
};

const updateScore = (text) => {
  playerScore -= 1;
  updateElement('.label >.score', playerScore);
  updateElement('.number > span', text, 'animation: none; color:red;');
};

const updateHighScore = () => {
  updateElement('.number > span', secretNumber);
  if (highestScore < playerScore) {
    highestScore = playerScore;
    updateElement('.label-highscore > .highscore', highestScore);
  }
  document.body.style.cssText = 'background-color: #339f43; color: white;';
  document.querySelector('.number').style.cssText = 'background-color: #339f43;';
  document.querySelector('.number span').style.cssText = 'animation: none; color: #fff;';
  button.removeEventListener('click', clickHandler);
};

const resetGame = () => {
  playerScore = MAX_NUMBER;
  secretNumber = Math.ceil(MAX_NUMBER * Math.random());
  updateElement('.number > span', '?');
  updateElement('.label >.score', playerScore);
  document.body.style.cssText = '';
  document.querySelector('.number span').style.cssText = 'animation:';
  document.querySelector('.number').style.cssText = 'background-colo:';
  button.addEventListener('click', clickHandler);
};

document.querySelector('.container .again-btn').addEventListener('click', resetGame);