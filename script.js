// Scores
let humanScore = 0;
let computerScore = 0;

// Computer randomly picks rock, paper, or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * 3);
  return choices[index];
}

// Prompt human for choice safely
// function getHumanChoice() {
//   let choiceHuman;
//   do {
//     choiceHuman = prompt("Choose rock, paper, or scissors");
//     if (choiceHuman === null) return null; // user cancelled
//     choiceHuman = choiceHuman.toLowerCase();
//   } while (!["rock", "paper", "scissors"].includes(choiceHuman));
//   return choiceHuman;
// }

// Play a single round; returns true if round completed, false if draw
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultsDiv.textContent = `Draw! Both chose ${humanChoice}`;
    return;
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

const resultsDiv = document.getElementById("results");
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
