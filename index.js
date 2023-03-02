const FPS = 60;
const G = 10;
const DT = 1 / FPS;

const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");

let y = 1500;
let dy = 0;

let x = 3500
const dx = -10;

setInterval(() => {
    dy = dy - G * DT
    y = y + dy

    if (y < 0) {
        y = 0
    }

    dino.style.bottom = `${y * 0.25}px`

    x = x + dx

    if (x < -300) {
        x = 3500
    }

    cactus.style.left = `${x * 0.25}px`
}, DT)

document.addEventListener("keydown", () => {
    if (y === 0) {
        dy = 15
    }
})

document.addEventListener("keyup", () => {
    dy = 0
})