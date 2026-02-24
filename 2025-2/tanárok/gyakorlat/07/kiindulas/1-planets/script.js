// Biztosítjuk, hogy a DOM teljesen betöltődött
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


    const sun = {
        x: canvas.width/2,
        y: canvas.height/2,
        color: "yellow",
        size: 40
    }

    const planets = [
        {
            name: "Merkúr",
            radius: 70,
            size: 8,
            color: "gray",
            velocity: 2
        },
        {
            name: "Vénusz",
            radius: 100,
            size: 10,
            color: "orange",
            velocity: 1.5
        },{
            name: "Föld",
            radius: 140,
            size: 12,
            color: "blue",
            velocity: 1
        },{
            name: "Mars",
            radius: 180,
            size: 10,
            color: "red",
            velocity: 0.8
        }
    ]

    let angle = 0

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.fillStyle = sun.color;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sun.size, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();

        planets.forEach(p => {
            ctx.beginPath();
            ctx.arc(sun.x, sun.y, p.radius, 0, 2*Math.PI);
            ctx.stroke();

            const x = sun.x + p.radius * Math.cos(angle * p.velocity);
            const y = sun.y + p.radius * Math.sin(angle * p.velocity);

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(x, y, p.size, 0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
        });
    }

    function update(){
        angle += 0.02
    }

    function step(){
        update()
        draw()

        requestAnimationFrame(step)
    }

    step()
});