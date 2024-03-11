document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "TD") {
    const columnIndex = clickedElement.id.split(".")[0];
    const color = currentPlayer === 1 ? "red" : "yellow";
    colorColumnOnClic(columnIndex, color);
    changePlayer();
  }
});

function colorColumnOnClic(columnIndex, color) {
  const cells = document.querySelectorAll(`td[id^="${columnIndex}."]`);
  cells.forEach((cell) => {
    cell.style.backgroundColor = color;
  });
}
