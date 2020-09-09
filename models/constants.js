const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

//needed to acces the right array of images for the character
const RIGHT = 1;
const LEFT = 0;

const IMAGE_SCALE = 0.2; //adjust to fit the world to the canvas dimentions
const GRAVITY = -0.0058;

const AUDIO_LAND = new Audio( "../sounds/land.mp3");
const AUDIO_JUMP = new Audio( "../sounds/jump.mp3");
const AUDIO_HIT = new Audio( "../sounds/hit.mp3");
const AUDIO_WALK = new Audio( "../sounds/walk.mp3");
const AUDIO_THROW = new Audio( "../sounds/throw.mp3");
const AUDIO_BOTTLE = new Audio( "../sounds/bottle.mp3");
const AUDIO_GLASS_BREAK = new Audio( "../sounds/glassBreak.mp3");
const AUDIO_CHICKEN = new Audio( "../sounds/chicken.mp3");
const AUDIO_BACKGROUND = new Audio( "../sounds/background.mp3");
AUDIO_BACKGROUND.loop = true;
AUDIO_BACKGROUND.volume = 0.5;

export { canvas, ctx, RIGHT, LEFT, IMAGE_SCALE, GRAVITY, AUDIO_LAND, AUDIO_JUMP, AUDIO_HIT, AUDIO_WALK, AUDIO_THROW, AUDIO_BOTTLE, AUDIO_GLASS_BREAK, AUDIO_CHICKEN, AUDIO_BACKGROUND};
