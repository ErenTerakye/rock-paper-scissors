let playerSelection;
let computerSelection;

let menu = document.querySelector("#container");
menu.addEventListener('click', (event) => {
  playerSelection = event.target.textContent;
  playRound(playerSelection, computerSelection)
})

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

  if (playerSelection === computerSelection) {
    console.log("Tie!");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You Win! " + playerSelection + " beats " + computerSelection);
  } else {
    console.log("You Lose! " + computerSelection + " beats " + playerSelection);
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}