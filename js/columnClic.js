function colorColumnOnClic(columnIndex) {
  const cells = document.querySelectorAll(`td[id^="${columnIndex}."]`);
  cells.forEach((cell) => {
    cell.style.backgroundColor = "red";
  });
}

document.addEventListener("click", function (event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === "TD") {
    const columnIndex = clickedElement.id.split(".")[0];
    colorColumnOnClic(columnIndex);
  }
});
