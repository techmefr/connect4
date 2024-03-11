function findFirstEmptyCellInColumn(columnIndex) {
    const cells = document.querySelectorAll(`td[id^="${columnIndex}."]`);
    for (let i = cells.length - 1; i >= 0; i--) {
      const cell = cells[i];
      if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
        return cell;
      }
    }
    return null;
  }