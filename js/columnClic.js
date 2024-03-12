import { findFirstEmptyCellInColumn } from "./findCells";

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "TD") {
    const columnIndex = clickedElement.id.split(".")[0];
    const color = currentPlayer === 1 ? "red" : "yellow";
    const emptyCell = findFirstEmptyCellInColumn(columnIndex);
    if (emptyCell !== null && emptyCell.style.backgroundColor === "white") {
      emptyCell.style.backgroundColor = color;
      changePlayer();
    } else {
      alert("La colonne est pleine !");
    }
  }
});
