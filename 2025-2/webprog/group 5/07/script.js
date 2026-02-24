// SELECTORS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


const gameDiv = document.querySelector('#gameDiv')
gameDiv.style.display = "none"
const images = {
    bg: new Image(),
    bird: new Image(),
    column: new Image()
}

images.bg.src = "./bg.png"
images.bird.src = "./bird.png"
images.column.src = "./column.png"


// AGENTS
let bird = {
    width: 50,
    height: 50,
    color: "red", 
    image: undefined,
    x: 100,
    y: canvas.height/2,
    vy: 0,
    ay: 250
}
const button = document.querySelector('button#newGame')

button.addEventListener('click', newGame)
button.style.display = "none"

const GAP = 150;
const COLUMN_DISTANCE = 300;
let COLUMN_VELOCITY = -200;
let columns = []
let score = 0
let highscores = []
let playerName = ""

if(localStorage.getItem('highscore')) {
    highscores = JSON.parse(localStorage.getItem('highscore'))
    console.log(highscores)
}

const ol = document.querySelector('ol')
highscores.forEach((e, i) => {
    ol.innerHTML += `<li>${i+1}. ${e.name} - ${e.score}</li>`
})

function isCollided(a, b) {
    return !(
        b.y + b.height  < a.y ||
        a.x + a.width < b.x ||
        a.y + a.height  < b.y ||
        b.x + b.width < a.x
    );
}

function random(a,b){
    return Math.floor(Math.random() * (b - a + 1) + a)
}

function newColumns(){
    const h = random(50,300)
    columns = [
        {
            x: canvas.width-40,
            y: 0,
            width: 30,
            height: h
        },
        {
            x: canvas.width-40,
            y: h+GAP,
            width: 30,
            height: canvas.height-GAP-h
        }
    ]
}


// Játék vége, új Játék 
let gameOn = true

function gameOver(){
    gameOn = false
    ctx.font = "100px Arial"
    ctx.fillText('GAME OVER', 80, canvas.height/2-50)
    ctx.font = "50px Arial"
    ctx.fillText(`Your score is: ${score}`, 80, canvas.height/2+50)

    button.style.display= "block"

    highscores.push({
        name: playerName,
        score
    })
    console.log(highscores)
    highscores = highscores.sort((a,b) => b.score - a.score ).slice(0,10)

    ol.innerHTML = ""
    highscores.forEach((e, i) => {
        ol.innerHTML += `<li>${i+1}. ${e.name} - ${e.score}</li>`
    })
    localStorage.setItem('highscore', JSON.stringify(highscores))

}

function newGame(){
    console.log("asd")
    bird = {
        width: 50,
        height: 50,
        color: "red", 
        image: undefined,
        x: 100,
        y: canvas.height/2,
        vy: 0,
        ay: 250
    }
    bird.vy = -250;
    newColumns()
    score = 0
    gameOn = true
    button.style.display = "none"
    prevTime = performance.now()

    next()
}

let prevTime = performance.now()
console.log(prevTime)

window.addEventListener('keydown', (e)=> {
    if(e.code == "Space") {
        e.preventDefault()
        bird.vy = -250;
    }
})

function update(now = performance.now()){

    // delta time for checking how much we should fall with our bird to make it smooth and the same on all computer
    const dt = (now-prevTime)/1000
    prevTime = now

    // bird falling down
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt 

    columns.forEach(e => {
        e.x += COLUMN_VELOCITY * dt;
        if(isCollided(bird, e)){
            console.log("HIT!")
            gameOver()
        }
    })
    if(bird.y < 0|| bird.y > canvas.height) {
        console.log('HIT')
        gameOver()
    }
    if(columns[0].x < 0 - columns[0].width) {
        newColumns()
        score++;
    }
}

function render() {
    // clear the screen
    ctx.drawImage(images.bg,0,0,canvas.width, canvas.height)

    // redraw the bird
    ctx.fillStyle = bird.color
    ctx.drawImage(images.bird, bird.x, bird.y, bird.width, bird.height)

    ctx.fillStyle = "brown"
    columns.map(e=>  ctx.drawImage(images.column, e.x, e.y, e.width, e.height))
    ctx.fillStyle = "black"
    ctx.font = "20px Arial"
    ctx.fillText(`Score: ${score}`, canvas.width-100, 40)
}


function next(){
    if(!gameOn) return;

    render()
    update()

    requestAnimationFrame(next)
}

newColumns()

document.querySelector('#startGame').addEventListener('click', ()=> {
    COLUMN_VELOCITY = parseInt(document.querySelector('input[type=range]').value)
    playerName = document.querySelector('input[type=text]').value
    console.log(playerName)
    gameDiv.style.display = "flex"
    document.querySelector('#menuDiv').style.display = "none"
    newGame()
    next()
})