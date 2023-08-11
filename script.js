let currentMode = "shades"; // Default mode

document
  .getElementById("sizes")
  .children[0].addEventListener("click", function () {
    createGrid(16); // Large grid
  });

document
  .getElementById("sizes")
  .children[1].addEventListener("click", function () {
    createGrid(32); // Medium grid
  });

document
  .getElementById("sizes")
  .children[2].addEventListener("click", function () {
    createGrid(64); // Small grid
  });

document.getElementById("classic").addEventListener("click", function () {
  currentMode = "classic";
});

document.getElementById("shades").addEventListener("click", function () {
  currentMode = "shades";
});

document.getElementById("randomColor").addEventListener("click", function () {
  currentMode = "randomColor";
});

function createGrid(size) {
  let grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear existing grid

  // Adjust the grid layout according to the size
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.style.opacity = "0";
    changeColorOnHover(cell); // Call the changeColorOnHover function here
    grid.appendChild(cell);
  }
}

function changeColorOnHover(element) {
  element.addEventListener("mouseover", function () {
    if (currentMode === "classic") {
      element.style.backgroundColor = "black";
      element.style.opacity = "1";
    } else if (currentMode === "shades") {
      let currentOpacity = parseFloat(element.style.opacity);
      if (currentOpacity < 1) {
        element.style.backgroundColor = "black";
        element.style.opacity = (currentOpacity + 0.1).toString();
      }
    } else if (currentMode === "randomColor") {
      element.style.backgroundColor = getRandomColor();
      element.style.opacity = "1";
    }
  });
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
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

// Initialize the grid with the default size
createGrid(16);
