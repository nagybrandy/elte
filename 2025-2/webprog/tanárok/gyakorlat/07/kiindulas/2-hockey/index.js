const inputNumberOfDefenders = document.querySelector("#numberOfDefenders");
const buttonStart = document.querySelector("#buttonStart");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let state = 0;   // 0 kezdés, 1 játékban, 2 vereség, 3 győzelem

let ball = {
  x: 30,
  y: canvasHeight / 2 - 8,
  width: 15,
  height: 15,
  vx: 0,
  ax: 0,
  fillStyle: "black",
}
const ballImage = new Image();
ballImage.src = "ball.png";

let defender = {
    x: 200, 
    y: canvas.height/2,
    width: 40,
    height: 80,
    vy: 150, //random 
    dir: 1, 
}

const defenderImage = new Image();
defenderImage.src = "defender.png";

const bgImage = new Image();
bgImage.src = "bg.png";

let gate = {
  x: canvasWidth - 40,
  y: canvasHeight / 2 -40,
  width: 40,
  height: 80,
  fillStyle: "hsla(0, 0%, 50%, 0.5)",
}

let lastFrameTime = performance.now();

// =============== Segédfüggvények =================

function isCollision(box1, box2) {
  return !(
    box2.y + box2.height < box1.y ||
    box1.x + box1.width < box2.x ||
    box1.y + box1.height < box2.y ||
    box2.x + box2.width < box1.x
  );
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}


function next(currentTime = performance.now()) {
  if(state !== 1) return;
  const dt = (currentTime - lastFrameTime) / 1000; // seconds
  lastFrameTime = currentTime;

  update(dt); // Állapotok frissítése
  render(); // Képkocka kirajzolása
  requestAnimationFrame(next);
}

window.addEventListener('keypress', ()=> {
  ball.vx = 300;
  ball.ax = -50;
})

function update(dt) {
  ball.vx += ball.ax * dt
  ball.x += ball.vx * dt

  if(ball.x > gate.x) {
    state = 3
  }

  if(isCollision(defender, ball)) {
    state = 2
  }

  defender.y += defender.dir * defender.vy * dt;

  // Ellenőrizzük és korrigáljuk a defender pozícióját, hogy ne menjen ki a képből
  if(defender.y <= 0) {
    defender.y = 0;
    defender.dir = 1;
  }
  if(defender.y >= canvas.height - defender.height) {
    defender.y = canvas.height - defender.height;
    defender.dir = -1;
  }
}

function render() {
  ctx.drawImage(bgImage, 0,0, canvas.width, canvas.height)

  ctx.drawImage(ballImage, ball.x,ball.y, ball.width, ball.height)

  ctx.fillStyle = gate.fillStyle
  ctx.fillRect(gate.x, gate.y, gate.width, gate.height)

  ctx.drawImage(defenderImage, defender.x, defender.y,defender.width, defender.height)
}

document.querySelector('#buttonStart').addEventListener('click', ()=> {
  state = 1
  next()
})