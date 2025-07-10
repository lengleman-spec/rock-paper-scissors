//Function for computer choice

function getComputerChoice() {
  const computerChoice = Math.random(); //generates random number between 0 - 1

  if (computerChoice < 1 / 3) {
    return "Rock";
  } else if (computerChoice < 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Explanation:
// Math.random() returns a floating-point, random number between 0 - 1.
// The range of Math.random() is then divided into 3 equal parts (for rock, paper, scissors)
// If computerChoice
