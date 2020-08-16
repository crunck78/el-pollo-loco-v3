import { Model } from './model.js'
import { canvas, ctx } from './constants.js'

export class Item extends Model {
    constructor(xPos, yPos, scale, status, images) {
        super(xPos, yPos);
        this.scale = scale;
        this.status = status; //animation type
        this.imgIndex = 0;
        this.start = new Date().getTime(); //use to time of changing the images
        this.animation = {};
        this.createObjectAnimations(images);
        this.start = new Date().getTime();
    }

    createObjectAnimations(images) {
        for (let status in images) {
            this.animation[status] = this.createAnimation(images[status]);
        }
    }

    createAnimation(array) {
        let animations = [];
        for (let i = 0; i < array.length; i++) {
            let img = new Image();
            img.src = array[i];
            animations.push(img);
        }
        return animations;
    }

    move(movement) {
        this.finalXPos = movement + this.xPos;
    }

    updateImg(interval) {
        let timePassedSinceLastCall = new Date().getTime() - this.start;
        if (timePassedSinceLastCall > interval) {
            this.imgIndex++;
            
            
        //console.log('img index ' + this.imgIndex + 'status ' + this.status);
        //console.log('IMG SRC' + this.animation[this.status][this.direction][this.imgIndex].src);
        this.start = new Date().getTime();
        }
    }

    draw() {
        if (this.imgIndex >= this.animation[this.status].length)
            this.imgIndex = 0;
            this.base_image = this.animation[this.status][this.imgIndex]
        ctx.drawImage(this.animation[this.status][this.imgIndex], this.finalXPos, this.yPos, this.animation[this.status][this.imgIndex].width * this.scale, this.animation[this.status][this.imgIndex].height * this.scale);
        //requestAnimationFrame(this.draw.bind(this));
    }

    insideCanvas() {
        return this.finalXPos > (-canvas.width) && this.finalXPos < canvas.width;
    }
}