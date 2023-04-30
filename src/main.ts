import robotPNG from '../img/robot.png';
import { Keyboard } from './keyboard';
import { Sprite } from './sprite';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 400;
const context = canvas.getContext('2d');
if (!context) {
    throw Error("No graphics context");
}
// pixel art
context.imageSmoothingEnabled = false;

function clear(context: CanvasRenderingContext2D) {
    context.fillStyle = '#176baadd';
    context.fillRect(0, 0, canvas.width, canvas.height);
}

let keyboard: Keyboard;
let sprite: Sprite;
function init(resources: {[key: string]: HTMLImageElement}) {
    keyboard = new Keyboard();

    const { robotImg } = resources;
    const spriteIndex = 3;
    const spriteWidth = 32;
    const spriteHeight = 32;
    sprite = new Sprite({
        img: robotImg,
        view: {
            x: spriteIndex * spriteWidth,
            y: 0,
            width: spriteWidth,
            height: spriteHeight
        }
    })
}

async function load() {
    const robotImg = document.createElement('img');
    robotImg.src = robotPNG;
    await robotImg.decode();
    return { robotImg }
}

// Update the game every frame
function update() {
    // todo 
}

// Draw the game every frame
function draw(context: CanvasRenderingContext2D) {
    sprite.draw(context, 100, 100, 100, 100);
}

async function main(context: CanvasRenderingContext2D) {
    const resources = await load();
    init(resources);

    // TODO implement gameloop
    update();
    clear(context);
    draw(context);
}
main(context);