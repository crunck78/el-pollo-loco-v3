export { pepeImages, chickenSmallImages, chickenBigImages, bossImages, bottleImages, coinImages, hud };

const pepeImages = {
    walk: [
        ["img/character/walk/left/W-21.png", "img/character/walk/left/W-22.png", "img/character/walk/left/W-23.png", "img/character/walk/left/W-24.png", "img/character/walk/left/W-25.png", "img/character/walk/left/W-26.png"],
        ["img/character/walk/right/W-21.png", "img/character/walk/right/W-22.png", "img/character/walk/right/W-23.png", "img/character/walk/right/W-24.png", "img/character/walk/right/W-25.png", "img/character/walk/right/W-26.png"]
    ],
    jump: [
        ["img/character/jump/left/J-33.png", "img/character/jump/left/J-34.png", "img/character/jump/left/J-35.png"],
        ["img/character/jump/right/J-33.png", "img/character/jump/right/J-34.png", "img/character/jump/right/J-35.png"]
    ],
    land: [
        ["img/character/jump/left/J-36.png", "img/character/jump/left/J-37.png", "img/character/jump/left/J-38.png"],
        ["img/character/jump/right/J-36.png", "img/character/jump/right/J-37.png", "img/character/jump/right/J-38.png"]
    ],
    hit: [
        ["img/character/hit/left/H-41.png", "img/character/hit/left/H-42.png", "img/character/hit/left/H-43.png"],
        ["img/character/hit/right/H-41.png", "img/character/hit/right/H-42.png", "img/character/hit/right/H-43.png"]
    ],
    idle: [
        ["img/character/idle/left/I-1.png", "img/character/idle/left/I-2.png", "img/character/idle/left/I-3.png", "img/character/idle/left/I-4.png", "img/character/idle/left/I-5.png", "img/character/idle/left/I-6.png", "img/character/idle/left/I-7.png", "img/character/idle/left/I-8.png", "img/character/idle/left/I-9.png", "img/character/idle/left/I-10.png"],
        ["img/character/idle/right/I-1.png", "img/character/idle/right/I-2.png", "img/character/idle/right/I-3.png", "img/character/idle/right/I-4.png", "img/character/idle/right/I-5.png", "img/character/idle/right/I-6.png", "img/character/idle/right/I-7.png", "img/character/idle/right/I-8.png", "img/character/idle/right/I-9.png", "img/character/idle/right/I-10.png"]
    ],
    longIdle: [
        ["img/character/long-idle/left/I-11.png", "img/character/long-idle/left/I-12.png", "img/character/long-idle/left/I-13.png", "img/character/long-idle/left/I-14.png", "img/character/long-idle/left/I-15.png", "img/character/long-idle/left/I-16.png", "img/character/long-idle/left/I-17.png", "img/character/long-idle/left/I-18.png", "img/character/long-idle/left/I-19.png", "img/character/long-idle/left/I-20.png"],
        ["img/character/long-idle/right/I-11.png", "img/character/long-idle/right/I-12.png", "img/character/long-idle/right/I-13.png", "img/character/long-idle/right/I-14.png", "img/character/long-idle/right/I-15.png", "img/character/long-idle/right/I-16.png", "img/character/long-idle/right/I-17.png", "img/character/long-idle/right/I-18.png", "img/character/long-idle/right/I-19.png", "img/character/long-idle/right/I-20.png"]
    ],
    dead: [
        ["img/character/dead/left/D-51.png", "img/character/dead/left/D-52.png", "img/character/dead/left/D-53.png", "img/character/dead/left/D-54.png", "img/character/dead/left/D-55.png", "img/character/dead/left/D-56.png"],
        ["img/character/dead/right/D-51.png", "img/character/dead/right/D-52.png", "img/character/dead/right/D-53.png", "img/character/dead/right/D-54.png", "img/character/dead/right/D-55.png", "img/character/dead/right/D-56.png"]
    ]
};


const chickenSmallImages = {
    walk: ["img/enemies/chicken-small/chicken-small_1.png", "img/enemies/chicken-small/chicken-small_2.png", "img/enemies/chicken-small/chicken-small_3.png"],
    dead: ["img/enemies/chicken-small/chicken-small_4.png"]
};

const chickenBigImages = {
    walk: ["img/enemies/chicken-little/chicken-little_1.png", "img/enemies/chicken-little/chicken-little_2.png", "img/enemies/chicken-little/chicken-little_3.png"],
    dead: ["img/enemies/chicken-little/chicken-little_4.png"]
};

const bossImages = {
    walk: ["img/enemies/chicken-big/walk/walk_1.png", "img/enemies/chicken-big/walk/walk_2.png", "img/enemies/chicken-big/walk/walk_3.png", "img/enemies/chicken-big/walk/walk_4.png"],
    dead: ["img/enemies/chicken-big/dead/dead_1.png", "img/enemies/chicken-big/dead/dead_2.png", "img/enemies/chicken-big/dead/dead_3.png"],
    alert: ["img/enemies/chicken-big/alert/alert_1.png", "img/enemies/chicken-big/alert/alert_2.png", "img/enemies/chicken-big/alert/alert_3.png", "img/enemies/chicken-big/alert/alert_4.png", "img/enemies/chicken-big/alert/alert_5.png", "img/enemies/chicken-big/alert/alert_6.png", "img/enemies/chicken-big/alert/alert_7.png", "img/enemies/chicken-big/alert/alert_8.png"],
    attack: ["img/enemies/chicken-big/attack/attack_1.png", "img/enemies/chicken-big/attack/attack_2.png", "img/enemies/chicken-big/attack/attack_3.png", "img/enemies/chicken-big/attack/attack_4.png", "img/enemies/chicken-big/attack/attack_5.png", "img/enemies/chicken-big/attack/attack_6.png", "img/enemies/chicken-big/attack/attack_7.png", "img/enemies/chicken-big/attack/attack_8.png"],
    hit: ["img/enemies/chicken-big/hit/hit_1.png", "img/enemies/chicken-big/hit/hit_2.png", "img/enemies/chicken-big/hit/hit_3.png"],
    bossLifeBar: ["img/HUD/boss-life-bar/life_0.png", "img/HUD/boss-life-bar/life_20.png", "img/HUD/boss-life-bar/life_40.png", "img/HUD/boss-life-bar/life_60.png", "img/HUD/boss-life-bar/life_80.png", "img/HUD/boss-life-bar/life_100.png"]
};

const bottleImages = {
    buried: ["img/items/bottle/bottle_1.png", "img/items/bottle/bottle_2.png"],
    throwed: ["img/bottle-throw/bottleThrow_0.png", "img/bottle-throw/bottleThrow_1.png", "img/bottle-throw/bottleThrow_2.png", "img/bottle-throw/bottleThrow_3.png"],
    splash: ["img/splash/0.png", "img/splash/1.png", "img/splash/2.png", "img/splash/3.png", "img/splash/4.png", "img/splash/5.png"],
};

const coinImages = {
    spin: ["img/items/coin/coin_1.png", "img/items/coin/coin_2.png"]
}

const hud = {
    lifeBar: ["img/HUD/life-bar/life_0.png", "img/HUD/life-bar/life_20.png", "img/HUD/life-bar/life_40.png", "img/HUD/life-bar/life_60.png", "img/HUD/life-bar/life_80.png", "img/HUD/life-bar/life_100.png"],
    bottle: ["img/HUD/bottle.png"],
    coin: ["img/HUD/coin.png"]
};