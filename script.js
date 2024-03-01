function getComputerChoice() {
  let randComputerChoice = Math.floor(Math.random() * 3);
  if (randComputerChoice === 0) {
    return "rock";
  } else if (randComputerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerSelection;
let computerSelection = getComputerChoice();

let keepGoing = true;

while (keepGoing) {
  let playerChoice = prompt("Select a move (Rock / Paper / Scissors)")
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    keepGoing = false;
    playerSelection = playerChoice;
  }
}