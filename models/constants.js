const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

//needed to acces the right array of images for the character
const RIGHT = 1; 
const LEFT = 0;

const IMAGE_SCALE = 0.2; //adjust to fit the canvas dimentions

export{canvas, ctx, RIGHT, LEFT, IMAGE_SCALE};