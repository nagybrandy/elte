const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let score = 0;
// DÍNÓ - JÁTÉKOS
let player;
// KAKTUSZ, KAKTUSZOK
let obstacle;

newGame()

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
        width: 25,
        height: 50,
        x: 30,
        y: canvas.height - 50,
        jumpForce: 0,
        gravity: 0.3,
        maxJump: -6, // Maximum jump force (controls how high the jump is)
        grounded: true, // Keeps track if the player is on the ground
        originalY: canvas.height - 50
    };
    
    obstacle = {
        width: 10,
        height: 30,
        x: canvas.width - 20,
        y: canvas.height - 30,
        v: 1.5
    };
}
// JÁTÉKLOGIKA
function update() {
    /* if(isCollidedWith(player, obstacle)) {
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
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black'
    ctx.font = '12px Arial'
    ctx.textAlign = 'right'
    ctx.fillText(`Score: ${score}`, canvas.width-5, 15)
    
    // Draw player
    ctx.fillStyle = 'darkgreen';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Draw obstacle
    ctx.fillStyle = 'red';
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
}

function step() {
    update();
    render();
    requestAnimationFrame(step);
}

step();

