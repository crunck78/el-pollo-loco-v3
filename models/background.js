import { canvas, ctx } from "./constants.js"
import { Model } from "./model.js"


export class Background extends Model {
    constructor(xPos, yPos, src, distance) {
        super(xPos, yPos);
        this.base_image = new Image();
        this.base_image.src = src;
        this.distance = distance; // use to calculate world movement offset
    }
    move(movement) {
        this.finalXPos = movement * this.distance + this.xPos;
    }
    draw() {
        ctx.drawImage(this.base_image, this.finalXPos, this.yPos, canvas.width, canvas.height);
        //requestAnimationFrame(this.draw.bind(this));

    }
    insideCanvas() {
        return this.finalXPos > (-canvas.width) && this.finalXPos < canvas.width;
    }
}

export class Clouds extends Background {
    constructor(xPos, yPos, imgSrc, cloudsWindOffset, windDirection, distance) {
        super(xPos, yPos, imgSrc, distance);
        this.cloudsWindOffset = cloudsWindOffset;
        this.windDirection = windDirection;
    }
    moveClouds() {
        this.xPos -= this.cloudsWindOffset;
    }
}