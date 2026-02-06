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
    console.log(`Draw! Both chose ${humanChoice}. Round will be replayed.`);
    return false; // round not completed
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Computer Wins! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  return true; // round completed
}

// Play a 5-round game
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     let roundCompleted = false;
//     while (!roundCompleted) {
//       let humanChoice = getHumanChoice();
//       if (humanChoice === null) {
//         console.log("Game cancelled.");
//         return; // stop if user cancels
//       }
//       let computerChoice = getComputerChoice();
//       roundCompleted = playRound(humanChoice, computerChoice);
//     }
//   }

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

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
