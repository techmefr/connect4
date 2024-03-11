let currentPlayer = 1;
const playerText = document.createElement("h2");
playerText.textContent = "Player 1";
playerText.style.color = "red";
main.appendChild(playerText);

function changePlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  playerText.textContent = currentPlayer === 1 ? "Player 1" : "Player 2";
  playerText.style.color = currentPlayer === 1 ? "red" : "yellow";
}
