import { canvas, ctx, RIGHT, LEFT, GRAVITY, AUDIO_LAND, AUDIO_HIT, AUDIO_WALK, AUDIO_BOTTLE, AUDIO_CHICKEN } from "./constants.js"
import { Creature } from "./creature.js"
import { BottleThrow } from "./bottleThrow.js";
import { bottleImages } from "./animations.js";
import { Boss } from "./enemy.js"
export class Character extends Creature {
    constructor(xPos, yPos, scale, images, status, speed) {
        super(xPos, yPos, scale, images, status, speed);
        this.GROUND_POS = yPos;
        this.direction = RIGHT; //used to set the direction of character animation
        this.energy = 100;
        this.bottles = 50;
        this.bottleThrow = new BottleThrow(this.xPos, this.yPos, 0.2, 'throwed', bottleImages);
        this.coins = 0;
        this.isMovingRight = false;
        this.isMovingLeft = false;
        this.isJumping = false;
        this.isLanding = false;
        this.isIdle = true;
        this.isLongIdle = false;
        this.lastJumpStarted = 0;
        this.lastCollisionTime = 0;
        this.JUMP_TIME = 600;
        this.createObjectAnimations(images);
        this.start = new Date().getTime();
        this.isColliding = false;
    }

    createObjectAnimations(images) {
        for (let status in images) {
            this.animation[status] = [this.createAnimation(images[status][LEFT]), this.createAnimation(images[status][RIGHT])];
        }
    }

    colliding(element) {
        return ((element.finalXPos - this.xPos + 10) < (this.base_image.width * this.scale - 40) && (this.xPos - element.finalXPos + 40) < (element.base_image.width * element.scale - 10)) && ((element.yPos - this.yPos + 10) < (this.base_image.height * this.scale));
    }
    checkForCollision(enemies, bottles, coins) {
        //check collision with enemies
        if (!this.isDead) {
            for (let i = 0; i < enemies.length; i++) {
                if (enemies[i].status != 'dead') {
                    if (this.colliding(enemies[i])) {
                        if (this.isLanding) {
                            if (!(enemies[i] instanceof Boss)) {
                                enemies[i].status = 'dead';
                                AUDIO_CHICKEN.play();
                                break;
                            }
                        } else {
                            let timePassedSinceCollision = new Date().getTime() - this.lastCollisionTime;
                            if (timePassedSinceCollision > 1000) {
                                this.lastCollisionTime = new Date().getTime();
                                if (this.energy == 0) {
                                    this.isDead = true;
                                }
                                this.energy -= enemies[i].damage;
                            }
                            this.isColliding = true;
                            AUDIO_HIT.play();
                            break;
                        }

                    } else {
                        this.isColliding = false;
                    }
                }
            }
            //check collision with bottles
            for (let i = 0; i < bottles.length; i++) {
                if (this.colliding(bottles[i])) {
                    this.bottles++;
                    AUDIO_BOTTLE.play();
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

        
    }

    checkForJump() {
        if (!this.isDead) {
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
                    this.yPos += 10;
                    this.isLanding = true;
                    if (this.yPos >= this.GROUND_POS) {
                        AUDIO_LAND.play();
                    }
                }
                else {

                    this.isLanding = false;
                }
            }
			requestAnimationFrame(this.checkForJump.bind(this));
        }

        
    }
    setStatus(actualStatus) {
        if (this.isDead) {
            if (actualStatus != 'dead') {
                this.interval = 300;
                this.imgIndex = 0;
                this.status = 'dead';
            }
        }
        else if (this.isColliding) {
            if (actualStatus != 'hit') {
                this.interval = 300;
                this.imgIndex = 0;
                this.status = 'hit';
            }
        }
        else if (this.isJumping || this.isLanding) {
            if (this.isJumping && actualStatus != 'jump') {
                this.status = 'jump';
                this.interval = this.JUMP_TIME / 2;
                this.imgIndex = 0;
            }
            if (this.isLanding && actualStatus != 'land') {
                this.status = 'land';
                this.interval = this.JUMP_TIME / 2;
                this.imgIndex = 0;
            }
        }
        else if (this.isMovingLeft || this.isMovingRight) {
            if (actualStatus != 'walk') {
                this.status = 'walk';
                this.interval = this.speed * 50;
                this.imgIndex = 0;
            }
            AUDIO_WALK.play();
        }
        else {
            this.interval = 200;
            if (actualStatus != 'idle') {
                this.status = 'idle';
                this.imgIndex = 0;
            }
        }
		if(!this.isDead){
			requestAnimationFrame(function () {
            this.setStatus(this.status);
        }.bind(this));
		}
        
    }

    draw() {
        if (this.imgIndex >= this.animation[this.status][this.direction].length)
            this.imgIndex = 0;
        this.base_image = this.animation[this.status][this.direction][this.imgIndex];
        ctx.drawImage(this.base_image, this.finalXPos, this.yPos, this.base_image.width * this.scale, this.base_image.height * this.scale);
        //requestAnimationFrame(this.draw.bind(this));
    }

    updateImg() {
        let timePassedSinceLastCall = new Date().getTime() - this.start;
        if (timePassedSinceLastCall > this.interval) {
            if (!(this.isDead && this.imgIndex == 5))
                this.imgIndex++;
            this.start = new Date().getTime();
        }
        // requestAnimationFrame(this.updateImg.bind(this));
    }
}
