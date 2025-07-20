function getComputerChoice() {
  let choiceComputer = Math.floor(Math.random() * 3);

  if (choiceComputer === 0) {
    return "rock";
  } else if (choiceComputer === 1) {
    return "paper";
  } else if (choiceComputer === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choiceHuman = prompt("Choose rock, paper, or scissors");
  choiceHuman = choiceHuman.toLowerCase();

  if (choiceHuman == "rock") {
    return "rock";
  } else if (choiceHuman == "paper") {
    return "paper";
  } else if (choiceHuman == "scissors") {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("Draw! Round will be replayed");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("Computer Wins!");
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You Win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You Win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("Draw! Round will be replayed");
      playRound(getHumanChoice(), getComputerChoice());
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("Computer Wins!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("Computer Wins!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You Win!");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("Draw! Round will be replayed");
      playRound(getHumanChoice(), getComputerChoice());
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log("You Win the game! Congradulations!");
  } else if (humanScore < computerScore) {
    console.log("You Lost! Computer Wins!");
  }
}

playGame();
