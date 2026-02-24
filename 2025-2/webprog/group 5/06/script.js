// SELECTORS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

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
button.addEventListener('click', newGame)
button.style.display = "none"

const GAP = 150;
const COLUMN_DISTANCE = 300;
const COLUMN_VELOCITY = -200;
let columns = []
let score = 0

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
const button = document.querySelector('button')

function gameOver(){
    gameOn = false
    ctx.font = "100px Arial"
    ctx.fillText('GAME OVER', 80, canvas.height/2-50)
    ctx.font = "50px Arial"
    ctx.fillText(`Your score is: ${score}`, 80, canvas.height/2+50)

    button.style.display= "block"
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

    next()
}

let prevTime = performance.now()
console.log(prevTime)

window.addEventListener('keydown', (e)=> {
    if(e.code == "Space") {
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
        e.x -= 10;
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
next()