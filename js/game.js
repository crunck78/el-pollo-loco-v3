let GRAVITY = 9.81;
let RIGHT = 1;
let LEFT = 0;
let STAY = -1;
let MOVEMENT_SPEED = 15.75 * 0.2;

pepeAnimations = {
  walks: [
    ["img/character/walk/left/W-21.png", "img/character/walk/left/W-22.png", "img/character/walk/left/W-23.png", "img/character/walk/left/W-24.png", "img/character/walk/left/W-25.png", "img/character/walk/left/W-26.png"],
    ["img/character/walk/right/W-21.png", "img/character/walk/right/W-22.png", "img/character/walk/right/W-23.png", "img/character/walk/right/W-24.png", "img/character/walk/right/W-25.png", "img/character/walk/right/W-26.png"]
  ],
  jumps: [
    ["img/character/jump/left/J-33.png", "img/character/jump/left/J-34.png", "img/character/jump/left/J-35.png"],
    ["img/character/jump/right/J-33.png", "img/character/jump/right/J-34.png", "img/character/jump/right/J-35.png"]
  ],
  lands: [
    ["img/character/jump/left/J-36.png", "img/character/jump/left/J-37.png", "img/character/jump/left/J-38.png"],
    ["img/character/jump/right/J-36.png", "img/character/jump/right/J-37.png", "img/character/jump/right/J-38.png"]
  ],
  hits: [
    ["img/character/hit/left/H-41.png", "img/character/hit/left/H-42.png", "img/character/hit/left/H-43.png"],
    ["img/character/hit/right/H-41.png", "img/character/hit/right/H-42.png", "img/character/hit/right/H-43.png"]
  ],
  idles: [
    ["img/character/idle/left/I-1.png", "img/character/idle/left/I-2.png", "img/character/idle/left/I-3.png", "img/character/idle/left/I-4.png", "img/character/idle/left/I-5.png", "img/character/idle/left/I-6.png", "img/character/idle/left/I-7.png", "img/character/idle/left/I-8.png", "img/character/idle/left/I-9.png", "img/character/idle/left/I-10.png"],
    ["img/character/idle/right/I-1.png", "img/character/idle/right/I-2.png", "img/character/idle/right/I-3.png", "img/character/idle/right/I-4.png", "img/character/idle/right/I-5.png", "img/character/idle/right/I-6.png", "img/character/idle/right/I-7.png", "img/character/idle/right/I-8.png", "img/character/idle/right/I-9.png", "img/character/idle/right/I-10.png"]
  ],
  long_idles: [
    ["img/character/idle/left/I-11.png", "img/character/idle/left/I-12.png", "img/character/idle/left/I-13.png", "img/character/idle/left/I-14.png", "img/character/idle/left/I-15.png", "img/character/idle/left/I-16.png", "img/character/idle/left/I-17.png", "img/character/idle/left/I-18.png", "img/character/idle/left/I-19.png", "img/character/idle/left/I-20.png"],
    ["img/character/idle/right/I-11.png", "img/character/idle/right/I-12.png", "img/character/idle/right/I-13.png", "img/character/idle/right/I-14.png", "img/character/idle/right/I-15.png", "img/character/idle/right/I-16.png", "img/character/idle/right/I-17.png", "img/character/idle/right/I-18.png", "img/character/idle/right/I-19.png", "img/character/idle/right/I-20.png"]
  ],
  deads: [
    ["img/character/dead/left/D-51.png", "img/character/dead/left/D-52.png", "img/character/dead/left/D-53.png", "img/character/dead/left/D-54.png", "img/character/dead/left/D-55.png", "img/character/dead/left/D-56.png"],
    ["img/character/dead/right/D-51.png", "img/character/dead/right/D-52.png", "img/character/dead/right/D-53.png", "img/character/dead/right/D-54.png", "img/character/dead/right/D-55.png", "img/character/dead/right/D-56.png"]
  ]
};


chickenSmallAnimations = {
  walks: ["img/enemies/chicken-small/chicken-small_1.png", "img/enemies/chicken-small/chicken-small_2.png", "img/enemies/chicken-small/chicken-small_3.png"],
  deads: "img/enemies/chicken-small/chicken-small_4.png"
};

chickenBigAnimations = {
  walks: ["img/enemies/chicken-little/chicken-little_1.png", "img/enemies/chicken-little/chicken-little_2.png", "img/enemies/chicken-little/chicken-little_3.png"],
  deads: "img/enemies/chicken-little/chicken-little_4.png"
};

bossAnimations = {
  walks: ["img/enemies/chicken-big/walk/walk_1.png", "img/enemies/chicken-big/walk/walk_2.png", "img/enemies/chicken-big/walk/walk_3.png", "img/enemies/chicken-big/walk/walk_4.png"],
  deads: ["img/enemies/chicken-big/dead/dead_1.png", "img/enemies/chicken-big/dead/dead_2.png", "img/enemies/chicken-big/dead/dead_3.png"],
  alerts: ["img/enemies/chicken-big/alert/alert_1.png", , "img/enemies/chicken-big/alert/alert_2.png", "img/enemies/chicken-big/alert/alert_3.png", "img/enemies/chicken-big/alert/alert_4.png", "img/enemies/chicken-big/alert/alert_5.png", "img/enemies/chicken-big/alert/alert_6.png", "img/enemies/chicken-big/alert/alert_7.png", "img/enemies/chicken-big/alert/alert_8.png"],
  attacks: ["img/enemies/chicken-big/attack/attack_1.png", "img/enemies/chicken-big/attack/attack_2.png", "img/enemies/chicken-big/attack/attack_3.png", "img/enemies/chicken-big/attack/attack_4.png", "img/enemies/chicken-big/attack/attack_5.png", "img/enemies/chicken-big/attack/attack_6.png", "img/enemies/chicken-big/attack/attack_7.png", "img/enemies/chicken-big/attack/attack_8.png"],
  hits: ["img/enemies/chicken-big/hit/hit_1.png", "img/enemies/chicken-big/hit/hit_2.png", "img/enemies/chicken-big/hit/hit_3.png"]
};

let World = function (size, chickensSmall, chickensBig, bosses) { // size should be a pair number size % 2 == 0 
  this.width = canvas.width * 2 * size;
  this.height = canvas.height;
  this.xPos = 0; //worlds possition in relate to Character
  this.enemies = [];
  this.pepe = new Character(canvas.width * 0.05, canvas.height * 0.365, 0.2, pepeAnimations, 'idles', 15.75 * 0.2);
  this.scenes = [];
  this.sky = new Background(this.xPos, "img/sky.png", 1);// static, never moves

  for (let i = 0; i < chickensSmall.length; i++) {
    this.addChickenSmall(chickensSmall[i]);
  }

  for (let i = 0; i < chickensBig.length; i++) {
    this.addChickenBig(chickensBig[i]);
  }

  for (let i = 0; i < bosses.length; i++) {
    this.addBoss(bosses[i]);
  }

  for (let i = 0; i < size; i++) {
    this.addScene(i * 2 * canvas.width); // 1 x scene.width equals 2 x canvas.width
  }
};

World.prototype.addChickenSmall = function (xPos) {
  this.enemies.push(new Enemy(xPos, 370, 0.2, chickenSmallAnimations, 'walks', Math.random() * (7.875 * 0.2)));
};

World.prototype.addChickenBig = function (xPos) {
  this.enemies.push(new Enemy(xPos, 365, 0.2, chickenBigAnimations, 'walks', Math.random() * (7.875 * 0.2)));
};

World.prototype.addBoss = function (xPos) {
  this.enemies.push(new Boss(xPos, 200, 0.2, bossAnimations, 'walks', Math.random() * (7.875 * 0.2)));
};

World.prototype.addScene = function (xPos) {
  this.scenes.push(new Scene(xPos));
};

World.prototype.updateWorld = function () {
  if (this.pepe.isMovingRight && this.xPos > -(this.width - canvas.width)) {
    this.xPos -= this.pepe.speed;
    //this.pepe.relatedXPos += this.pepe.speed;
  }
  if (this.pepe.isMovingLeft && this.xPos < 0) {
    this.xPos += this.pepe.speed;
    //this.pepe.relatedXPos -= this.pepe.speed;
  }
}

World.prototype.draw = function () {
  //console.log('CHAR MOVES R ' + char.isMovingRight + ' CHAR MOVES L ' + char.isMovingLeft);
  //console.log('WORLD XPOS: ', this.xPos);
  //console.log('WORLD WIDTH', this.width);
  this.sky.draw();
  for (let i = 0; i < this.scenes.length; i++) {
    this.scenes[i].draw(this.xPos);
  }
  for (let i = 0; i < this.enemies.length; i++) {
    this.enemies[i].moveEnemy();
    this.enemies[i].draw(this.xPos);
  }
  this.pepe.draw();
};

let Scene = function (xPos) {
  this.width = 2 * canvas.width; // one scene consiste of two backgrounds back to back, where one background is one canvas width large
  this.height = canvas.height;
  this.xPos = xPos; // world related xPos
  this.backgrounds = {
    grounds: [new Background(this.xPos, "img/grounds/ground_bg_1.png", 1), new Background(this.xPos + canvas.width, "img/grounds/ground_bg_2.png", 1)],
    backgrounds1: [new Background(this.xPos, "img/background1/bg1_1.png", 0.65), new Background(this.xPos + canvas.width, "img/background1/bg1_2.png", 0.65)],
    backgrounds2: [new Background(this.xPos, "img/background2/bg2_1.png", 0.4), new Background(this.xPos + canvas.width, "img/background2/bg2_2.png", 0.4)],
    clouds: [new Clouds(this.xPos, 0, "img/clouds/cloud_bg_1.png", 0.5, -1, 0.1), new Clouds(this.xPos + canvas.width, 0, "img/clouds/cloud_bg_2.png", 0.1, 1, 0.1)]
  };
};

Scene.prototype.draw = function (movement) {
  //first canvas image
  this.backgrounds.clouds[0].moveClouds();
  this.backgrounds.clouds[0].draw(movement);
  this.backgrounds.backgrounds2[0].draw(movement);
  this.backgrounds.backgrounds1[0].draw(movement);
  this.backgrounds.grounds[0].draw(movement);
  //second canvas image
  this.backgrounds.clouds[1].moveClouds();
  this.backgrounds.clouds[1].draw(movement);
  this.backgrounds.backgrounds2[1].draw(movement);
  this.backgrounds.backgrounds1[1].draw(movement);
  this.backgrounds.grounds[1].draw(movement);
};

let Background = function (xPos, src, distance) {
  this.width = canvas.width;
  this.height = canvas.height;
  this.xPos = xPos; //world related xPos
  this.yPos = 0;
  this.base_image = new Image();
  this.base_image.src = src;
  this.distance = distance; // use to calculate world movement offset
  this.finalXPos = xPos; // Character related xPos
};

Background.prototype.draw = function (movement = 0) { //if no movement given. background's final possition equals world's related xPos
  this.finalXPos = movement * this.distance + this.xPos;
  if (this.finalXPos > (-canvas.width) && this.finalXPos < canvas.width) { //render image
    if (this.base_image.complete) {
      ctx.drawImage(this.base_image, this.finalXPos, this.yPos, this.width, this.height);
    } else {
      //console.log('IMG BACKGROUND ' + this.base_image.src + ' NOT COMPLETE');
    }
  }
};

let Clouds = function (xPos, yPos, imgSrc, cloudsWindOffset, windDirection, distance) {
  Background.call(this, xPos, imgSrc, distance);
  this.ypos = yPos;
  this.cloudsWindOffset = cloudsWindOffset;
  this.windDirection = windDirection;
};

Clouds.prototype = Object.create(Background.prototype);
Clouds.prototype.moveClouds = function () {
  this.xPos = (this.xPos - this.cloudsWindOffset);
}

let Character = function (xPos, yPos, scale, animations, status, speed) {
  this.xPos = xPos; //World related xPos
  this.yPos = yPos;
  this.GROUND_POS = yPos;
  this.scale = scale;
  this.animations = animations;
  this.status = status; //used to set the type of charater animation
  this.direction = RIGHT; //used to set the direction of character animation
  this.imgIndex = 0;
  this.base_image = new Image();
  /*this.base_image.src = this.animations[this.status][this.direction][this.imgIndex];
  this.width = this.base_image.width * this.scale;
  this.height = this.base_image.height * this.scale;*/
  this.energy = 100;
  this.speed = speed; // controls how fast the world is moving if character is moving
  this.bottles = 0;
  /*boolean variables used to set and controle the status variable of character 
  * collision has first priority; if is colliding, status equals hits and no other status checks are made
  * next is jumping and landing prior to other stats;
  * then moving left or right
  * last is idle and long-idle
  */
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isColliding = false;
  this.isJumping = false;
  this.isLanding = false;
  this.isIdle = true;
  this.isLongIdle = false;
  this.lastJumpStarted = 0;
  this.JUMP_TIME = 600;
  //this.finalXPos = this.xPos;
};

Character.prototype.colliding = function (element) {
  return ((element.finalXPos - this.xPos + 10) < (this.base_image.width * this.scale - 40) && (this.xPos - element.finalXPos + 40) < (element.base_image.width * element.scale - 10)) && ((element.yPos - this.yPos + 10) < (this.base_image.height * this.scale));
}

Character.prototype.checkForCollision = function (elements) {
  for (let i = 0; i < elements.length; i++) {
    if (this.colliding(elements[i])) {
      this.isColliding = true;
      //console.log('COLLIDING :' + this.isColliding);
      break;
    } else {
      this.isColliding = false;
      //console.log('COLLIDING :' + this.isColliding);
    }
  }
}

Character.prototype.checkForJump = function () {
  let timePassedSinceJump = new Date().getTime() - this.lastJumpStarted;
  if (timePassedSinceJump < this.JUMP_TIME) {
    //console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + this.JUMP_TIME + ' CHARACTER POS Y ' + this.yPos + ' GROUND POS ' + this.GROUND_POS + ' CHAR IMG' + this.base_image.src);
    this.isLanding = false;
    if (timePassedSinceJump > this.JUMP_TIME / 2) {
      this.yPos -= 10;
    }
  } else {//check falling
    this.isLanding = true;
    this.isJumping = false;
    if (this.yPos < this.GROUND_POS) {
      //console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + this.JUMP_TIME + ' CHARACTER POS Y ' + this.yPos + ' GROUND POS ' + this.GROUND_POS + ' CHAR IMG' + this.base_image.src);
      this.yPos += 10;
    } else {
      //AUDIO_LAND.play();
      this.isLanding = false;
    }
  }
}

Character.prototype.setStatus = function () {
  if (this.isColliding) {
    this.status = 'hits';
  } else if (this.isJumping || this.isLanding) {
    if (this.isJumping) {
      this.status = 'jumps';
    }
    if (this.isLanding) {
      this.status = 'lands';
    }
  } else if (this.isMovingLeft || this.isMovingRight) {
    this.status = 'walks';
  } else {
    this.status = 'idles';
  }
  //console.log('CHAR STATUS: ' + this.status);
};

Character.prototype.draw = function () {
  this.imgIndex = this.imgIndex % this.animations[this.status][this.direction].length;
  this.base_image.src = this.animations[this.status][this.direction][this.imgIndex++];
  if (this.base_image.complete) {
    ctx.drawImage(this.base_image, this.xPos, this.yPos, this.base_image.width * this.scale, this.base_image.height * this.scale);
  } else {
    console.log('IMG CHAR ' + this.base_image.src + ' NOT COMPLETE');
  }
};

let Enemy = function (xPos, yPos, scale, animations, status, speed) {
  this.xPos = xPos; //world related xPos
  this.yPos = yPos;
  this.scale = scale;
  this.base_image = new Image();
  this.imgIndex = 0;
  this.animations = animations;
  this.status = status;
  this.speed = speed;
  this.finalXPos = this.xPos; //character related xpos
};

Enemy.prototype.moveEnemy = function () {
  this.xPos -= this.speed;
}

Enemy.prototype.draw = function (movement) {
  this.finalXPos = movement + this.xPos;
  if (this.finalXPos > (-canvas.width) && this.finalXPos < canvas.width) { //render image
    this.imgIndex = this.imgIndex % this.animations[this.status].length;
    this.base_image.src = this.animations[this.status][this.imgIndex++];
    if (this.base_image.complete) {
      ctx.drawImage(this.base_image, this.finalXPos, this.yPos, this.base_image.width * this.scale, this.base_image.height * this.scale);
    } else {
      //console.log('IMG ENEMY ' + this.base_image.src + ' NOT COMPLETE');
    }
  }
};

let Boss = function (xPos, yPos, scale, animations, status, speed) {
  Enemy.call(this, xPos, yPos, scale, animations, status, speed);
  this.energy = 100;
};

Boss.prototype = Object.create(Enemy.prototype);

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
    if (k == "d" && this.bottels > 0) {
      character.bottels--;
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

let canvas;
let ctx;

function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  let chickensSmall = [500, 700, 1200];
  let chickensBig = [900, 1200, 2000];
  let bosses = [2000, 5000];
  let level = new World(10, chickensSmall, chickensBig, bosses);
  //let pepe = new Character(canvas.width * 0.2, canvas.height * 0.2, canvas.width * 0.05, canvas.height * 0.365, 0.2);
  
  setInterval(function () {
    level.pepe.checkForJump();
    level.pepe.checkForCollision(level.enemies);
    level.pepe.setStatus();
    level.updateWorld();
    level.draw();
    
  }, 1000 / 60);
  listenForKeys(level.pepe);
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