// SELECTORS
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const newGame_btn = document.querySelector('button#newGame')
const ol = document.querySelector('ol')


// VARIABLES
const GAP = 150
const COLUMN_VELOCITY = -200

let score = 0
let highscores = []
let gameOn = false
let playerName = ""

// AGENTS
let bird = {
    x: 50,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: "red",
    vy: 0,
    ay: 250
}

let columns = []

const images = {
    bird: new Image(),
    bg: new Image(),
    column: new Image()
}

images.bird.src = "./images/bird.png"
images.bg.src = "./images/bg.png"
images.column.src = "./images/column.png"



// UTILITY FUNCTIONS
function random(a, b) {
    return Math.floor(Math.random()* (b - a + 1) + a)
}

function isCollide(a, b) {
    return !(
        b.y + b.height  < a.y ||
        a.x + a.width < b.x ||
        a.y + a.height  < b.y ||
        b.x + b.width < a.x
    );
}



// GAME HELPER FUNCTIONS
function newColumns(){
    const h = random(10, canvas.height/2)
    columns = [
        {
            x: canvas.width-40,
            y: 0,
            width: 50,
            height: h, 
        },
        {
            x: canvas.width-40,
            y: h+GAP,
            width: 50,
            height: canvas.height-GAP-h, 
        }
    ]
}

function gameOver() {
    gameOn = false
    newGame_btn.style.display = "block"


    if(playerName) {
        highscores.push({
            name: playerName,
            score,
        })
    
        let newscores = highscores.sort((a,b) => b.score-a.score).slice(0, 10)
        ol.innerHTML = ""
        newscores.forEach((e, i) => {
            ol.innerHTML += `<li>${i+1}. ${e.name} - ${e.score} points</li>`
        })
        

        localStorage.setItem("highscores", JSON.stringify(newscores))
    }

}

function newGame(e){
    newGame_btn.style.display = "none"
    // Ensure the button does not remain focused after clicking
    // If there is an event and its target has a 'blur' method, remove focus from the button after clicking
    if (e && typeof e.target?.blur === "function") {
        e.target.blur();
    }
    
    newColumns()
    bird = {
        x: 50,
        y: canvas.height / 2+100,
        width: 50,
        height: 50,
        color: "red",
        vy: 0,
        ay: 250
    }
    bird.vy = -350

    gameOn = true
    step()

}


// EVENT HANDLERS
window.addEventListener('keypress', e=> {
    if(e.code === "Space") {
        bird.vy = -200
    }
})

newGame_btn.addEventListener('click', newGame)


// GAME LOOP
let prevTime = performance.now()


function update(now = performance.now()) {
    const dt = (now - prevTime) / 1000
    prevTime = now
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt
    columns.forEach(e => {
        e.x -= 10
        if(isCollide(bird, e)) {
            gameOver()
        }
    })
    if(bird.y < 0 || bird.y > canvas.height-bird.height) {
        gameOver()
    }
    if(columns[0].x < 0-columns[0].width) {
        newColumns()
        score++;
    }

}

function render() {

    // clearing the canvas
    ctx.drawImage(images.bg, 0,0, canvas.width, canvas.height)

    // draw the bird
    ctx.fillStyle = bird.color
    ctx.drawImage(images.bird, bird.x, bird.y, bird.width, bird.height)

    // draw the rects
    ctx.fillStyle = "brown"
    columns.forEach(e => ctx.drawImage(images.column, e.x, e.y, e.width, e.height))

    ctx.font = "20px Arial"
    ctx.fillStyle = "black"

    ctx.fillText(`Score: ${score}`, canvas.width-100, 30)

    if(!gameOn){
        ctx.font = "100px Arial"
        ctx.fillStyle = "black"
        
        ctx.fillText("Game Over", canvas.width/2-300, canvas.height/2)
        ctx.font = "70px Arial"

        ctx.fillText(`Score: ${score}`, canvas.width/2-300, canvas.height/2+100)
    }
}

function step() {
    if(!gameOn) return
    update()
    render()

    requestAnimationFrame(step)
}


// STARTING THE GAME

// highscore
if(localStorage.getItem("highscores")) {
    highscores = JSON.parse(localStorage.getItem("highscores"))
    highscores.forEach((e, i) => {
        ol.innerHTML += `<li>${i+1}. ${e.name} - ${e.score} points</li>`
    })
}


newGame_btn.style.display = "none"

newColumns()

const gameDiv = document.querySelector("#gameDiv")
const startGameButton = document.querySelector('#startGame')
gameDiv.style.display = "none"


document.querySelector("input[type=text]").addEventListener('input', (e)=> {
    playerName = e.target.value
    startGameButton.disabled = e.target.value.length <= 0
})

startGameButton.addEventListener('click', ()=> {
    gameDiv.style.display = "flex"
    document.querySelector("#menuDiv").style.display = "none"
    newGame()
})