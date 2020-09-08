const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

//needed to acces the right array of images for the character
const RIGHT = 1;
const LEFT = 0;

const IMAGE_SCALE = 0.2; //adjust to fit the world to the canvas dimentions
const GRAVITY = -0.0058;

const AUDIO_LAND = new Audio( "../sounds/land.mp3");

export { canvas, ctx, RIGHT, LEFT, IMAGE_SCALE, GRAVITY, AUDIO_LAND};
