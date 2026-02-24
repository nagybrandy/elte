const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: "red",
    vy: 0,
    ay: 250
}

const GAP = 150
const COLUMN_VELOCITY = -200

function random(a, b) {
    return Math.floor(Math.random()* (b - a + 1) + a)
}
const h = random(10, canvas.height/2)
const columns = [
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


ctx.fillStyle = bird.color
ctx.fillRect(bird.x, bird.y, bird.width, bird.height)

let prevTime = performance.now()

window.addEventListener('keypress', e=> {
    if(e.code === "Space") {
        bird.vy = -200
    }
})

function update(now = performance.now()) {
    const dt = (now - prevTime) / 1000
    prevTime = now
    bird.vy += bird.ay * dt
    bird.y += bird.vy * dt
    columns.forEach(e => e.x -= 10)

}

function render() {

    // clearing the canvas
    ctx.clearRect(0,0, canvas.width, canvas.height)

    // draw the bird
    ctx.fillStyle = bird.color
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height)

    console.log(columns)
    // draw the rects
    ctx.fillStyle = "brown"
    columns.forEach(e => ctx.fillRect(e.x, e.y, e.width, e.height))
}

function step() {
    update()
    render()

    requestAnimationFrame(step)
}


// STARTING THE GAME
step()