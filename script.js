'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let newScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('🛑No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (newScore > highScore) {
      document.querySelector('.highscore').textContent = newScore;
      highScore = newScore;
    }

    //When guess is wrong
  } else if (guess != secretNumber) {
    if (newScore > 0) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      newScore--;
      document.querySelector('.score').textContent = newScore;
    } else {
      document.querySelector('.message').textContent = '🧨 you lost the game!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = newScore;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
