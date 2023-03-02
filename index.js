const FPS = 60;
const G = 10;
const DT = 1 / FPS;

const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const score_el = document.querySelector("#score");

let score = 0;

let y = 1500;
let dy = 0;

let x = 3500
const dx = -10;

let hit = false

setInterval(() => {
    updateDino()
    updateCactus()
    updateScore()
    checkCollision()
}, DT)

function updateDino() {
    dy = dy - G * DT
    y = y + dy

    if (y < 0) {
        y = 0
    }

    dino.style.bottom = `${y * 0.25}px`
}

function updateCactus() {
    x = x + dx

    if (x < -300) {
        x = 3500
    }

    cactus.style.left = `${x * 0.25}px`
}

function updateScore() {
    score += Math.abs(dx * DT / 5)
    score_el.innerHTML = Math.ceil(score)
}

function checkCollision() {
    if (x < 40 && y < 100) {
        hit = true
    }

    if (hit === true) {
        alert("GAME OVER")
    }
}

document.addEventListener("keydown", () => {
    if (y === 0) {
        dy = 15
    }
})

document.addEventListener("keyup", () => {
    dy = 0
})