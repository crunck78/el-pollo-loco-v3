import { ctx, canvas } from "./constants.js"
import { Creature } from "./creature.js"
export class Enemy extends Creature {
    constructor(xPos, yPos, scale, images, status, speed, type) {
        super(xPos, yPos, scale, images, status, speed, type);
        this.damage = 20;
        this.isMoving = false;
    }
}

export class Boss extends Enemy {
    constructor(xPos, yPos, scale, images, status, speed, type) {
        super(xPos, yPos, scale, images, status, speed, type);
        this.energy = 100;
        this.isAlerted = false;
        this.xPosInit = this.xPos;
        this.base_image = this.animation[this.status][this.imgIndex];
        this.xPosFinal = this.xPosInit - 209;//(this.base_image.width * this.scale);
        this.isAttacking = false;
        this.isColliding = false;
    }

    checkForWalkAlert(worldXPos, worldWidth) {
        let lastSceneXPos = -(worldWidth - canvas.width);
        if (worldXPos < lastSceneXPos ) {
            if (this.xPos > this.xPosFinal) {
                this.isMoving = true;
                this.isAlerted = false;
            } else {
                this.isMoving = false;
                this.isAlerted = true;
            }
        }
        // requestAnimationFrame(function () {
        //     this.checkForWalkAlert(worldXPos, worldWidth);
        // }.bind(this));
    }

    checkForAttack(pepeXPos) {
        if (((this.finalXPos - pepeXPos) < canvas.width / 1.2) && !(this.finalXPos > this.xPosFinal)) {
            this.isAlerted = false;
            this.isAttacking = true;
        } else {
            this.isAlerted = true;
            this.isAttacking = false;
        }
        // requestAnimationFrame(function () {
        //     this.checkForAttack(pepeXPos);
        // }.bind(this));
    }

    updateImg() {
        let timePassedSinceLastCall = new Date().getTime() - this.start;
        if (timePassedSinceLastCall > this.interval) {
            if(!(this.isDead && this.imgIndex == 2))
                this.imgIndex++;
            //console.log('img index ' + this.imgIndex + 'status ' + this.status);
            //console.log('IMG SRC' + this.animation[this.status][this.direction][this.imgIndex].src);
            this.start = new Date().getTime();
        }
        // requestAnimationFrame(this.updateImg.bind(this));
    }

    setStatus(actualStatus) {
        if (this.isColliding) {
            if (actualStatus != 'hit') {
                this.status = 'hit';
                this.interval = 200;
                this.imgIndex = 0;
            }
        } else if (this.isDead) {
            if (actualStatus != 'dead') {
                this.status = 'dead';
                this.interval = 200;
                this.imgIndex = 0;
            }
        } else if (this.isMoving) {
            if (actualStatus != 'walk') {
                this.status = 'walk';
                this.interval = 200;
                this.imgIndex = 0;
            }
        } else if (this.isAlerted) {
            this.interval = 200;
            if (actualStatus != 'alert') {
                this.status = 'alert';
                this.imgIndex = 0;
            }
        } else {
            if (actualStatus != 'attack') {
                this.status = 'attack';
                this.imgIndex = 0;
                this.interval = 200;
            }
        }
        //console.log('BOSS STATUS: ' + this.status);
        //console.log('BOSS IS COLLIDING' + this.isColliding);
        requestAnimationFrame(function () {
            this.setStatus(this.status);
        }.bind(this));
    }

    draw() {
        if (this.status != 'dead')
            ctx.drawImage(this.animation['bossLifeBar'][this.energy / 20], this.finalXPos, this.yPos - 50, this.animation['bossLifeBar'][this.energy / 20].width * this.scale, this.animation['bossLifeBar'][this.energy / 20].height * this.scale);
        super.draw();
    }
}