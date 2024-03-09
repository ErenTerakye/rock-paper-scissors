let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const menu = document.querySelector("#container");

menu.addEventListener('click', (event) => {
  playerSelection = event.target.textContent;
  playRound(playerSelection, computerSelection)
});

function getComputerChoice() {
  let randComputerChoice = Math.floor(Math.random() * 3);
  if (randComputerChoice === 0) {
    return "Rock";
  } else if (randComputerChoice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  let result = document.querySelector("#result");
  let score = document.querySelector("#score");

  if (playerSelection === computerSelection) {
    result.textContent = "Tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    result.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
    playerScore++;
  } else {
    result.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore++;
  }

  score.textContent = `Your score: ${playerScore} Computers score: ${computerScore}`;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}