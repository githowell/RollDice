function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


const player1Dice = document.getElementById("PlayerOneDice");
const player2Dice = document.getElementById("PlayerTwoDice");

const resultDisplay = document.getElementById("Result");
const rollButton = document.getElementById("rollButton");


function updateDiceImage(diceElement, roll) {
  diceElement.setAttribute("src", `dice${roll}.png`);
}


function determineWinner(player1Roll, player2Roll) {
  if (player1Roll > player2Roll) {
      return "Player 1 Wins!";
  } else if (player2Roll > player1Roll) {
      return "Player 2 Wins!";
  } else {
      return "It's a draw!";
  }
}

rollButton.addEventListener("click", () => {
  const player1Roll = rollDice();
  const player2Roll = rollDice();

  updateDiceImage(player1Dice, player1Roll);
  updateDiceImage(player2Dice, player2Roll);

  resultDisplay.innerHTML = determineWinner(player1Roll, player2Roll);
});
