// SELECTORS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')

// AGENTS
const bird = {
    width: 50,
    height: 50,
    color: "red", 
    image: undefined,
    x: 100,
    y: canvas.height/2,
    vy: 0,
    ay: 250
}

const GAP = 150;
const COLUMN_DISTANCE = 300;
const COLUMN_VELOCITY = -200;


function random(a,b){
    return Math.floor(Math.random() * (b - a+1) + a)
}

const h = random(100,200)
const columns = [
    {
        x: canvas.width-40,
        y: 0,
        width: 30,
        height: h
    },
    {
        x: canvas.width-40,
        y: canvas.height/2,
        width: 30,
        height: canvas.height / 2
    }
]

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

}

function render() {
    // clear the screen
    ctx.clearRect(0,0,canvas.width, canvas.height)

    // redraw the bird
    ctx.fillStyle = bird.color
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height)

    columns.map(e=>  ctx.fillRect(e.x, e.y, e.width, e.height)
)
}


function next(){
    render()
    update()

    requestAnimationFrame(next)
}


next()