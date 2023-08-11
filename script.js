let currentMode = "shades"; // Default mode

// Event listeners for size buttons
document
  .querySelectorAll(".size-button-container button")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      switch (index) {
        case 0:
          createGrid(16);
          break;
        case 1:
          createGrid(32);
          break;
        case 2:
          createGrid(64);
          break;
        case 3:
          // Add logic for custom size here, if needed
          break;
        default:
          break;
      }
    });
  });

// Event listeners for mode buttons
document
  .querySelectorAll(".modes-button-container button")
  .forEach((button, index) => {
    button.addEventListener("click", () => {
      switch (index) {
        case 0:
          currentMode = "classic";
          break;
        case 1:
          currentMode = "shades";
          break;
        case 2:
          currentMode = "randomColor";
          break;
        default:
          break;
      }
    });
  });

function createGrid(columns) {
  // Renamed size to columns for clarity
  let grid = document.getElementById("grid");
  grid.innerHTML = ""; // Clear existing grid

  let rows = Math.floor((columns * 3) / 4); // Calculate rows based on 4:3 ratio

  // Adjust the grid layout according to the columns and rows
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i = 0; i < columns * rows; i++) {
    let cell = document.createElement("div");
    cell.style.opacity = "0";
    changeColorOnHover(cell);
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

document.getElementById("custom").addEventListener("click", function () {
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
