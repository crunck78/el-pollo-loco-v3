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