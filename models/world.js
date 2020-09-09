import { canvas } from "./constants.js"
import { pepeImages, chickenSmallImages, chickenBigImages, bossImages, bottleImages, coinImages } from "./animations.js"
import { Scene } from "./scene.js"
import { Background } from "./background.js"
import { Character } from "./character.js"
import { Enemy, Boss } from "./enemy.js"
import { Item } from "./item.js"

export class World {
    constructor(size, chickensSmallXpos, chickensBigXpos, bossesXpos, coinsXpos, bottlesXpos) {
        this.width = canvas.width * 2 * size; //need it if player reaches end of the world to stop moving forward
        this.xPos = 0; //worlds possition in relate to Character
        this.enemies = [];
        this.coins = [];
        this.bottles = [];
        this.pepe = new Character(canvas.width * 0.05, canvas.height * 0.365, 0.2, pepeImages, 'idle', 15.75 * 0.2);
        this.scenes = [];
        this.sky = new Background(this.xPos, 0, "img/sky.png", 1); // static, never moves

        for (let i = 0; i < chickensSmallXpos.length; i++) {
            this.addChickenSmall(chickensSmallXpos[i]);
        }

        for (let i = 0; i < chickensBigXpos.length; i++) {
            this.addChickenBig(chickensBigXpos[i]);
        }

        for (let i = 0; i < bossesXpos.length; i++) {
            this.addBoss(bossesXpos[i]);
        }

        for (let i = 0; i < coinsXpos.length; i++) {
            this.addCoins(coinsXpos[i]);
        }

        for (let i = 0; i < bottlesXpos.length; i++) {
            this.addBottles(bottlesXpos[i]);
        }

        for (let i = 0; i < size; i++) {
            this.addScene(i * 2 * canvas.width); // 1 x scene.width equals 2 x canvas.width
        }
    }
    addChickenSmall(xPos) {
        this.enemies.push(new Enemy(xPos, 370, 0.2, chickenSmallImages, 'walk', Math.random() * (7.875 * 0.2)));
    }
    addChickenBig(xPos) {
        this.enemies.push(new Enemy(xPos, 365, 0.2, chickenBigImages, 'walk', Math.random() * (7.875 * 0.2)));
    }
    addBoss(xPos) {
        this.enemies.push(new Boss(xPos, 200, 0.2, bossImages, 'alert', (7.875 * 0.2)));
    }
    addScene(xPos) {
        this.scenes.push(new Scene(xPos));
    }
    addCoins(xPos) {
        this.coins.push(new Item(xPos, 255, 0.5, 'spin', coinImages));
    }
    addBottles(xPos) {
        this.bottles.push(new Item(xPos, 350, 0.2, 'buried', bottleImages));
    }

    updateWorld() {
        if (this.pepe.isMovingRight && !this.pepe.isDead && this.xPos >= -(this.width - canvas.width)) {
            this.xPos -= this.pepe.speed;
            //this.pepe.relatedXPos += this.pepe.speed;
        }
        if (this.pepe.isMovingLeft && !this.pepe.isDead && this.xPos < 0 && !(this.pepe.xPos > 0)) {
            this.xPos += this.pepe.speed;
            //this.pepe.relatedXPos -= this.pepe.speed;
        }

        for (let i = 0; i < this.scenes.length; i++) {
            this.scenes[i].move(this.xPos);
        }
        for (let i = 0; i < this.enemies.length; i++) {

            if (!this.enemies[i] instanceof Boss)
                this.enemies[i].updateImg(200);
            this.enemies[i].move(this.xPos);
        }
        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].updateImg(500);
            this.coins[i].move(this.xPos);
        }
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].move(this.xPos);
        }

        if (this.pepe.isMovingRight && this.xPos <= -(this.width - canvas.width)) {
            if (this.pepe.xPos <= (canvas.width - (this.pepe.base_image.width * this.pepe.scale))) {
                this.pepe.finalXPos += this.pepe.speed;
                this.pepe.xPos = this.pepe.finalXPos;
            }
        }

        if (this.pepe.isMovingLeft && this.xPos <= 0) {
            if (this.pepe.xPos > 0) {
                this.pepe.finalXPos -= this.pepe.speed;
                this.pepe.xPos = this.pepe.finalXPos;
            }
        }


        this.pepe.updateImg();
        this.pepe.bottleThrow.updateImg(100);
		if(!this.pepe.isDead)
        	document.getElementById("life-bar").src = "img/HUD/life-bar/life_" + this.pepe.energy + ".png";
        document.getElementById("bottles").innerHTML = "x " + this.pepe.bottles;
        document.getElementById("coins").innerHTML = "x " + this.pepe.coins;

        let boss = this.enemies.find(enemy => {
            return enemy instanceof Boss;
        });
        boss.updateImg();
        boss.checkForWalkAlert(this.xPos, this.width);
        boss.checkForAttack(this.pepe.xPos);
        requestAnimationFrame(this.updateWorld.bind(this));
    }

    draw() {
        this.sky.draw();
        for (let i = 0; i < this.scenes.length; i++) {
            this.scenes[i].draw();
        }
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].status == 'walk') {
                this.enemies[i].moveCreature();
            }
            this.enemies[i].draw();
        }
        for (let i = 0; i < this.coins.length; i++) {

            this.coins[i].draw();
        }
        for (let i = 0; i < this.bottles.length; i++) {
            this.bottles[i].draw();
        }
        this.pepe.draw();
        if (this.pepe.bottleThrow.bottleThrowTime && !this.pepe.isDead) {
            this.pepe.bottleThrow.throwBottle();
        }
        requestAnimationFrame(this.draw.bind(this));
    }
}
