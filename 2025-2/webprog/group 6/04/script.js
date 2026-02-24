const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')



let s = {
    w: 50,
    h: 50,
    x: 200,
    y: 200
}

function update() {
    s.x += 5
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    // Négyzet rajzolása
    ctx.fillStyle = "red"
    ctx.strokeStyle = "green"
    ctx.lineWidth = 2

    ctx.fillRect(30,100,150,200)
    ctx.strokeRect(30,100,150,200)

    ctx.font = "21px Arial"
    ctx.fillText("Hello",30,100,150,200)

    ctx.beginPath()
    ctx.moveTo(500,600);
    ctx.lineTo(400,500);
    ctx.lineTo(600,500);
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(200,200,100,0,2*Math.PI)
    ctx.stroke()
    ctx.fillRect(s.x, s.y, s.w, s.h)
}

function step() {
    update()
    draw()
    requestAnimationFrame(step)
}

step()