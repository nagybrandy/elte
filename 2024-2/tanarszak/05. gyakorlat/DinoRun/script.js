const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let score = 0;
// DÍNÓ - JÁTÉKOS
let player;
let dino_image = new Image();
dino_image.src = './assets/pics/dino-yellow.png'

// KAKTUSZ, KAKTUSZOK
let obstacle;
let cactus_image = new Image();
cactus_image.src = './assets/pics/cactus.png'

let bg_image = new Image();
bg_image.src = './assets/pics/bg.webp'
newGame()

let bgX1 = 0
let bgX2 = canvas.width

// ESEMÉNYKEZELÉS
document.addEventListener('keypress', (event) => {
    if (event.code === 'Space' && player.grounded) {
        player.jumpForce = player.maxJump; // Start jumping
        player.grounded = false; // Player is in the air
    }
});

// SEGÉDFÜGGVÉNYEK 

function isCollidedWith(player, obstacle) {
    return (
        player.x < obstacle.x + obstacle.width &&
        player.x + player.width > obstacle.x &&
        player.y < obstacle.y + obstacle.height &&
        player.y + player.height > obstacle.y
    );
}

function newGame() {
    player = {
        width: 24,
        height: 24,
        x: 30,
        y: canvas.height - 50,
        jumpForce: 0,
        gravity: 0.3,
        maxJump: -6, // Maximum jump force (controls how high the jump is)
        grounded: true, // Keeps track if the player is on the ground
        originalY: canvas.height - 50,
        currentFrame: 0,
        frameWidth: 24,
        runningFrame: [1, 2, 3, 4, 5, 6, 7, 8],
        runningIndex: 0,
        jumpingFrame: 18,
    };

    obstacle = {
        width: 126 / 8,
        height: 265 / 8,
        x: canvas.width - 10,
        y: canvas.height - 55,
        v: 1.5
    };
    score = 0;
}
// JÁTÉKLOGIKA
function update() {
    /*  if(isCollidedWith(player, obstacle)) {
         alert('😭😭😭')
         newGame()
     } */

    if (!player.grounded) {
        player.y += player.jumpForce; // Move the player based on jump force
        player.jumpForce += player.gravity; // Apply gravity

        if (player.y >= player.originalY) {
            player.y = player.originalY;
            player.grounded = true; // Player has landed
            player.jumpForce = 0; // Reset jump force
        }
    }
    // Move the obstacle
    if (obstacle.x <= -10) {
        obstacle.x = canvas.width;
        score++;
    }
    obstacle.x -= obstacle.v;

    bgX1 -= 1.5;
    bgX2 -= 1.5;
    if (bgX1 <= -canvas.width) bgX1 = canvas.width
    if (bgX2 <= -canvas.width) bgX2 = canvas.width
}

function render() {
    ctx.drawImage(bg_image, bgX1, 0, canvas.width, canvas.height);
    ctx.drawImage(bg_image, bgX2, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black'
    ctx.font = '12px Arial'
    ctx.textAlign = 'right'
    ctx.fillText(`Score: ${score}`, canvas.width - 5, 15)
   // console.log(player.grounded)
    if (player.grounded) {
        player.currentFrame = player.runningFrame[player.runningIndex] * player.frameWidth
        player.runningIndex = player.runningIndex > 6 ? 0 : player.runningIndex + 1
    } else {
        //console.log(player.grounded)
        player.currentFrame = 18 * 24
    }

    // Draw player
    ctx.drawImage(dino_image, player.currentFrame, 0, 24, 24, player.x, player.y, player.width, player.height);

    // Draw obstacle
    ctx.fillStyle = 'red';
    ctx.drawImage(cactus_image, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function step() {
    update();
    render();
    requestAnimationFrame(step);
}

function startGame() {
    document.querySelector('#inGame').style.display = 'block'
    document.querySelector('#menu').style.display = 'none'
    const szin = document.querySelector('#dino-szin').value
    dino_image.src = `./assets/pics/dino-${szin}.png`
    step()
    newGame()
}
document.querySelector('#inGame').style.display = 'none'
document.querySelector('#menu').style.display = 'block'

document.querySelector('button#start').addEventListener('click', startGame)