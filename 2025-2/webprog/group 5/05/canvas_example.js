// SELECTORS
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')


// Examples
// rectangles
ctx.fillStyle = "green"
ctx.fillRect(100,300,100,100)

ctx.strokeStyle = "blue"
ctx.lineWidth = 3
ctx.strokeRect(20,20,50,50)

ctx.fillStyle = "#00FFFF"

// draw paths
ctx.beginPath()
ctx.moveTo(200,200)
ctx.lineTo(300,200)
ctx.lineTo(100,150)
ctx.closePath()
ctx.fill()
ctx.stroke()

// arcs, cricles
ctx.beginPath()
ctx.arc(400,300,100,0,2*Math.PI)
ctx.fill()
ctx.stroke()
// texts 
ctx.fillStyle = "red"
ctx.font = "21px Arial"
ctx.fillText("Hello World!", 100, 200)

// images