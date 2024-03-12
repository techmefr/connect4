const game = document.getElementById("game");
let tour = true;

function createTable() {
  const table = document.createElement("table");
  for (let y = 0; y < 6; y++) {
    const tr = document.createElement("tr");
    for (let x = 0; x < 7; x++) {
      const td = document.createElement("td");
      td.id = `${x}.${y}`;
      td.value = 0;
      td.innerText = td.id;
      td.addEventListener("click", putToken);
      tr.append(td);
    }
    table.append(tr);
  }
  game.append(table);
}

function gameOver(x, y) {
  function vertical() {
    let count = 1;
    for (let i = y + 1; i < 6; i++) {
      const current = document.getElementById(`${x}.${i}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    return count >= 4;
  }

  function horizontal() {
    let count = 1;
    for (let i = x + 1; i < 7; i++) {
      const current = document.getElementById(`${i}.${y}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    for (let i = x - 1; i >= 0; i--) {
      const current = document.getElementById(`${i}.${y}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    return count >= 4;
  }

  function diagRight() {
    let count = 1;
    for (let i = 1; i < 7; i++) {
      const current = document.getElementById(`${x + i}.${y + i}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 7; i++) {
      const current = document.getElementById(`${x - i}.${y - i}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    return count >= 4;
  }

  function diagLeft() {
    let count = 1;
    for (let i = 1; i < 7; i++) {
      const current = document.getElementById(`${x - i}.${y + i}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < 7; i++) {
      const current = document.getElementById(`${x + i}.${y - i}`);
      if (current && current.value === td.value) {
        count++;
      } else {
        break;
      }
    }
    return count >= 4;
  }

  const td = document.getElementById(`${x}.${y}`);
  return vertical() || horizontal() || diagRight() || diagLeft();
}

function putToken(event) {
  const td = event.target;
  const column = td.id.charAt(0);

  let y = 5;
  while (y >= 0 && document.getElementById(`${column}.${y}`).value !== 0) {
    y -= 1;
  }
  if (y >= 0) {
    const target = document.getElementById(`${column}.${y}`);
    target.value = tour ? 1 : 2;
    target.style = "background-color: " + (tour ? "red" : "yellow");
    if (gameOver(parseInt(column), y)) {
      alert("GAME OVER " + (tour ? "red" : "yellow") + " WIN");
      restartGame();
    }
    tour = !tour;
  }
}

function restartGame() {
  const confirmRestart = confirm("Voulez-vous redémarrer le jeu ?");
  if (confirmRestart) {
    game.innerHTML = "";
    createTable();
  }
}

createTable();
