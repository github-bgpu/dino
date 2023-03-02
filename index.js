const fps = 60;

const dino = document.querySelector("#dino");

let y = 100;
let dy = 1;

setInterval(() => {
    y = y - dy

    if (y < 0) {
        y = 0
    }

    dino.style.bottom = `${y}px`
}, 1000 / fps)

dino.style.bottom = "100px";
