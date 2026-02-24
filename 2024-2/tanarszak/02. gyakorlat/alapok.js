const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = "green"
ctx.fillRect(50,50,100,50)
ctx.fillStyle = "#00ffff"

let teglalap = {
    x: canvas.width/2,
    y: canvas.height/2,
    w: 50,
    h: 50, 
    img: new Image()
}
teglalap.img.src = "shrek.png"
teglalap.x -= teglalap.w/2
teglalap.y -= teglalap.h/2

// ctx.strokeRect
ctx.fillRect(teglalap.x,teglalap.y,teglalap.w,teglalap.h)
ctx.drawImage(teglalap.img, teglalap.x,teglalap.y,teglalap.w,teglalap.h)

ctx.lineWidth = 1;
ctx.strokeStyle = "green"
ctx.beginPath()
ctx.moveTo(50,250)
ctx.lineTo(400,400)
ctx.lineTo(50,400)
ctx.closePath()
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.arc(400, 200, 100, 0, Math.PI)
ctx.closePath()
ctx.fill()
ctx.stroke()

