// Scores
const resultsDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
const winnerDiv = document.getElementById("winner");

let humanScore = 0;
let computerScore = 0;

function updateScore() {
  scoreDiv.textContent = `Score - You: ${humanScore} | computer: ${computerScore}`;
}

// Computer randomly picks rock, paper, or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

// Play a single round; returns true if round completed, false if draw
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `Draw! Both chose ${humanChoice}`;
    return;
  }

  if (humanScore === 5) {
    winnerDiv.textContent = "You win the game!";
  } else if (computerScore === 5) {
    winnerDiv.textContent = "Computer wins the game!";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} defeats ${computerChoice}`;
  } else {
    computerScore++;
    resultsDiv.textContent = `You lose! ${computerChoice} defeats ${humanChoice}`;
  }

  return true; // round completed
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

resultsDiv.textContent = "You Win!";

// Display final results
console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
if (humanScore > computerScore) {
  console.log("You Win the game! Congratulations!");
} else if (humanScore < computerScore) {
  console.log("You Lost! Computer Wins!");
} else {
  console.log("The game is a tie!");
}

// Start the game
playGame();
