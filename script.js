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

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let playerSelection;
let computerSelection = getComputerChoice();

let keepGoing = true;

while (keepGoing) {
  let playerChoice = prompt("Select a move (Rock / Paper / Scissors)")
  playerChoice = capitalizeFirstLetter(playerChoice);

  if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
    keepGoing = false;
    playerSelection = playerChoice;
  }
}