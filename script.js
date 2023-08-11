function createGrid(size) {
  let grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear existing grid

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.style.opacity = "0";
    cell.addEventListener("mouseover", function () {
      let currentOpacity = parseFloat(cell.style.opacity);
      if (currentOpacity < 1) {
        cell.style.backgroundColor = "black";
        cell.style.opacity = (currentOpacity + 0.1).toString();
      }
    });
    grid.appendChild(cell);
  }
}

// Initialize the grid with 16x16 size
createGrid(16);
