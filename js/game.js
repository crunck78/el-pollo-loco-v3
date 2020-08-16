import {World} from '../models/world.js'
import {RIGHT, LEFT} from '../models/constants.js'
function init() {
  let chickensSmallXpos = [500, 700, 1200];
  let chickensBigXpos = [900, 1200, 2000];
  let bossesXpos = [2000, 5000];
  let coinsXpos = [500, 700, 1200, 900, 1200, 2000, 2300, , 3000, 5000];
  let bottlesXpos = [550, 750, 1250, 950, 1250, 2050, 2350, , 3100, 5300];
  let level = new World(10, chickensSmallXpos, chickensBigXpos, bossesXpos, coinsXpos, bottlesXpos);

  level.pepe.checkForJump();
  level.pepe.setStatus();
  level.updateWorld();
  level.draw();

  listenForKeys(level.pepe);
}
window.addEventListener('load', init);

function listenForKeys(character) {
  document.addEventListener("keydown", function (e) {
    const k = e.key;
    let timePassedSinceJump = new Date().getTime() - character.lastJumpStarted;
    if (e.code == "Space" && timePassedSinceJump > character.JUMP_TIME * 2) {
      //perform jump
      character.lastJumpStarted = new Date().getTime();
      character.isJumping = true;
    }
    if (k == "ArrowRight") {
      character.isMovingRight = true;
      character.direction = RIGHT;
      //move right
    }
    if (k == "ArrowLeft") {
      character.isMovingLeft = true;
      character.direction = LEFT;
      //moveLeft
    }
    if (k == "d" && character.bottles > 0) {
      let timePassed = new Date().getTime() - character.bottleThrowTime;
      if (timePassed > 1000) {
        character.bottles--;
        character.bottleThrowTime = new Date().getTime();
        console.log('bottle-throw');
      }
      //throw bottle
    }
    //console.log(k);

  });
  document.addEventListener("keyup", function (e) {
    const k = e.key;
    if (k == "ArrowRight") {
      //stop moving
      character.isMovingRight = false;
    }
    if (k == "ArrowLeft") {
      //stop moving
      character.isMovingLeft = false;
    }
  });
}

/*
//--------------Game Config--------------
let JUMP_TIME = 600;//ms
let GAME_SPEED = 5;
let GROUND_POS = 180;
let CHARS_SCALE = 0.2;
let AUDIO_RUNNING = new Audio('sounds/walk.mp3');
let AUDIO_JUMP = new Audio('sounds/jump.mp3');
let AUDIO_LAND = new Audio('sounds/land.mp3');
let AUDIO_HIT = new Audio('sounds/hit.mp3');
let AUDIO_BOTTLE_COLLECT = new Audio('sounds/bottle.mp3');
let AUDIO_THROW = new Audio('sounds/throw.mp3');
let AUDIO_CHICKEN = new Audio('sounds/chicken.mp3');
let AUDIO_GLASS_BREAK = new Audio('sounds/glassBreak.mp3');
let AUDIO_BACKGROUND = new Audio('sounds/background.mp3');
AUDIO_BACKGROUND.loop = true;
AUDIO_BACKGROUND.volume = 0.2;
let COLLISION_DAMAGE = 20; //%
let COLLISION_TIME = 1000; //ms
let TIME_TO_LONG_IDLE = 10000;
let LEVEL_WIDTH = 20;
//---------------------------------------
let canvas;
let ctx;
let character_x = 50;//STARTING POSITION
let character_y = GROUND_POS;
let character_energy = 100; //%
let boss_energy = 100; //%
let isMovingRight = false;
let isMovingLeft = false;
let lastJumpStarted = 0;
let lastCollisionStarted = 0;
let lastBossCollisionStarted = 0;
let bg_imgsPosX = 0;
let cloudsOffSet1 = 0;
let cloudsOffSet2 = 0;
let isJumping = false;
let isLanding = false;
let isColliding = false;
let char_image = new Image();

let bossLifeBar = [
  'img/HUD/boss-life-bar/life_0.png', 'img/HUD/boss-life-bar/life_20.png', 'img/HUD/boss-life-bar/life_40.png',
  'img/HUD/boss-life-bar/life_60.png', 'img/HUD/boss-life-bar/life_80.png', 'img/HUD/boss-life-bar/life_100.png',
];

let lifeBar = [
  'img/HUD/life-bar/life_0.png', 'img/HUD/life-bar/life_20.png', 'img/HUD/life-bar/life_40.png',
  'img/HUD/life-bar/life_60.png', 'img/HUD/life-bar/life_80.png', 'img/HUD/life-bar/life_100.png',
];
let charMoveRight = [
  'img/character/walk/right/wR_1.png', 'img/character/walk/right/wR_2.png', 'img/character/walk/right/wR_3.png',
  'img/character/walk/right/wR_4.png', 'img/character/walk/right/wR_5.png', 'img/character/walk/right/wR_6.png'
];
let charMoveLeft = [
  'img/character/walk/left/wL_1.png', 'img/character/walk/left/wL_2.png', 'img/character/walk/left/wL_3.png',
  'img/character/walk/left/wL_4.png', 'img/character/walk/left/wL_5.png', 'img/character/walk/left/wL_6.png'
];
let charIdle = ['img/character/idle/idle_1.png', 'img/character/idle/idle_2.png', 'img/character/idle/idle_3.png',
  'img/character/idle/idle_4.png', 'img/character/idle/idle_5.png', 'img/character/idle/idle_6.png',
  'img/character/idle/idle_7.png', 'img/character/idle/idle_8.png', 'img/character/idle/idle_9.png', 'img/character/idle/idle_10.png'
];
let charLongIdle = ['img/character/long-idle/longIdle_1.png', 'img/character/long-idle/longIdle_2.png', 'img/character/long-idle/longIdle_3.png',
  'img/character/long-idle/longIdle_4.png', 'img/character/long-idle/longIdle_5.png', 'img/character/long-idle/longIdle_6.png',
  'img/character/long-idle/longIdle_7.png', 'img/character/long-idle/longIdle_8.png', 'img/character/long-idle/longIdle_9.png', 'img/character/long-idle/longIdle_10.png'
];
let charHit = ['img/character/hit/h_1.png', 'img/character/hit/h_2.png', 'img/character/hit/h_3.png'];
let charJumpRight = ['img/character/jump/right/jR_1.png', 'img/character/jump/right/jR_2.png', 'img/character/jump/right/jR_3.png'];
let charLandRight = ['img/character/jump/right/LR_4.png', 'img/character/jump/right/LR_5.png', 'img/character/jump/right/LR_6.png'];
let charJumpLeft = ['img/character/jump/left/jL_1.png', 'img/character/jump/left/jL_2.png', 'img/character/jump/left/jL_3.png'];
let charLandLeft = ['img/character/jump/left/LL_4.png', 'img/character/jump/left/LL_5.png', 'img/character/jump/left/LL_6.png'];

let currentCharImg = charIdle[0];
let nextMoveIndex = 0;
let nextIdleIndex = 0;
let nextHitIndex = 0;
let nextJumpIndex = 0;
let nextLandIndex = 0;
let chickens = [];
let chickenMoveImg = 0;
let items = [];
let collectedBottels = 50;
let bootleThrowTime = 0;
let bottleThrowImg = 0;
let bottles = [[300, 2], [600, 1], [1200, 1], [1900, 2], [2300, 2], [2700, 1], [3100, 2], [3900, 1], [4300, 2], [4700, 1], [5000, 2], [5400, 1]];
let throwBottle_x = 0;
let throwBottle_y = 0;

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  createChickenList();
  createItemList();
  checkCharStatus();
  calculateCloudOffSet();
  calculateChickenPos();
  checkForCollision();
  drawWorld();
  listenForKeys();
}

function drawWorld() {
  drawBackground();
  drawChickens();
  drawItems();
  updateCharacter();
  drawHUD();
  requestAnimationFrame(drawWorld);
  drawThrowBottle();
  drawFinalBoss();
}

//---------------CHARACTER CODE---------------
function checkCharStatus() {
  checkForRunning();
  checkForJumping();
  checkForLanding();
  checkForIdle();
}

function checkForRunning() {
  setInterval(function () {
    if (!isColliding) {
      if (isMovingLeft && !(isJumping || isLanding)) {
        AUDIO_RUNNING.play();
        nextMoveIndex = nextMoveIndex % charMoveLeft.length;
        currentCharImg = charMoveLeft[nextMoveIndex++];
      }
      if (isMovingRight && !(isJumping || isLanding)) {
        AUDIO_RUNNING.play();
        nextMoveIndex = nextMoveIndex % charMoveRight.length;
        currentCharImg = charMoveRight[nextMoveIndex++];
      }
    }
  }, 100);
}

function checkForJumping() {
  setInterval(function () {
    if (!isColliding) {
      if (isJumping) {
        if (isMovingRight) {
          nextJumpIndex = nextJumpIndex % charJumpRight.length;
          currentCharImg = charJumpRight[nextJumpIndex++];
          //currentCharImg = charJumpRight[0];
        } else if (isMovingLeft) {
          nextJumpIndex = nextJumpIndex % charJumpLeft.length;
          currentCharImg = charJumpLeft[nextJumpIndex++];
          //currentCharImg = charJumpLeft[0];
        } else { //jumpinging while idle
          nextJumpIndex = nextJumpIndex % charJumpRight.length;
          currentCharImg = charJumpRight[nextJumpIndex++];
          //currentCharImg = charJumpRight[0];
        }
      }
    }
  }, 200);
}

function checkForLanding() {
  setInterval(function () {
    if (!isColliding) {
      if (isLanding) {
        if (isMovingRight) {
          nextLandIndex = nextLandIndex % charLandRight.length;
          currentCharImg = charLandRight[nextLandIndex++];
          //currentCharImg = charLandRight[0];
        } else if (isMovingLeft) {
          nextLandIndex = nextLandIndex % charLandLeft.length;
          currentCharImg = charLandLeft[nextLandIndex++];
          //currentCharImg = charLandLeft[0];
        } else { //landing while idle
          nextLandIndex = nextLandIndex % charLandRight.length;
          currentCharImg = charLandRight[nextLandIndex++];
          //currentCharImg = charLandRight[0];
        }
      }
    }
  }, 200);
}

function checkForIdle() {
  setInterval(function () {
    if (!isColliding) {
      if (!(isMovingLeft || isMovingRight || isJumping || isLanding)) {
        AUDIO_RUNNING.pause();
        nextIdleIndex = nextIdleIndex % charIdle.length;
        currentCharImg = charIdle[nextIdleIndex++];
        //let timePassedSinceIdle = new Date().getTime();
      }
    }
  }, 100);
}

function checkForCollision() {
  setInterval(function () {
    //check for chicken collision
    for (let i = 0; i < chickens.length; i++) {
      let chicken = chickens[i];
      let chicken_x = chicken.position_x + bg_imgsPosX;
      if ((chicken_x - 40) < character_x && (chicken_x + 40) > character_x) {
        if (character_y > 140) {
          nextHitIndex = nextHitIndex % charHit.length;
          currentCharImg = charHit[nextHitIndex++];
          AUDIO_HIT.play();
          let time_passed_since_collision = new Date().getTime() - lastCollisionStarted;
          if (time_passed_since_collision > 1000) {
            isColliding = true;
            character_energy -= COLLISION_DAMAGE;
            lastCollisionStarted = new Date().getTime();
          } else {
            isColliding = false;
          }
        }
      }
    }

    //check for items collision
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      let item_x = item.position_x + bg_imgsPosX;
      if ((item_x - 40) < character_x && (item_x + 40) > character_x) {
        if (character_y > 130) {
          AUDIO_BOTTLE_COLLECT.play();
          items.splice(i, 1);
          collectedBottels++;
        }
      }
    }
    //check final boss
    if (throwBottle_x > 500 + bg_imgsPosX - 100 && throwBottle_x < 500 + bg_imgsPosX + 100) {//boss x coord
      AUDIO_GLASS_BREAK.play();
      let time_passed_since_collision = new Date().getTime() - lastBossCollisionStarted;
      console.log('BOSS HIT');
      if (time_passed_since_collision > 1000) {
      boss_energy -= COLLISION_DAMAGE;
      lastBossCollisionStarted = new Date().getTime();
      }
    }

  }, 100);
}

function updateCharacter() {
  //char_image.src = currentCharImg;
  let timePassedSinceJump = new Date().getTime() - lastJumpStarted;
  if (timePassedSinceJump < JUMP_TIME) {
    console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + JUMP_TIME + ' CHARACTER POS Y ' + character_y + ' GROUND POS ' + GROUND_POS + ' CHAR IMG' + currentCharImg);
    isJumping = true;
    isLanding = false;
    if (timePassedSinceJump > JUMP_TIME / charJumpRight.length) {
      character_y = character_y - 10;
    }
  } else {//check falling
    if (character_y < GROUND_POS) {
      console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + JUMP_TIME + ' CHARACTER POS Y ' + character_y + ' GROUND POS ' + GROUND_POS + ' CHAR IMG' + currentCharImg);
      character_y = character_y + 10;
      isLanding = true;
      isJumping = false;
      if (character_y >= GROUND_POS) { //hit the ground
        AUDIO_LAND.play();
        isLanding = false;
      }
    }
  }
  char_image.src = currentCharImg;
  if (char_image.complete) {
    ctx.drawImage(char_image, character_x, character_y, char_image.width * CHARS_SCALE, char_image.height * CHARS_SCALE);
  };
}
//---------------CHARACTER CODE---------------
//---------------ITEMS CODE------------------
function createItemList() {
  for (let i = 0; i < bottles.length; i++) {
    items.push(createItem("bottle", bottles[i][0], bottles[i][1]));
  }
}

function createItem(type, position_x, imgIndex) {
  return {
    "img": "img/items/" + type + "/bottle_" + imgIndex + ".png",
    "position_x": position_x,
    "position_y": 350,
    "scale": CHARS_SCALE
  };
}

function drawItems() {
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    addItem(item.img, item.position_x, item.position_y, item.scale);
  }
}

function addItem(src, offsetX, offsetY, scale) {
  let finalXPos = bg_imgsPosX + offsetX;
  if (finalXPos > (-canvas.width) && finalXPos < canvas.width) { //render image
    let base_image = new Image();
    base_image.src = src;
    if (base_image.complete) {
      ctx.drawImage(base_image, finalXPos, offsetY, base_image.width * scale, base_image.height * scale);
    }
  }
}
//---------------ITEMS CODE END--------------
//-------------------CHICKENS CODE-------------------
function createChickenList() {
  chickens = [
    createChicken("small", 300, 5),
    createChicken("little", 800, 5),
    createChicken("little", 1500, 5),
    createChicken("small", 2700, 5),
    createChicken("small", 1000, 5),
    createChicken("little", 3000, 5),
    createChicken("little", 1500, 5),
    createChicken("small", 3500, 5)
  ];
}

function createChicken(type, position_x, speed) {
  return {
    "imgs": ["img/enemies/chicken-" + type + "/chicken-" + type + "_1.png", "img/enemies/chicken-" + type + "/chicken-" + type + "_2.png", "img/enemies/chicken-" + type + "/chicken-" + type + "_3.png"],
    "position_x": position_x,
    "position_y": 365,
    "scale": CHARS_SCALE,
    "speed": Math.random() * speed
  };
}

function calculateChickenPos() {
  setInterval(function () {
    for (let i = 0; i < chickens.length; i++) {
      let chicken = chickens[i];
      chicken.position_x = chicken.position_x - chicken.speed;
    }
  }, 100);
  setInterval(function () { //change img index for chickens
    chickenMoveImg++;
  }, 200);
}

function drawChickens() {
  for (let i = 0; i < chickens.length; i++) {
    let chicken = chickens[i];
    chickenMoveImg = chickenMoveImg % chicken.imgs.length;
    addEnemy(chicken.imgs[chickenMoveImg], chicken.position_x, chicken.position_y, chicken.scale);
  }
}

function drawFinalBoss() {
  let chicken_x = 500;
  addEnemy('img/enemies/chicken-big/alert/alert_1.png', chicken_x, 190, CHARS_SCALE);
  addEnemy('img/HUD/boss-life-bar/life_' + boss_energy + '.png', chicken_x - 100, 120, 0.5);
  if (boss_energy == 0) {
      boss_energy = 100;
  }
}

function addEnemy(src, offsetX, offsetY, scale) {
  let finalXPos = bg_imgsPosX + offsetX;
  if (finalXPos > (-canvas.width) && finalXPos < canvas.width) { //render image
    let base_image = new Image();
    base_image.src = src;
    if (base_image.complete) {
      ctx.drawImage(base_image, finalXPos, offsetY, base_image.width * scale, base_image.height * scale);
    }
  }
}
//-------------------CHICKENS CODE-------------------
//-------------BACKGROUND;HUD;ELEMNTS CODE------------
function drawBackground() {
  if (isMovingRight) {
    bg_imgsPosX -= GAME_SPEED;
  }
  if (isMovingLeft && bg_imgsPosX < 0) {
    bg_imgsPosX += GAME_SPEED;
  }
  addBackground('img/sky.png', 0, 0, 0, canvas.width, canvas.height, 1);
  for (let i = 0; i < LEVEL_WIDTH; i++) {
    let offsetX = i * canvas.width;
    if (i % 2 == 0) {//place bg1 every two canvas width before bg2
      addBackground('img/clouds/cloud_bg_1.png', (offsetX - cloudsOffSet1), 0, 0.05, canvas.width, canvas.height, 1);
      addBackground('img/background2/bg2_1.png', offsetX, 0, 0.2, canvas.width, canvas.height, 1);
      addBackground('img/background1/bg1_1.png', offsetX, 0, 0.5, canvas.width, canvas.height, 1);
      addBackground('img/grounds/ground_bg_1.png', offsetX, 0, 1, canvas.width, canvas.height, 1);
    } else { //place bg2 every two canvas width after bg1
      addBackground('img/clouds/cloud_bg_2.png', (offsetX * 0.5 - cloudsOffSet2), 50, 0.05, canvas.width * 0.6, canvas.height * 0.6, 1);
      addBackground('img/background2/bg2_2.png', offsetX, 0, 0.2, canvas.width, canvas.height, 1);
      addBackground('img/background1/bg1_2.png', offsetX, 0, 0.5, canvas.width, canvas.height, 1);
      addBackground('img/grounds/ground_bg_2.png', offsetX, 0, 1, canvas.width, canvas.height, 1);
    }
  }
}

function addBackground(src, offsetX, offsetY, offsetSpeed, width, height, scale) {
  let finalXPos = bg_imgsPosX * offsetSpeed + offsetX;
  if (finalXPos > (-canvas.width) && finalXPos < canvas.width) { //render image
    let base_image = new Image();
    base_image.src = src;
    if (base_image.complete) {
      ctx.drawImage(base_image, finalXPos, offsetY, width * scale, height * scale);
    }
  }
}

function drawHUD() {
  addElement('img/HUD/life-bar/life_' + character_energy + '.png', 0, 0, CHARS_SCALE);
  if (character_energy == 0) {
    character_energy = 100;
  }

  addElement('img/HUD/bottle.png', 590, 0, 0.5);
  drawBottelCounter();
}

function addElement(src, xPos, yPos, scale) {
  let base_image = new Image();
  base_image.src = src;
  if (base_image.complete) {
    ctx.drawImage(base_image, xPos, yPos, base_image.width * scale, base_image.height * scale);
  }
}

function drawBottelCounter() {
  ctx.font = "40px Bradley Hand ITC";
  ctx.fillStyle = "White";
  ctx.fillText("x" + collectedBottels, 655, 60);
}

function calculateCloudOffSet() {
  setInterval(function () {
    cloudsOffSet1 += 0.40;
    cloudsOffSet2 += 0.20;
  }, 50);
}

function drawThrowBottle() {
  if (bootleThrowTime) {
    let timePassed = new Date().getTime() - bootleThrowTime;
    let gravity = Math.pow(9.81, timePassed / 300);
    throwBottle_x = 70 + (timePassed * 0.7);
    throwBottle_y = 300 - (timePassed * 0.4 - gravity);
    let base_image = new Image();
    bottleThrowImg++;
    bottleThrowImg = bottleThrowImg % 3;
    base_image.src = 'img/bottle-throw/bottleThrow_' + bottleThrowImg + '.png';
    if (base_image.complete) {
      ctx.drawImage(base_image, throwBottle_x, throwBottle_y, base_image.width * CHARS_SCALE, base_image.height * CHARS_SCALE);
    }
  }
}
//-------------BACKGROUND;HUD;ELEMNTS CODE END------------

function listenForKeys() {
  document.addEventListener("keydown", function (e) {
    const k = e.key;
    let timePassedSinceJump = new Date().getTime() - lastJumpStarted;
    if (e.code == "Space" && timePassedSinceJump > JUMP_TIME * 2) {
      console.log('---------------------------------JUMP STARTED-----------------------------');
      AUDIO_JUMP.play();
      lastJumpStarted = new Date().getTime();
      nextJumpIndex = 0;
      nextLandIndex = 0;
    }
    if (k == "ArrowRight") {
      //character_x = character_x + GAME_SPEED;
      isMovingRight = true;
    }
    if (k == "ArrowLeft") {
      //character_x = character_x - GAME_SPEED;
      isMovingLeft = true;
    }
    if (k == "d" && collectedBottels > 0) {
      let timePassed = new Date().getTime() - bootleThrowTime;
      if (timePassed > 1000) {
        AUDIO_THROW.play();
        collectedBottels--;
        bootleThrowTime = new Date().getTime();
        console.log('bottle-throw');
      }
    }
  });
  document.addEventListener("keyup", function (e) {
    const k = e.key;
    if (k == "ArrowRight") {
      isMovingRight = false;
      nextMoveIndex = 0;
    }
    if (k == "ArrowLeft") {
      isMovingLeft = false;
      nextMoveIndex = 0;
    }
  });
}
*/