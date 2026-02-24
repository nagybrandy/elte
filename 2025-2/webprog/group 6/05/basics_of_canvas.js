const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// rectangles
ctx.fillStyle = "red"
ctx.fillRect(50,50,200,100)
ctx.lineWidth = 4
ctx.strokeStyle = "green"
ctx.strokeRect(300,200,200,100)


ctx.fillStyle = "blue"

// paths
ctx.beginPath()
ctx.moveTo(200,700)
ctx.lineTo(300,500)
ctx.lineTo(500,500)
ctx.closePath()
ctx.fill()
ctx.stroke()

// texts
ctx.font = "21px Arial"
ctx.fillText("Hello World", 400, 400)

// circles
ctx.beginPath()
ctx.arc(500,300,200,0,2*Math.PI)
ctx.fill()

ctx.stroke()