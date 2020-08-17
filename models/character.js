import { canvas, ctx, RIGHT, LEFT, GRAVITY } from "./constants.js"
import { Creature } from "./creature.js"
import { Item } from "./item.js";
import { bottleImages } from "./animations.js";
export class Character extends Creature {
    constructor(xPos, yPos, scale, images, status, speed) {
        super(xPos, yPos, scale, images, status, speed);
        this.GROUND_POS = yPos;
        this.direction = RIGHT; //used to set the direction of character animation
        this.energy = 100;
        this.bottles = 50;
        this.bottleThrow = new Item(this.xPos, this.yPos, 0.2, 'throwed', bottleImages);
        this.coins = 0;
        this.isMovingRight = false;
        this.isMovingLeft = false;
        this.isColliding = false;
        this.isJumping = false;
        this.isLanding = false;
        this.isIdle = true;
        this.isLongIdle = false;
        this.lastJumpStarted = 0;
        this.lastCollisionTime = 0;
        this.JUMP_TIME = 600;
        this.bottleThrowTime = 0;
        this.bottleThrowVelocity = 1.7;
        this.bottleThrowAngle = 1; /* Radians */
        this.bottleThrowImg = 0;
        this.createObjectAnimations(images);
        this.start = new Date().getTime();
    }

    createObjectAnimations(images) {
        for (let status in images) {
            this.animation[status] = [this.createAnimation(images[status][LEFT]), this.createAnimation(images[status][RIGHT])];
        }
    }

    colliding(element) {
        return ((element.finalXPos - this.xPos + 10) < (this.animation[this.status][this.direction][this.imgIndex].width * this.scale - 40) && (this.xPos - element.finalXPos + 40) < (element.base_image.width * element.scale - 10)) && ((element.yPos - this.yPos + 10) < (this.animation[this.status][this.direction][this.imgIndex].height * this.scale));
    }
    checkForCollision(enemies, bottles, coins) {
        //check collision with enemies
        for (let i = 0; i < enemies.length; i++) {
            if (this.colliding(enemies[i])) {
                let timePassedSinceCollision = new Date().getTime() - this.lastCollisionTime;
                if (timePassedSinceCollision > 1000) {
                    this.lastCollisionTime = new Date().getTime();
                    if (this.energy == 0) {
                        this.energy = 100;
                    }
                    this.energy -= enemies[i].damage;

                }
                this.isColliding = true;
                break;
            } else {
                this.isColliding = false;
            }
        }
        //check collision with bottles
        for (let i = 0; i < bottles.length; i++) {
            if (this.colliding(bottles[i])) {
                this.bottles++;

                bottles.splice(i, 1);
            }
        }
        //check collision with coins
        for (let i = 0; i < coins.length; i++) {
            if (this.colliding(coins[i])) {
                this.coins++;

                coins.splice(i, 1);
            }
        }
        requestAnimationFrame(function () {
            this.checkForCollision(enemies, bottles, coins);

        }.bind(this));
    }

    checkForJump() {
        let timePassedSinceJump = new Date().getTime() - this.lastJumpStarted;
        if (timePassedSinceJump < this.JUMP_TIME) {
            //console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + this.JUMP_TIME + ' CHARACTER POS Y ' + this.yPos + ' GROUND POS ' + this.GROUND_POS + ' CHAR IMG' + this.base_image.src);
            this.isLanding = false;
            if (timePassedSinceJump > this.JUMP_TIME / 2) {
                this.yPos -= 10;
            }
        }
        else { //check falling

            this.isJumping = false;
            if (this.yPos < this.GROUND_POS) {
                //console.log('TIME PASSED SINCE JUMP ' + timePassedSinceJump + ' JUMP TIME' + this.JUMP_TIME + ' CHARACTER POS Y ' + this.yPos + ' GROUND POS ' + this.GROUND_POS + ' CHAR IMG' + this.base_image.src);
                this.yPos += 10;
                this.isLanding = true;
            }
            else {
                //AUDIO_LAND.play();
                this.isLanding = false;
            }
        }
        requestAnimationFrame(this.checkForJump.bind(this));
    }
    setStatus() {
        if (this.isColliding) {
            this.status = 'hit';
        }
        else if (this.isJumping || this.isLanding) {
            if (this.isJumping) {
                this.status = 'jump';
            }
            if (this.isLanding) {
                this.status = 'land';
            }
        }
        else if (this.isMovingLeft || this.isMovingRight) {
            this.status = 'walk';
        }
        else {
            this.status = 'idle';
        }
        //console.log('CHAR STATUS: ' + this.status);
        requestAnimationFrame(this.setStatus.bind(this));
    }

    draw() {
        if (this.imgIndex >= this.animation[this.status][this.direction].length)
            this.imgIndex = 0;
        this.base_image = this.animation[this.status][this.direction][this.imgIndex]
        ctx.drawImage(this.animation[this.status][this.direction][this.imgIndex], this.finalXPos, this.yPos, this.animation[this.status][this.direction][this.imgIndex].width * this.scale, this.animation[this.status][this.direction][this.imgIndex].height * this.scale);
        //requestAnimationFrame(this.draw.bind(this));
    }

    updateImg(interval) {
        let timePassedSinceLastCall = new Date().getTime() - this.start;
        if (timePassedSinceLastCall > interval) {
            this.imgIndex++;


            //console.log('img index ' + this.imgIndex + 'status ' + this.status);
            //console.log('IMG SRC' + this.animation[this.status][this.direction][this.imgIndex].src);
            this.start = new Date().getTime();
        }
        // requestAnimationFrame(this.updateImg.bind(this));
    }

    throwBottle() {
        if (this.bottleThrowTime) {
            let timePassed = new Date().getTime() - this.bottleThrowTime;
            if (this.bottleThrow.yPos > 350 && timePassed > 500) {
                this.bottleThrow.status = 'splash';
                this.bottleThrow.updateImg(200);
                
                this.bottleThrow.draw();
            } else {
                this.bottleThrow.status = 'throwed';
                this.bottleThrow.yPos = 300 - (Math.sin(1) * this.bottleThrowVelocity * timePassed + (0.5 * GRAVITY * timePassed * timePassed));
                this.bottleThrow.finalXPos = 70 + (timePassed * (Math.cos(1) * this.bottleThrowVelocity));
                this.bottleThrow.updateImg(100);
                this.bottleThrow.draw();
            }
           
        }
    }
}