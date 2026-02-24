// ================== VÁLTOZÓK =====================
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const balra = document.querySelector('#balra')
const jobbra = document.querySelector('#jobbra')
const animacio = document.querySelector('#animacio')

let pixelsPerYear = 5;
let origoYear = 1000;

// ================== SEGÉDFÜGGVÉNYEK =====================

const drawKiraly = (kiraly, drawY, color) => {
    const from = (kiraly.from - origoYear) * pixelsPerYear
    const to = (kiraly.to - kiraly.from) * pixelsPerYear
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color
    ctx.fillRect(from, drawY, to, 30)
    ctx.strokeRect(from, drawY, to, 30)
    ctx.font = '10px Arial'
    ctx.fillStyle = 'black'
    // backtick altgr+7 -> `
    ctx.fillText(`${kiraly.name} (${kiraly.from}-${kiraly.to})`, from+5, drawY+15)
}

function draw(){
    clear()
    for (let year = 1000; year <= 1500; year+=50) {
        ctx.strokeStyle = 'red'
        ctx.beginPath();
        ctx.moveTo((year-origoYear)*pixelsPerYear,0)
        ctx.lineTo((year-origoYear)*pixelsPerYear,400)
        ctx.stroke();
        ctx.closePath()
        ctx.font = '15px Arial'
        ctx.fillStyle = 'green'
        ctx.fillText(year, 2+(year-origoYear)*pixelsPerYear, 15)
    }
    
    arpads.forEach(kiraly => drawKiraly(kiraly, 50, "lightgreen"))
    plantagenets.forEach(kiraly => drawKiraly(kiraly, 100, "lightpink"))
}

function clear() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
}
let dt = 1.5
function update() {
    if(origoYear > 1400) {
        dt = -1.5
    }
    else if(origoYear < 1000) {
        dt = 1.5
    }
    origoYear += dt
}

function next() {
    update()
    draw()

    requestAnimationFrame(next)
}
// =========== ESEMÉNYKEZELŐK ============== 

balra.addEventListener('click', () => {
    origoYear -= 10
    draw()
})

jobbra.addEventListener('click', () => {
    origoYear += 10
    draw()
})
 
animacio.addEventListener('click', ()=> {
    next()
})  

// ========== FŐ PROGRAM ==========
draw()


