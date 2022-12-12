// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rows = 19;
let cols = 38;
let grid, cellWidth, cellHeight;
let state = "mainMenu";
let backgroundColor = 25;
let nightCastleImage, castleDoorImage, castleWallImage, dirtFloorImage, dungeonWallImage, dungeonWallVegetationImage, characterImage;
let mainDoorGrid;
let playerX = 0;
let playerY = 0;

function preload() {
  nightCastleImage = loadImage("assets/nightCastle.png");
  castleDoorImage = loadImage("assets/castleDoor.png");
  castleWallImage = loadImage("assets/castleWall.png");
  dirtFloorImage = loadImage("assets/dirtFloor.png");
  dungeonWallImage = loadImage("assets/dungeonWall.png");
  dungeonWallVegetationImage = loadImage("assets/dungeonWallVegetation.png");
  characterImage = loadImage("assets/character.png");
  mainDoorGrid = "assets/mainDoor.txt";
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/cols*2;
  cellHeight = height/rows*2; 
  grid = create2DArray(cols, rows);
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  if (state === "mainMenu") {
    mainMenu();
  }
  if (state === "intro") {
    introScreen();
  }
  if (state === "castle") {
    image(nightCastleImage, 0, 0, width, height);
  }
  if (state === "door") {
    doorScreen();
  }
}

// make the main menu
function mainMenu() {
  background(backgroundColor);
  textFont("Dungeon Regular", 50);
  text("Escape From The Castle", width/2 - 240, height/3);
  rect(width/2 - 125, height/2 - 75, 250, 150);
  fill("black");
  text("Play", width/2 - 55, height/2 + 15);
  if (state === "mainMenu" && mouseInsideRect(width/2 - 125, width/2 + 125, height/2 - 75, height/2 + 75)) {
    fill("grey");
  }
  else {
    fill("white");
  }
}

//make the game screen
function introScreen() {
  background (0);
  fill("white");
  text("You are a real estate agent. You've been called away to a strange castle in the country to speak with the owner.", width/2 - 700, height/3);
  text("Despite the many unnerving things you've heard about this castle and it resident(s), money is money.", width/2 - 650, height/3 + 75);
  text("After a long day's journey, you have arrived.", width/2 - 300, height/3 + 150);
  text("Press space to continue", width/2 - 150, height/3 + 450);
  textFont("Dungeon Regular", 10);
  textFont("Dungeon Regular", 30);
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
  mouseY >= top && mouseY <= bottom;
}

function mousePressed() {
  if (state === "mainMenu" && mouseInsideRect(width/2 - 125, width/2 + 125, height/2 - 75, height/2 + 75)) {
    state = "intro";
  }
}

function keyPressed() {
  //screen switching
  if (state === "intro" && keyCode === 32) {
    state = "castle";
  }
  else if (state === "castle" && keyCode === 32) {
    state = "door";
  }

  //player movement
  else if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 0) {
      grid[playerY][playerX] = 0;

      playerX++;

      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 0) {
      grid[playerY][playerX] = 0;
      
      playerX--;

      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 0) {
      grid[playerY][playerX] = 0;
      
      playerY--;

      grid[playerY][playerX] = 9;
    }
  }

  if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 0) {
      grid[playerY][playerX] = 0;
      
      playerY++;

      grid[playerY][playerX] = 9;
    }
  }
}

function doorScreen() {
  displayGrid(grid);
}

function create2DArray(cols, rows) {
  let emptyArray = [];
  for (let y=0; y<rows; y++) {
    emptyArray.push([]);
    for (let x=0; x<cols;x++) {
      // if (random(100) < 50) {
      emptyArray[y].push(0);
      // }
      // else if (random(100) > 50) {
      //   emptyArray[y].push(1);
      // }
      // else if (random(150) > 100) {
      //   emptyArray[y].push(2);
      // }
    }
  }
  return emptyArray;
}

function displayGrid(grid) {
  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if(grid[y][x] === 1) {
        image(dirtFloorImage, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 2) {
        image(castleWallImage, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if(grid[y][x] === 3) {
        image(castleDoorImage, x*cellWidth, y*cellHeight, cellWidth, cellHeight);  
      }
      else if (grid[y][x] === 9) {
        // image(dirtFloorImage, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        fill("black");
        image(characterImage, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 0) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
        fill("black");
      }
    }
  }
}

// To Do (somewhat in order?)

// Figure out story and endings
// Make game environment (in progress)
// Enemies and damage
// NPC's
// Text boxes
// Text input from player
// Sound effects
// Items for player to pick up

// Done

// Write intro
// Make start menu
// Add player's character
// Character movement
// Add texture pack to game (adding as needed)