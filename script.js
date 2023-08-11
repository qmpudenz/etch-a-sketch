function createGrid(size) {
  let grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear existing grid

  // Adjust the grid layout according to the size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

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

document.getElementById("createNewGrid").addEventListener("click", function () {
  let size = prompt("Enter the size of the grid (e.g., 16 for a 16x16 grid):");
  size = parseInt(size);
  if (!isNaN(size) && size > 0) {
    createGrid(size);
  } else {
    alert("Invalid size. Please enter a positive integer.");
  }
});

// Buttons logic
document.getElementById("large").addEventListener("click", function () {
  createGrid(16);
});

document.getElementById("medium").addEventListener("click", function () {
  createGrid(32);
});

document.getElementById("small").addEventListener("click", function () {
  createGrid(64);
});

// Initialize the grid with 16x16 size by default
createGrid(16);
