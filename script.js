function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  if (randNum === 0) {
    return "rock";
  } else if (randNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerSelection;
let computerSelection = getComputerChoice();

let keepGoing = true;

while (keepGoing) {
  let playerChoice = prompt("Select a move (Rock / Paper / Scissors")
  playerChoice = playerChoice.toLowerCase();

  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    keepGoing = false;
    playerSelection = playerChoice;
  }
}