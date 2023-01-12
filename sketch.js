// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = "mainMenu";
let backgroundColor = 25;
let nightCastleImage, castleDoorImage, doorOpenImage, castleHallImage, servantImage, servantAnimation;
let doorKnockSound;

function preload() {
  nightCastleImage = loadImage("assets/nightCastle.png");
  castleDoorImage = loadImage("assets/doorScreen.png");
  doorKnockSound = loadSound("assets/doorKnocking.mp4");
  doorOpenImage = loadImage("assets/doorOpenScreen.png");
  castleHallImage = loadImage("assets/castleHall.png");
  servantImage = loadImage("assets/servant.png");
  servantAnimation = loadImage("assets/servantGif.webp");
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
    noStroke();
    rect(width/2 - 550, height/2 + 50, 550, 250);
    fill("black");
    text("What would you like to do?", width/2 - 500, height/2 + 100);
    text("A. Look around", width/2 - 500, height/2 + 150);
    text("B. Knock on the door", width/2 - 500, height/2 + 200);
    text("C. Walk in", width/2 - 500, height/2 + 250);
    fill("gray");
  }
  if (state === "doorLook") {
    image(castleDoorImage, 0, 0, width, height);
    noStroke();
    rect(width/2 - 725, height/2 + 50, 700, 250);
    fill("black");
    text("You didn't find anything. What would you like to do?", width/2 - 700, height/2 + 100);
    text("A. Look around", width/2 - 500, height/2 + 150);
    text("B. Knock on the door", width/2 - 500, height/2 + 200);
    text("C. Walk in", width/2 - 500, height/2 + 250);
    fill("gray");
  }
  if (state === "doorKnock") {
    image(doorOpenImage, 0, 0, width, height);
    rect(width/2 - 725, height/2 -25, 700, 100);
    noStroke();
    fill("black");
    text("The door slowly swings open just before your hand", width/2 - 700, height/2 + 25);
    text("makes contact. Press space to walk in.", width/2 - 650, height/2 + 50);
    fill("gray");
  }
  if (state === "hall") {
    image(castleHallImage, 0, 0, width, height);
    rect(width/2 - 300, height/2 + 50, 100, 50);
    noStroke();
    fill("black");
    text("Hello?", width/2 - 290, height/2 + 80);
    fill("gray");
    image(servantImage, width/4*2.5, height/2 + 100, 160, 160);
  }
  if (state === "hall2") {
    image(castleHallImage, 0, 0, width, height);
    rect(width/2 - 300, height/2 + 50, 175, 50);
    noStroke();
    fill("black");
    text("Oh, it's you.", width/2 - 290, height/2 + 80);
    fill("gray");
    image(servantImage, width/4*2.5, height/2 + 100, 160, 160);
  }
  if (state === "hall3") {
    image(castleHallImage, 0, 0, width, height);
    rect(width/2 - 300, height/2 + 50, 260, 160);
    noStroke();
    fill("black");
    text("Come this way.", width/2 - 290, height/2 + 80);
    text("The master will be", width/2 - 290, height/2 + 130);
    text("pleased you're here.", width/2 - 290, height/2 + 180);
    fill("gray");
    image(servantImage, width/4*2.5, height/2 + 100, 160, 160);
  }
  if (state === "hall4") {
    image(castleHallImage, 0, 0, width, height);
    rect(width/2 - 300, height/2 + 50, 175, 50);
    noStroke();
    fill("black");
    text("Quickly now.", width/2 - 290, height/2 + 80);
    fill("gray");
    image(servantAnimation, width/4*2.5, height/2 + 100, 160, 160);
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
    image(castleDoorImage, 0, 0, width, height);
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
  else if (state === "hall2" && keyCode === 32) {
    state = "hall3";
  }
  else if (state === "hall3" && keyCode === 32) {
    state = "hall4";
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