// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "mainMenu";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  mainMenu();
}

function mainMenu() {
  if (state === "mainMenu") {
    background(102, 101, 101);
    textFont("georgia", 50);
    text("Escape From The Castle", width/2 - 250, height/3);

  }
}


// To Do (more or less in order?)

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