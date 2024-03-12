const main = document.querySelector("main");

function generateGameBoard(rows, cols) {
  const table = document.createElement("table");
  const title = document.createElement("h1");
  title.textContent = "Puissance 4";

  let i = 0;
  while (i < rows) {
    const row = document.createElement("tr");
    let j = 0;
    while (j < cols) {
      const cell = document.createElement("td");
      cell.id = `${j + 1}.${rows - i}`;
      row.appendChild(cell);
      j++;
    }
    table.appendChild(row);
    i++;
  }

  main.appendChild(title);
  main.appendChild(table);
}

generateGameBoard(6, 7);

let currentPlayer = 1;
const playerText = document.createElement("h2");
playerText.textContent = "Player 1";
playerText.style.color = "red";
main.appendChild(playerText);

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "TD") {
    const columnIndex = clickedElement.id.split(".")[0];
    const color = currentPlayer === 1 ? "red" : "yellow";
    const emptyCell = findFirstEmptyCellInColumn(columnIndex);
    if (emptyCell !== null && emptyCell.style.backgroundColor === "white") {
      emptyCell.style.backgroundColor = color;
      if (checkForWin(columnIndex, emptyCell.id.split(".")[1], color)) {
        alert(`Player ${currentPlayer} wins!`);
      } else {
        changePlayer();
      }
    } else {
      alert("La colonne est pleine !");
    }
  }
});

function findFirstEmptyCellInColumn(columnIndex) {
  const cells = document.querySelectorAll(`td[id^="${columnIndex}."]`);
  for (let i = cells.length - 1; i >= 0; i--) {
    const cell = cells[i];
    if (
      cell.style.backgroundColor === "" ||
      cell.style.backgroundColor === "white"
    ) {
      return cell;
    }
  }
  return null;
}

function checkForWin(columnIndex, rowIndex, color) {
  return false;
}

function changePlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  playerText.textContent = currentPlayer === 1 ? "Player 1" : "Player 2";
  playerText.style.color = currentPlayer === 1 ? "red" : "yellow";
}
