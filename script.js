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
  keepGoing = true;
  while (keepGoing) {
    let playerChoice = prompt("Select a move (Rock / Paper / Scissors)")
    playerChoice = capitalizeFirstLetter(playerChoice);
  
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
      keepGoing = false;
      playerSelection = playerChoice;
    }
  }

  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "Tie!"
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;

  function playRound(playerSelection, computerSelection) {
    keepGoing = true;
    while (keepGoing) {
      let playerChoice = prompt("Select a move (Rock / Paper / Scissors)")
      playerChoice = capitalizeFirstLetter(playerChoice);
    
      if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        keepGoing = false;
        playerSelection = playerChoice;
      }
    }
  
    computerSelection = getComputerChoice();
  
    if (playerSelection === computerSelection) {
      return "Tie!"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
  }

  for (let step = 0; step < 5; step++) {
    roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.charAt(4) === "W") {
      console.log(roundResult);
      playerScore++;
    } else if (roundResult.charAt(4) === "L") {
      console.log(roundResult);
      computerScore++;
    } else if (roundResult.charAt(0) === "T") {
      console.log(roundResult);
    } else {
      console.log("Error");
    }
  }

  if (playerScore > computerScore) {
    console.log("The winner is You!");
    console.log(playerScore);
    console.log(computerScore);
  } else if (playerScore < computerScore) {
    console.log("The winner is Computer!");
    console.log(playerScore);
    console.log(computerScore);
  } else if (playerScore === computerScore) {
    console.log("Tie!");
  } else {
    console.log("Error");
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let playerSelection;
let computerSelection;
let keepGoing;