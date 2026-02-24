// SELECTORS
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// VÁLTOZÓK
let score = 0
// KONSTANSOK
const TALAJ_MAGASSAGA = 145
const DINO_MAGASSAGA = 100

const CACTUS_MAGASSAGA = 50
let dino = null
let cactus = null
let bgs = null

const images = {
    reddino: new Image(),
    yellowdino: new Image(),
    greendino: new Image(),
    bluedino: new Image(),
    cactus: new Image(),
    bg: new Image()
}

images.reddino.src = "./assets/dino-red.png"
images.yellowdino.src = "./assets/dino-yellow.png"
images.greendino.src = "./assets/dino-green.png"
images.bluedino.src = "./assets/dino-blue.png"
images.bg.src = "./assets/bg.webp"
images.cactus.src = "./assets/cactus.png"

function gameSetup(){
    score = 0
    dino = {
        x: 100,
        y: canvas.height-TALAJ_MAGASSAGA-DINO_MAGASSAGA+12,
        originalY: canvas.height-TALAJ_MAGASSAGA-DINO_MAGASSAGA+12,
        width: 50,
        height: DINO_MAGASSAGA,
        jumpForce: 0,
        gravity: 0.3,
        maxJump: -8,
        grounded: true, 
        color: "green",
        currentFrame: 0,
        runningFrame: [1,2,3,4,5,6,7,8],
        runningIndex: 0,
        jumpingFrame: 18
    }
    images.reddino.width = dino.width
    images.reddino.height = dino.height
    images.reddino.objectCover = "cover"
    console.log(images.reddino)
    
    cactus = {
        x: canvas.width,
        y: canvas.height-TALAJ_MAGASSAGA-CACTUS_MAGASSAGA,
        width: 50,
        height: CACTUS_MAGASSAGA,
        color: "lightgreen"
    }  

    bgs = [
        {
            x: 0,
            y: 0,
            width: canvas.width,
            height: canvas.height
        },
        {
            x: canvas.width,
            y: 0,
            width: canvas.width,
            height: canvas.height
        },
    ]
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

    bgs.forEach(e => {
        e.x -= 10
        if(e.x < 0-canvas.width) {
            e.x = canvas.width -10
        }
    })

    if(dino.grounded) {
        dino.currentFrame = dino.runningFrame[dino.runningIndex]
        dino.runningIndex = dino.runningIndex > 6 ? 0 : dino.runningIndex + 1;
    } else {
        dino.currentFrame = dino.jumpingFrame
    }

}

function render() {
    ctx.clearRect(0,0, canvas.width, canvas.height)
    // ctx.fillStyle = "brown"

    bgs.forEach(bg => ctx.drawImage(images.bg, bg.x, bg.y, bg.width, bg.height))
    
    // ctx.fillStyle = dino.color
    //ctx.fillRect(dino.x, dino.y, dino.width, dino.height)

    ctx.drawImage(images.reddino,6+dino.currentFrame*24,4,18,17, dino.x, dino.y, dino.width, dino.height)
    //ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height)
    // ctx.fillStyle = "lightgreen"
    ctx.drawImage(images.cactus, cactus.x, cactus.y, cactus.width, cactus.height)

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