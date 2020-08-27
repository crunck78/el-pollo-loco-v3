import { ctx } from "./constants.js"
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
        if(this.status != 'dead')
            ctx.drawImage(this.animation['bossLifeBar'][this.energy / 20], this.finalXPos, this.yPos - 50, this.animation['bossLifeBar'][this.energy / 20].width * this.scale, this.animation['bossLifeBar'][this.energy / 20].height * this.scale);
        super.draw();
    }
}