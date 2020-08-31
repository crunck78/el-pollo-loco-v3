import { Item } from './item.js'
import { GRAVITY } from './constants.js'
import { Boss } from './enemy.js'

export class BottleThrow extends Item {
    constructor(xPos, yPos, scale, status, images) {
        super(xPos, yPos, scale, status, images);
        this.bottleThrowTime = 0;
        this.bottleThrowVelocity = 1.7;
        this.bottleThrowAngle = 1; /* Radians */
        this.lastCollisionTime = 0;
        this.initialYPos = 0;
        this.initialXPos = 0;
    }

    throwBottle() {
        let timePassed = new Date().getTime() - this.bottleThrowTime;
        this.yPos = this.initialYPos - (Math.sin(1) * this.bottleThrowVelocity * timePassed + (0.5 * GRAVITY * timePassed * timePassed));
        this.finalXPos = this.initialXPos + (timePassed * (Math.cos(1) * this.bottleThrowVelocity));
        this.draw();
    }

    checkForBottleHit2(enemies) {
        console.log('All enemies are', enemies);
        enemies
            .filter(enemy => enemy.status != 'dead')
            .forEach(enemy => {
                if (this.isColliding(enemy) && this.yPos < 350) {
                    if (enemy instanceof Boss) {
                        //Später
                    } else {
                        enemy.status = 'dead';
                        console.log("BOTTLE HIT SMALL ENEMY");
                    }
                } else {
                    // Später
                }

            });
    }

    checkForBottleHit(enemies) {
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].status != 'dead') {
                if (this.isColliding(enemies[i]) && this.yPos < 350) {
                    if (enemies[i] instanceof Boss) {
                        //console.log(enemies[i].status);
                        //console.log("BOTTLE IS COLLIDING BOSS",enemies[i].isColliding);
                        let timePassedSinceCollision = new Date().getTime() - this.lastCollisionTime;
                        if (timePassedSinceCollision > 1000) {
                            this.lastCollisionTime = new Date().getTime();
                            if (enemies[i].energy == 0) {
                                enemies[i].isDead = true;
                            } else {
                                // console.log("BOTTLE HIT BOSS");
                                enemies[i].isColliding = true;
                                enemies[i].energy -= 20;//damage
                            }
                        }
                    } else {
                        enemies[i].status = 'dead';
                        console.log("BOTTLE HIT SMALL ENEMIE");
                    }
                } else {
                    if (enemies[i] instanceof Boss) {
                        enemies[i].isColliding = false;
                    }
                }
            }
        }
         requestAnimationFrame(function(){
             this.checkForBottleHit(enemies);
         }.bind(this));
    }

    isColliding(element) {
        return ((element.finalXPos - this.finalXPos + 10) < (this.base_image.width * this.scale - 10) && (this.finalXPos - element.finalXPos + 10) < (element.base_image.width * element.scale - 10)) && ((element.yPos - this.yPos + 10) < (this.base_image.height * this.scale));
    }
}