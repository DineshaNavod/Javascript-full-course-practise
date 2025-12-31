'use strict';

//Needed Global Veriables
let score = 20;
let highScore = 0;

//create secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//catch BTN and add Event Listner
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  if (guessNumber < 1 || guessNumber > 20) {
    changeMsg('Enter Correct Number ☹️');
    return;
  }

  if (score > 1) {
    if (!guessNumber) {
      changeMsg('No Number🥺');
    } else if (secretNumber == guessNumber) {
      document.querySelector('.check').disabled = true;
      changeMsg('Correct Number 😍');
      changeBack('green');
      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore').textContent = highScore;
    } else if (secretNumber > guessNumber) {
      changeMsg('Too Low 📉');
      if (score > 0) {
        score--;
      }
      printScore();
    } else if (secretNumber < guessNumber) {
      changeMsg('Too High 📈');
      if (score > 0) {
        score--;
      }
      printScore();
    }
  } else {
    if (score > 0) {
      score--;
    }
    printScore();
    changeBack('red');
    changeMsg('Lost The Game 👻');
  }
});

//again BTN function Impliment Here
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.check').disabled = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeBack('#222');
  score = 20;
  printScore();
  changeMsg('Start guessing...');
  document.querySelector('.guess').value = '';
});

//all Needed Function TO dry The Code
function changeMsg(massage) {
  document.querySelector('.message').textContent = massage;
}

function printScore() {
  document.querySelector('.score').textContent = score;
}

function changeBack(color) {
  document.querySelector('body').style.backgroundColor = color;
}
