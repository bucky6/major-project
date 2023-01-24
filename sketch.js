// Escape from the castle
// Bucky Pederson-Bradbury
// November 17, 2022

let state = "mainMenu";
let backgroundColor = 25;
let health = 25;
let inventory = [];
let nightCastleImage, castleDoorImage, doorLookImage, castleHallImage, doorOpenImage, castleHall1, castleHall2, castleHall3, interlude, interlude1, interlude2;
let diningHall, diningHall1, diningHall2, diningHall3, diningHall4, diningHall5, trap, dead, dungeon, dungeonLook, dungeonSit, dungeonCall, dungeonCall1, dungeonDoor; 
let eatFood, eatPoisonFood, orangePotionDrink, ratFight, leftRight, left, right, zombie, leftRoom, rightRoom, prisoner, prisoner1, leavingPrisoner, staircase;
let fallDead, zombieDead, wonFight, lostFight, run, masterSword, entranceHallFight, abandoningPrisoner;
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
  diningHall2 = loadImage("assets/diningHall2.png");
  diningHall3 = loadImage("assets/diningHall3.png");
  diningHall4 = loadImage("assets/diningHall4.png");
  diningHall5 = loadImage("assets/diningHall5.png");
  trap = loadImage("assets/trap.png");
  dead = loadImage("assets/dead.jpg");
  dungeon = loadImage("assets/dungeon.png");
  dungeonLook = loadImage("assets/dungeonLook.png");
  dungeonCall = loadImage("assets/dungeonCall.png");
  dungeonSit = loadImage("assets/dungeonSit.png");
  dungeonCall1 = loadImage("assets/dungeonCall1.png");
  eatFood = loadImage("assets/eatFood.png");
  eatPoisonFood = loadImage("assets/eatPoisonFood.png");
  orangePotionDrink = loadImage("assets/drinkOrangePotion.png");
  dungeonDoor= loadImage("assets/dungeonDoor.png");
  ratFight = loadImage("assets/ratFIght.png");
  leftRight = loadImage("assets/leftRight.png");
  left = loadImage("assets/left.png");
  right = loadImage("assets/right.png");
  leftRoom = loadImage("assets/leftRoom.png");
  rightRoom = loadImage("assets/rightRoom.png");
  zombie = loadImage("assets/zombie.png");
  prisoner = loadImage("assets/prisoner.png");
  prisoner1 = loadImage("assets/prisoner1.png");
  leavingPrisoner = loadImage("assets/leavingPrisoner.png");
  staircase = loadImage("assets/staircase.png");
  fallDead = loadImage("assets/fallDead.png");
  zombieDead = loadImage("assets/zombieDead.png");
  wonFight = loadImage("assets/wonFight.png");
  lostFight = loadImage("assets/lostFight.png");
  run = loadImage("assets/run.png");
  masterSword = loadImage("assets/masterSword.png");
  entranceHallFight = loadImage("assets/entranceHallFight.png");
  abandoningPrisoner = loadImage("assets/abandonPrisoner.png");
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
  if (state === "diningHall2") {
    image(diningHall2, 0, 0, width, height);
  }
  if (state === "diningHall3") {
    image(diningHall3, 0, 0, width, height);
  }
  if (state === "diningHall4") {
    image(diningHall4, 0, 0, width, height);
  }
  if (state === "diningHall5") {
    image(diningHall5, 0, 0, width, height);
  }
  if (state === "trap") {
    image(trap, 0, 0, width, height);
  }
  if (state === "dead") {
    image(dead, 0, 0, width, height);
    // rect(100, 50, );
  }
  if (state === "dungeon") {
    image(dungeon, 0, 0, width, height);
  }
  if (state === "dungeonLook") {
    image(dungeonLook, 0, 0, width, height);
  }
  if (state === "dungeonCall") {
    image(dungeonCall, 0, 0, width, height);
  }
  if (state === "dungeonSit") {
    image(dungeonSit, 0, 0, width, height);
  }
  if (state === "dungeonCall1") {
    image(dungeonCall1, 0, 0, width, height);
  }
  if (state === "eatPoisonFood") {
    image(eatPoisonFood, 0, 0, width, height);
  }
  if (state === "eatFood") {
    image(eatFood, 0, 0, width, height);
  }
  if (state === "drinkOrangePotion") {
    image(orangePotionDrink, 0, 0, width, height);
  }
  if (state === "dungeonDoor") {
    image(dungeonDoor, 0, 0, width, height);
  }
  if (state === "orangePotionDrink") {
    image(orangePotionDrink, 0, 0, width, height);
  }
  if (state === "ratFight") {
    image(ratFight, 0, 0, width, height);
  }
  if (state === "leftRight") {
    image(leftRight, 0, 0, width, height);
  }
  if (state === "left") {
    image(left, 0, 0, width, height);
  }
  if (state === "right") {
    image(right, 0, 0, width, height);
  }
  if (state === "leftRoom") {
    image(leftRoom, 0, 0, width, height);
  }  
  if (state === "rightRoom") {
    image(rightRoom, 0, 0, width, height);
  }
  if (state === "zombie") {
    image(zombie, 0, 0, width, height);
  }
  if (state === "prisoner") {
    image(prisoner, 0, 0, width, height);
  }
  if (state === "prisoner1") {
    image(prisoner1, 0, 0, width, height);
  }
  if (state === "staircase") {
    image(staircase, 0, 0, width, height);
  }
  if (state === "leavingPrisoner") {
    image(leavingPrisoner, 0, 0, width, height);
  }
  if (state === "fallDead") {
    image(fallDead, 0, 0, width, height);
  }
  if (state === "zombieDead") {
    image(zombieDead, 0, 0, width, height);
  }
  if (state === "wonFight") {
    image(wonFight, 0, 0, width, height);
  }
  if (state === "lostFight") {
    image(lostFight, 0, 0, width, height);
  }
  if (state === "run") {
    image(run, 0, 0, width, height);
  }
  if (state === "abandoningPrisoner") {
    image(abandoningPrisoner, 0, 0, width, height);
  }
  if (state === "masterSword") {
    image(masterSword, 0, 0, width, height);
  }
  if (state === "entranceHallFight") {
    image(entranceHallFight, 0, 0, width, height);
  }
  if (state === "zombieFight") {
    background(0);
    text("Without a dagger, you stood no chance.", width/2 - 360, height/3);
    text("Current health: 0", width/2 - 240, height/3 + 50);
  }
}

// make the main menu
function mainMenu() {
  background(backgroundColor);
  textFont("Footlight MT Light", 50);
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
  text("Despite the many unnerving things you've heard about this castle and its resident(s), money is money.", width/2 - 650, height/3 + 75);
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
  else if (state === "diningHall2" && keyCode === 65) {
    state = "trap";
  }
  else if (state === "trap" && keyCode === 32) {
    health = random(1, 100);
    if (health < 50) {
      state = "fallDead";
    }
    else if (health >= 50) {
      state = "dungeon";
      health = 15;
    }
  }
  else if (state === "fallDead" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "diningHall2" && keyCode === 66) {
    state = "diningHall3";
  }
  else if (state === "diningHall3" && keyCode === 65 || state === "diningHall3" && keyCode === 66) {
    state = "diningHall4";
  }
  else if (state === "diningHall4" && keyCode === 65 || state === "diningHall4" && keyCode === 66) {
    state = "diningHall5";
  }
  else if (state === "diningHall5" && keyCode === 65) {
    state === "trap";
  }
  else if (state === "diningHall4" && keyCode === 67) {
    state = "trap";
  }
  else if (state === "diningHall3" && keyCode === 67) {
    state = "trap";
  }
  else if (state === "diningHall5" && keyCode === 65 || state === "diningHall5" && keyCode === 66 || state === "diningHall5" && keyCode === 67 || state === "diningHall5" && keyCode === 68) {
    state = "trap";
  }
  else if (state === "dungeon" && keyCode === 65) {
    state = "dungeonLook";
    inventory.push("dagger");
    inventory.push("orangePotion") ;
    inventory.push("food");
  }
  else if (state === "dungeon" && keyCode === 66) {
    state = "dungeonCall";
  }
  else if (state === "dungeon" && keyCode === 67) {
    state = "dungeonSit";
  }
  else if (state === "dungeonSit" && keyCode === 65) {
    state = "dungeonLook";
  }
  else if (state === "dungeonSit" && keyCode === 66) {
    state = "dungeonCall";
  }
  else if (state === "dungeonCall" && keyCode === 65) {
    state = "dungeonLook";
  }
  else if (state === "dungeonCall" && keyCode === 67) {
    state = "dungeonSit";
  }
  else if (state === "dungeonLook" && keyCode === 65) {
    state = "dungeonCall1";
  }
  else if (state === "dungeonLook" && keyCode === 66) {
    state = "orangePotionDrink";
  }
  else if (state === "dungeonLook" && keyCode === 67) {
    health = random(1, 100);
    if (health < 50) {
      state = "eatPoisonFood";
      health = 10;
    }
    else if (health >= 50) {
      state = "drinkOrangePotion";
      health = 20;
    }
  }
  else if (state === "dungeonLook" && keyCode === 68) {
    state = "dungeonDoor";
  }
  else if (state === "dungeonCall1" && keyCode === 65) {
    state = "orangePotionDrink";
  }
  else if (state === "dungeonCall1" && keyCode === 66) {
    state = "eatFood";
  }
  else if (state === "dungeonCall1" && keyCode === 67) {
    state = "dungeonDoor";
  }
  else if (state === "dungeonCall1" && keyCode === 68) {
    state = "dungeonSit1";
  }
  else if (state === "eatPoisonFood" && keyCode ===  65) {
    state = "dungeonDoor";
  }
  else if (state === "orangePotionDrink" && keyCode === 65) {
    state = "dungeonCall1";
  }
  else if (state === "orangePotionDrink" && keyCode === 66) {
    health = random(1, 100);
    if (health < 50) {
      state = "eatPoisonFood";
      health = 10;
    }
    else if (health >= 50) {
      state = "drinkOrangePotion";
      health = 20;
    }
  }
  else if (state === "orangePotionDrink" && keyCode === 67) {
    state = "dungeonDoor";
  }
  else if (state === "dungeonDoor" && keyCode === 32) {
    state = "ratFight";
  }
  else if (state === "ratFight" && keyCode === 32) {
    state = "leftRight";
  }
  else if (state === "leftRight" && keyCode === 65) {
    state = "left";
  }
  else if (state === "leftRight" && keyCode === 66) {
    state = "right";
  }
  else if (state === "left" && keyCode === 32) {
    state = "leftRoom";
  }
  else if (state === "right" && keyCode === 32) {
    state = "rightRoom";
  }
  else if (state === "rightRoom" && keyCode === 65) {
    state = "zombie";
  }
  else if (state === "rightRoom" && keyCode === 66) {
    state = "fightZombie";
  }
  else if (state === "leftRoom" && keyCode === 65) {
    state = "prisoner1";
  }
  else if (state === "leftRoom" && keyCode === 66) {
    state = "prisoner";
  }
  else if (state === "prisoner1" && keyCode === 65) {
    state = "staircase";
  }
  else if (state === "prisoner1" && keyCode === 66) {
    state = "leavingPrisoner";
  }
  else if (state === "leavingPrisoner" && keyCode === 32) {
    state = "rightRoom";
  }
  else if (state === "zombie" && keyCode === 65 || state === "zombie" && keyCode === 66 || state === "zombie" && keyCode === 67) {
    state = "zombieDead";
  }
  else if (state === "zombieDead" && keyCode === 32 || state === "fallDead" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "staircase" && keyCode === 32) {
    state = "entranceHallFight";
  }
  else if (state === "entranceHallFight" && keyCode === 32) {
    state = "masterSword";
  }
  else if (state === "masterSword" && keyCode === 65) {
    state = "abandoningPrisoner";
  }
  else if (state === "masterSword" && keyCode === 66) {
    health = random(1, 100);
    if (health < 50) {
      state = "lostFight";
      health = 10;
    }
    else if (health >= 50) {
      state = "wonFight";
      health = 20;
    }
  }
  else if (state === "masterSword" && keyCode === 67) {
    state = "run";
  }
  else if (state === "wonFight" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "lostFIght" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "abandoningPrisoner" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "run" && keyCode === 32) {
    state = "dead";
  }
  else if (state === "zombieFight" && keyCode === 32) {
    state = "dead";
  }
}
