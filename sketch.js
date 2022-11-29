// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "mainMenu";
let backgroundColor = 220;
let nightCastleImage;

function preload() {
  nightCastleImage = loadImage("assets/nightCastle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === "mainMenu") {
    mainMenu();
  }
  if (state === "intro") {
    introScreen();
  }
}

// make the main menu
function mainMenu() {
  background(backgroundColor);
  textFont("georgia", 50);
  text("Escape From The Castle", width/2 - 240, height/3);
  text("Play", width/2 - 100, height/2);
  if (state === "mainMenu" && mouseInsideRect(width/2 - 125, width/2 + 125, height/2 - 75, height/2 + 75)) {
    fill("grey");
  }
  else {
    fill("white");
  }
  rect(width/2 - 125, height/2 - 75, 250, 150);
}

//make the game screen
function introScreen() {
  background (0);
  text("You are a real estate agent. You've been called away to a strange castle in the country to speak with the owner.", width/2 - 700, height/3);
  text("After a long day's journey, you have arrived.", width/2 - 300, height/3 + 75);
  text("Press space to continue.", width/2 - 175, height/3 + 150);
  textFont("georgia", 30);
  rect(width/2 - 75, height/2 + 100, 150, 75);
  fill("white");
}

function mouseInsideRect(left, right, top, bottom) {
  return mouseX >= left && mouseX <= right &&
  mouseY >= top && mouseY <= bottom;
}

function mousePressed() {
  if (state === "mainMenu" && mouseInsideRect(width/2 - 125, width/2 + 125, height/2 - 75, height/2 + 75)) {
    state = "intro";
  }
  if (state === "intro" && mouseInsideRect(width/2 - 150, width/2 +150, height/2 +500, height/2 + 650)) {
    image(nightCastleImage, 0, 0, width, height);
  }
}

// To Do (somewhat in order?)

// Figure out story and endings
// Write intro
// Make start menu
// Make game environment
// Add texture pack to game
// Add player's character
// Character movement
// Enemies and damage
// NPC's
// Text boxes
// Text input from player
// Sound effects
// Items for player to pick up