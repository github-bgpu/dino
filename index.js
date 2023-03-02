const fps = 60;

const dino = document.querySelector("#dino");

let y = 100;

setInterval(() => {
    console.log("!");
}, 1000 / fps)

dino.style.bottom = "100px";
