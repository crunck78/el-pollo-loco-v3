import { Item } from './item.js'

export class Creature extends Item {
    constructor(xPos, yPos, scale, images, status, speed) {
        super(xPos, yPos, scale, status, images);
        this.speed = speed;
    }

    moveCreature() {
        this.xPos -= this.speed;
    }
}