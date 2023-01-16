// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "mainMenu";
let backgroundColor = 25;
let nightCastleImage, castleDoorImage, doorLookImage, castleHallImage, doorOpenImage, castleHall1, castleHall2, castleHall3, interlude, interlude1, interlude2;
let diningHall, diningHall1;
let doorKnockSound;

function preload() {
  nightCastleImage = loadImage("assets/nightCastle.png");
  castleDoorImage = loadImage("assets/doorScreen.png");
  doorKnockSound = loadSound("assets/doorKnocking.mp4");
  doorLookImage = loadImage("assets/doorScreen2.png");
  castleHallImage = loadImage("assets/castleHall.png");
  doorOpenImage = loadImage("assets/openDoor.png");
  castleHall1 = loadImage("assets/castleHall1.png");
  castleHall2 = loadImage("assets/castleHall2.png");
  castleHall3 = loadImage("assets/castleHall3.png");
  interlude = loadImage("assets/interlude.png");
  interlude1 = loadImage("assets/interlude1.png");
  interlude2 = loadImage("assets/interlude2.png");
  diningHall = loadImage("assets/diningHall.png");
  diningHall1 = loadImage("assets/diningHall1.png");
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
  if (state === "castle") {
    image(nightCastleImage, 0, 0, width, height);
  }
  if (state === "door") {
    image(castleDoorImage, 0, 0, width, height);
  }
  if (state === "doorLook") {
    image(doorLookImage, 0, 0, width, height);
  }
  if (state === "doorKnock") {
    image(doorOpenImage, 0, 0, width, height);
  }
  if (state === "hall") {
    image(castleHallImage, 0, 0, width, height);
  }
  if (state === "hall2") {
    image(castleHall1, 0, 0, width, height);
  }
  if (state === "hall3") {
    image(castleHall2, 0, 0, width, height);
  }
  if (state === "hall4") {
    image(castleHall3, 0, 0, width, height);
  }
  if (state === "interlude") {
    image(interlude, 0, 0, width, height);
  }
  if (state === "interlude2") {
    image(interlude1, 0, 0, width, height);
  }
  if (state === "interlude3") {
    image(interlude2, 0, 0, width, height);
  }
  if (state === "diningHall") {
    image(diningHall, 0, 0, width, height);
  }
  if (state === "diningHall1") {
    image(diningHall1, 0, 0, width, height);
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
  text("Always press space to continue", width/2 - 200, height/3 + 450);
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
  else if (state === "door" && keyCode === 65) {
    state = "doorLook";
  }
  else if (state === "door" && keyCode === 66 || state === "doorLook" && keyCode === 66) {
    state = "doorKnock";
    doorKnockSound.play(); 
  }
  else if (state === "doorKnock" && keyCode === 32) {
    state = "hall";
  }
  else if (state === "door" && keyCode === 67 || state === "doorLook" && keyCode === 67) {
    state = "hall";
  }
  else if (state === "hall" && keyCode === 32) {
    state = "hall2";
  }
  else if (state === "hall2" && keyCode === 65 ||state === "hall2" && keyCode === 66 || state === "hall2" && keyCode === 67) {
    state = "hall3";
  }
  else if (state === "hall3" && keyCode === 32) {
    state = "hall4";
  }
  else if (state === "hall4" && keyCode === 32) {
    state = "interlude";
  }
  else if (state === "interlude" && keyCode === 65 ||state === "interlude" && keyCode === 66 || state === "interlude" && keyCode === 67 || state === "interlude" && keyCode === 68) {
    state = "interlude2";
  }
  else if (state === "interlude2" && keyCode === 32) {
    state = "interlude3";
  }
  else if (state === "interlude3" && keyCode === 65 || state === "interlude3" && keyCode === 66 || state === "interlude3" && keyCode === 67) {
    state = "diningHall";
  }
  else if (state === "diningHall" && keyCode === 65 || state === "diningHall" && keyCode === 66 || state === "diningHall" && keyCode === 67) {
    state = "diningHall1";
  }
  else if (state === "diningHall1" && keyCode === 65) {
    state = "diningHall2";
  }
}

// To Do (somewhat in order?)

// Figure out story and endings
// Enemies and damage
// NPC's
// Text input from player
// Sound effects
// Items for player to pick up

// Done

// Write intro
// Make start menu
// Add player's character
// Character movement
// Add texture pack to game (adding as needed)