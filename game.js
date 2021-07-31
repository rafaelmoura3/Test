let rows = 10, cols = 20;
let grid = createGrid();
let start = false;

function createGrid() {
  let result = [];
  for (let i = 0; i < rows; i++) {
    let row = []; 
    for (let j = 0; j < cols; j++) {
      row.push(false);
    }
    result.push(row);
  }
  return result;
}

function nextGeneration() {
  let newGrid = createGrid();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let direcao = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]];
      let vizinhosVivos = 0;
      for (d of direcao) {
        let vizinhoRow = i + d[0];
        let vizinhoCol = j + d[1];
        if (vizinhoRow >= 0 && vizinhoCol >= 0 && vizinhoRow < rows && vizinhoCol < cols) {
          if (grid[vizinhoRow][vizinhoCol]) {
            vizinhosVivos++;
          }
        }
      }
      if (grid[i][j]) {
        newGrid[i][j] = vizinhosVivos == 2 || vizinhosVivos == 3;
      } else {
        newGrid[i][j] = vizinhosVivos == 3;
      }
    }
  }
  grid = newGrid;
}


function setup() {
  let height = 500;
  createCanvas(height * cols/rows, height);
  frameRate(2);
}


function draw() {
  background(255);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j]) {
        fill(0);
        rect(j/cols * width, i/rows * height, width/cols, height/rows);
      }
    }
  }

  // Linhas Horizontais
  stroke(200);
  for (let i = 0; i <= rows; i++) {
    line(0, i/rows * height, width, i/rows * height);
  }

  // L.Verticais
  for (let i = 0; i <= cols; i++) {
    line(i/cols * width, 0, i/cols * width, width);
  }
  if (start) {
    nextGeneration();
  }
}

function mouseClicked() {
  let row = Math.floor(mouseY/height * rows);
  let col = Math.floor(mouseX/width * cols);
  if (row >= 0 && col >= 0 && row < rows && col < cols) {
    grid[row][col] = !grid[row][col];
  }
}

let playButton = document.querySelector(".play-button");
playButton.addEventListener("click", function() {
  start = !start;
  if (start) {
    playButton.textContent = "Pause";
  } else {
    playButton.textContent = "Play";
  }
});
let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", function() {
  grid = createGrid();
});