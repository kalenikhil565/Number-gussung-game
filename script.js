let generatedNumber = Math.trunc(Math.random() * 100) + 1;
let check = document.querySelector('.check');
let score = 10;
let highScore = 0;

let message = function (msg) {
  document.querySelector('.message').textContent = msg;
};

check.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('please enter a number');
  } else if (guess !== generatedNumber) {
    if (score > 1) {
      message(
        guess > generatedNumber ? 'number is too high!!' : 'number is too low!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('you loose');
    }
  } else if (guess == generatedNumber) {
    message('Youre correct !!');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').textContent = generatedNumber;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  generatedNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '10';
});
