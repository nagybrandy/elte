// SELECTORS
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// VÁLTOZÓK
let score = 0
// KONSTANSOK
const TALAJ_MAGASSAGA = 150
const DINO_MAGASSAGA = 100

const CACTUS_MAGASSAGA = 50
let dino = null
let cactus = null

function gameSetup(){
    score = 0
    dino = {
        x: 100,
        y: canvas.height-TALAJ_MAGASSAGA-DINO_MAGASSAGA,
        originalY: canvas.height-TALAJ_MAGASSAGA-DINO_MAGASSAGA,
        width: 50,
        height: DINO_MAGASSAGA,
        jumpForce: 0,
        gravity: 0.3,
        maxJump: -8,
        grounded: true, 
        color: "green"
    }
    
    
    cactus = {
        x: canvas.width,
        y: canvas.height-TALAJ_MAGASSAGA-CACTUS_MAGASSAGA,
        width: 50,
        height: CACTUS_MAGASSAGA,
        color: "lightgreen"
    }  
}

// SZEREPLŐK


// SEGÉDFÜGGVÉNY

function utkozotte(a,b) {
    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    )
}


// GAME LOGIC
let isSpacePressedDown = false

document.addEventListener('keypress', e => {
    if(e.code === "Space" && dino.grounded) {
       dino.jumpForce = dino.maxJump
       dino.grounded = false
    }
})

let prevTime = performance.now()

function update(now = performance.now()) {
    const dt = (now - prevTime) / 13
    prevTime = now
    console.log(dt)
    if(!dino.grounded) {
        dino.y += dino.jumpForce * dt
        dino.jumpForce += dino.gravity * dt

        if (dino.y >= dino.originalY){
            dino.y = dino.originalY
            dino.grounded = true;
            dino.jumpForce = 0
        }
    }

    if(utkozotte(dino, cactus)) {
        alert("Game Over!")
        gameSetup()
    }

    cactus.x -= 10

    if(cactus.x+cactus.width < 0) {
        cactus.x = canvas.width
        score++;
    }
}

function render() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = "brown"
    ctx.fillRect(0, canvas.height-TALAJ_MAGASSAGA, canvas.width, TALAJ_MAGASSAGA)
    ctx.fillStyle = dino.color
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height)

    ctx.fillStyle = "lightgreen"
    ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height)

    ctx.font = '40px Arial'
    ctx.fillText(`Score: ${score}`, canvas.width-180, 50)

}

function next(){
    update()
    render()

    requestAnimationFrame(next)
}


// START THE GAME
gameSetup()
next()