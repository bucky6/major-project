// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "mainMenu";
let backgroundColor = 25;
let nightCastleImage;

function preload() {
  nightCastleImage = loadImage("assets/nightCastle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(25);
  if (state === "mainMenu") {
    mainMenu();
  }
  if (state === "intro") {
    introScreen();
  }
  if (state === "castle") {
    image(nightCastleImage, 0, 0, width, height);
  }
  if (state === "game") {
    background(220);
  }
}

// make the main menu
function mainMenu() {
  background(backgroundColor);
  // fill("white");
  textFont("georgia", 50);
  text("Escape From The Castle", width/2 - 240, height/3);
  text("Play", width/2 - 100, height/2);
  rect(width/2 - 125, height/2 - 75, 250, 150);
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
  textFont("georgia", 10);
  textFont("georgia", 30);
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
  if (state === "intro" && keyCode === 32) {
    state = "castle";
  }
  // if (state === "castle" && keyCode === 32) {
  //   state = "game";
  // }
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