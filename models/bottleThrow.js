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
    }

    throwBottle() {
        let timePassed = new Date().getTime() - this.bottleThrowTime;
        this.yPos = 300 - (Math.sin(1) * this.bottleThrowVelocity * timePassed + (0.5 * GRAVITY * timePassed * timePassed));
        this.finalXPos = 70 + (timePassed * (Math.cos(1) * this.bottleThrowVelocity));
        this.updateImg(100);
        this.draw();
    }

    checkForBottleHit(enemies) {

        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].status != 'dead') {
                if (this.isColliding(enemies[i]) && this.yPos < 350) {
                    console.log("BOTTLE HIT");
                    if (enemies[i] instanceof Boss) {
                        let timePassedSinceCollision = new Date().getTime() - this.lastCollisionTime;
                        if (timePassedSinceCollision > 1000) {
                            this.lastCollisionTime = new Date().getTime();
                            if (enemies[i].energy == 0) {
                                enemies[i].status = 'dead';
                            }
                            enemies[i].energy -= 20;//damage
                        }
                    } else {
                        enemies[i].status = 'dead';
                    }
                }
            }
        }

    }

    isColliding(element) {
        return ((element.finalXPos - this.finalXPos + 10) < (this.base_image.width * this.scale - 10) && (this.finalXPos - element.finalXPos + 10) < (element.base_image.width * element.scale - 10)) && ((element.yPos - this.yPos + 10) < (this.base_image.height * this.scale));
    }
}