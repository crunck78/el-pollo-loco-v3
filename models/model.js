export class Model {
    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.finalXPos = xPos; //character related xpos
        this.base_image = new Image();
    }
}