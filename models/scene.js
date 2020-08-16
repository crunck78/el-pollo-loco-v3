import { Background, Clouds } from "./background.js";

export class Scene {
    constructor(xPos) {
        this.backgrounds = {
            grounds: [new Background(xPos, 0,"img/grounds/ground_bg_1.png", 1), new Background(xPos + canvas.width, 0,"img/grounds/ground_bg_2.png", 1)],
            backgrounds1: [new Background(xPos, 0,"img/background1/bg1_1.png", 0.65), new Background(xPos + canvas.width, 0,"img/background1/bg1_2.png", 0.65)],
            backgrounds2: [new Background(xPos, 0,"img/background2/bg2_1.png", 0.4), new Background(xPos + canvas.width, 0,"img/background2/bg2_2.png", 0.4)],
            clouds: [new Clouds(xPos, 0, "img/clouds/cloud_bg_1.png", 0.5, -1, 0.1), new Clouds(xPos + canvas.width, 0, "img/clouds/cloud_bg_2.png", 0.1, 1, 0.1)]
        };
    }
    move(movement) {
        //first canvas image
        this.backgrounds.clouds[0].move(movement);
        
        this.backgrounds.backgrounds2[0].move(movement);
        this.backgrounds.backgrounds1[0].move(movement);
        this.backgrounds.grounds[0].move(movement);
        //second canvas image
        this.backgrounds.clouds[1].move(movement);
      
        this.backgrounds.backgrounds2[1].move(movement);
        this.backgrounds.backgrounds1[1].move(movement);
        this.backgrounds.grounds[1].move(movement);
    }
    draw() {
        //first canvas image
        this.backgrounds.clouds[0].moveClouds();
        this.backgrounds.clouds[0].draw();
        this.backgrounds.backgrounds2[0].draw();
        this.backgrounds.backgrounds1[0].draw();
        this.backgrounds.grounds[0].draw();
        //second canvas image
        this.backgrounds.clouds[1].moveClouds();
        this.backgrounds.clouds[1].draw();
        this.backgrounds.backgrounds2[1].draw();
        this.backgrounds.backgrounds1[1].draw();
        this.backgrounds.grounds[1].draw();
    }
}



