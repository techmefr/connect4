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
