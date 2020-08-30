import { Item } from './item.js'

export class Creature extends Item {
    constructor(xPos, yPos, scale, images, status, speed) {
        super(xPos, yPos, scale, status, images);
        this.speed = speed;
        this.isDead = false;
    }

    moveCreature() {
        this.xPos -= this.speed;
    }
}