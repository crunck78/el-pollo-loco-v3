import { World } from '../models/world.js'
import { RIGHT, LEFT, canvas, AUDIO_JUMP, AUDIO_THROW, AUDIO_BACKGROUND } from '../models/constants.js'
import { Boss, Enemy } from '../models/enemy.js';
import { chickenSmallImages } from '../models/animations.js'

function init() {
  let chickensSmallXpos = [500, 700, 1200];
  let chickensBigXpos = [900, 1200, 2000];
  let bossesXpos = [canvas.width * 4 * 2];
  let coinsXpos = [500, 700, 1200, 900, 1200, 2000, 2300, , 3000, 5000];
  let bottlesXpos = [550, 750, 1250, 950, 1250, 2050, 2350, , 3100, 5300];
  return new World(4, chickensSmallXpos, chickensBigXpos, bossesXpos, coinsXpos, bottlesXpos);
}

function playMusic() {
  AUDIO_BACKGROUND.play();
  requestAnimationFrame(playMusic);
}

function start(level){
  let boss = level.enemies.find(enemy => {
    return enemy instanceof Boss;
  });

  setInterval(function () {
    if (boss.isAttacking && !boss.isDead && !level.pepe.isDead) {
      level.enemies.push(new Enemy(boss.xPos, 370, 0.2, chickenSmallImages, 'walk', Math.random() * (7.875 * 0.2)));
    }
  }, 2000);

  playMusic();
  level.pepe.checkForJump();
  level.pepe.checkForCollision(level.enemies, level.bottles, level.coins);
  level.pepe.bottleThrow.checkForBottleHit(level.enemies);

  level.pepe.setStatus(level.pepe.status);
  boss.setStatus(boss.status);
  level.updateWorld();
  level.draw();

  listenForKeys(level.pepe);
  listenForTouches(level.pepe);
}

window.addEventListener('load', function(){
  let level = init();
  document.getElementById('start-btn').onclick = function(){
    document.getElementById("start-screen").classList.add("d-none");
    document.getElementById("intro-img").classList.add("d-none");
    document.getElementById("canvas").classList.remove("d-none");
    document.getElementById("hud").classList.remove("d-none");
    document.getElementById("touchpad").classList.remove("d-none");
    start(level);
  }
});

function listenForKeys(character) {
  document.addEventListener("keydown", function (e) {
    const k = e.key;
    let timePassedSinceJump = new Date().getTime() - character.lastJumpStarted;
    if (e.code == "Space" && timePassedSinceJump > character.JUMP_TIME * 2) {
      character.lastJumpStarted = new Date().getTime();
      character.isJumping = true;
      AUDIO_JUMP.play();
    }
    if (k == "ArrowRight") {
      character.isMovingRight = true;
      character.direction = RIGHT;

    }
    if (k == "ArrowLeft") {
      character.isMovingLeft = true;
      character.direction = LEFT;

    }
    if (k == "d" && character.bottles > 0) {
      let timePassed = new Date().getTime() - character.bottleThrow.bottleThrowTime;
      if (timePassed > 1000) {
        character.bottles--;
        character.bottleThrow.bottleThrowTime = new Date().getTime();
        character.bottleThrow.initialYPos = character.yPos + 100;
        character.bottleThrow.initialXPos = character.xPos + 50;
        AUDIO_THROW.play();
      }
    }
  });
  document.addEventListener("keyup", function (e) {
    const k = e.key;
    if (k == "ArrowRight") {
      character.isMovingRight = false;
    }
    if (k == "ArrowLeft") {
      character.isMovingLeft = false;
    }
  });
}

function listenForTouches(character) {
  document.getElementById("left-pad").addEventListener("touchstart", function (e) {
    character.isMovingLeft = true;
    character.direction = LEFT;

    log("touchstart");

  });

  document.getElementById("left-pad").addEventListener("touchend", function (e) {
    character.isMovingLeft = false;
    log("touchend");
  });

  document.getElementById("right-pad").addEventListener("touchstart", function (e) {
    character.isMovingRight = true;
    character.direction = RIGHT;

    log("touchstart");

  });

  document.getElementById("right-pad").addEventListener("touchend", function (e) {
    character.isMovingRight = false;
    log("touchend");
  });

  document.getElementById("jump-pad").addEventListener("touchstart", function (e) {
    let timePassedSinceJump = new Date().getTime() - character.lastJumpStarted;
    if (timePassedSinceJump > character.JUMP_TIME * 2) {
      //perform jump
      character.lastJumpStarted = new Date().getTime();
      character.isJumping = true;
      AUDIO_JUMP.play();
    }
  });

  document.getElementById("trow-pad").addEventListener("touchstart", function (e) {
    if (character.bottles > 0) {
      let timePassed = new Date().getTime() - character.bottleThrow.bottleThrowTime;
      if (timePassed > 1000) {
        character.bottles--;
        character.bottleThrow.bottleThrowTime = new Date().getTime();
        //console.log('bottle-throw');
        character.bottleThrow.initialYPos = character.yPos + 100;
        character.bottleThrow.initialXPos = character.xPos + 50;
        AUDIO_THROW.play();
      }
      //throw bottle
    }
  });
}

function log(msg) {
  document.getElementById("log").innerHTML = msg;
}
