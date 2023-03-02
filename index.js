const FPS = 60;
const G = 10;
const DT = 1 / FPS;

const dino = document.querySelector("#dino");

let y = 1500;
let dy = 0;

setInterval(() => {
    dy = dy + G * DT

    y = y - dy

    if (y < 0) {
        y = 0
    }

    dino.style.bottom = `${y * 0.25}px`
}, DT)

dino.style.bottom = "100px";
