// 1. Legyen az egész Vászon fekete, sötétszürke
// 2. Helyezz el 1 db kicsi kört a hátteren
// 3. Helyezz el sok pici kört random helyen a hátteren, hogy ilyen csillagos eget kapjunk.
// 4. Randomizáld a körök színét is!
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle ="rgb(" + Math.random() * 255 +"," +Math.random() * 255 +"," + Math.random()*255 +")"
ctx.beginPath()
ctx.arc(10, 10, 3, 0, Math.PI *2)
ctx.closePath()
ctx.fill()
ctx.stroke()

console.log(Math.random()*canvas.width)
