import {  ctx } from "./constants.js"
import { Creature } from "./creature.js"
export class Enemy extends Creature {
    constructor(xPos, yPos, scale, images, status, speed, type) {
        super(xPos, yPos, scale, images, status, speed, type);
        this.damage = 20;
    }
}

export class Boss extends Enemy {
    constructor(xPos, yPos, scale, images, status, speed, type) {
        super(xPos, yPos, scale, images, status, speed, type);
        this.energy = 100;
    }

    draw() {
        ctx.drawImage(this.animation['bossLifeBar'][5], this.finalXPos, this.yPos - 50,this.animation['bossLifeBar'][5].width * this.scale,this.animation['bossLifeBar'][5].height * this.scale);
        super.draw();
    }
}