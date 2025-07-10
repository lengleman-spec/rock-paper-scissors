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
// If computerChoice is less than 1/3, "Rock" is returned.
// If computerChoice is less than 2/3, but not less than 1/3, "Paper" is returned.
// If computerChoice is greater than 2/3, (meaning, it does not fall in the categories of the first two) "Scissors" gets returned.

//Function for Human Choice
