import { World } from '../models/world.js'
import { RIGHT, LEFT, canvas } from '../models/constants.js'
import { Boss, Enemy } from '../models/enemy.js';
import {chickenSmallImages} from '../models/animations.js'

function init() {
  let chickensSmallXpos = [500, 700, 1200];
  let chickensBigXpos = [900, 1200, 2000];
  let bossesXpos = [canvas.width * 4 * 2];
  let coinsXpos = [500, 700, 1200, 900, 1200, 2000, 2300, , 3000, 5000];
  let bottlesXpos = [550, 750, 1250, 950, 1250, 2050, 2350, , 3100, 5300];
  let level = new World(4, chickensSmallXpos, chickensBigXpos, bossesXpos, coinsXpos, bottlesXpos);
  let boss = level.enemies.find(enemie => {
    return enemie instanceof Boss;
  });

  level.xPos = -(level.width - canvas.width);
  level.pepe.checkForJump();
  level.pepe.checkForCollision(level.enemies, level.bottles, level.coins);
  boss.setStatus(boss.status);

  setInterval(function () {
    if (boss.isAttacking && !boss.isDead) {
      level.enemies.push(new Enemy(boss.xPos, 370, 0.2, chickenSmallImages, 'walk', Math.random() * (7.875 * 0.2)));
      console.log(boss.xPos);
    }
  }, 3000);
  
  level.pepe.setStatus(level.pepe.status);
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
      let timePassed = new Date().getTime() - character.bottleThrow.bottleThrowTime;
      if (timePassed > 1000) {
        character.bottles--;
        character.bottleThrow.bottleThrowTime = new Date().getTime();
        //console.log('bottle-throw');
        character.bottleThrow.initialYPos = character.yPos + 100;
        character.bottleThrow.initialXPos = character.xPos + 50;
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