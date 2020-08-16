import {Item} from './item.js'
import {hud} from './animations.js'
import {canvas, ctx} from './constants.js'


export class HUD{
    constructor(){
       this.lifeBar = new Item(0, 0, 0.4, hud.lifeBar, 'lifeBar');
       this.bottleCounter = new Item(600, 0, 0.4, hud.bottle, 'bottle');
       this.coinCounter = new Item(500, 0, 0.4, hud.coin, 'coin');
    }

    draw(character){
        this.lifeBar.draw(src);
        this.bottleCounter.draw();
        ctx.font = "30px Arial";
        ctx.fillStyle = "White";
        ctx.fillText(" x "+character.bottles, 650, 50);
        this.coinCounter.draw();
        ctx.font = "30px Arial";
        ctx.fillStyle = "White";
        ctx.fillText(" x "+character.coins, 550, 50);
    }
}

/*export class HUD{
    constructor(){
       this.lifeBar = new Item(0, 0, 0.4, hud.lifeBar, 'lifeBar');
       this.bottleCounter = new Item(600, 0, 0.4, hud.bottle, 'bottle');
       this.coinCounter = new Item(500, 0, 0.4, hud.coin, 'coin');
    }

    draw(character){
         let src = "img/HUD/life-bar/life_"+character.energy+".png";
        this.lifeBar.draw(src);
        this.bottleCounter.draw();
        ctx.font = "30px Arial";
        ctx.fillStyle = "White";
        ctx.fillText(" x "+character.bottles, 650, 50);
        this.coinCounter.draw();
        ctx.font = "30px Arial";
        ctx.fillStyle = "White";
        ctx.fillText(" x "+character.coins, 550, 50);
    }
}*/