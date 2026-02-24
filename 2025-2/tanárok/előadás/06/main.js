let VALUE = 15

console.log(add(5,7))


function add() {
    console.log(VALUE)
}

console.log(_.random(5,100))

const button = document.querySelector('button')

button.addEventListener('click', ()=> {
    button.disabled = true

    /*
    button.innerHTML = "Várj 3 mp-et!"

    setTimeout(()=> {
        button.innerHTML = "Várj 2 mp-et!"
        setTimeout(()=> {
            button.innerHTML = "Várj 1 mp-et!"
            setTimeout(()=> {
                button.disabled = false
                button.innerHTML = "Nyomj meg!"
                console.log("Nyertél")
            }, 1000);
        }, 1000);
    }, 1000);*/
    let time = 5
    button.innerHTML = `Várj ${time} mp-et!`

    let timer = setInterval(()=> {
        time--;
        button.innerHTML = `Várj ${time} mp-et!`
        if(time == 0) {
            clearInterval(timer)
            button.disabled = false
            button.innerHTML = "Nyomj meg!"
        }
    },1000)

})


