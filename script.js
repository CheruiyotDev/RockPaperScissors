let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}
console.log(getComputerChoice())


function getHumanChoice() {
  let num = Number(prompt("enter a number"))
  return num
}
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {

}

function playGame() {
  const computerMove = getComputerChoice();

  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove == 'rock') {
      result = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }
  }
}