const outerdiv = document.createElement('div')
outerdiv.style = "position: fixed;height: 10px; width: 100%; z-index: 99999;"
const innerdiv = document.createElement('div')
innerdiv.style = "height: 100%; width: 50%; background-color: #f4623a;"
outerdiv.append(innerdiv)

document.querySelector('body').prepend(outerdiv)

document.addEventListener('scroll', _.throttle(()=> {
    innerdiv.style.width = `${window.scrollY/(document.documentElement.scrollHeight-window.innerHeight) *100}%`
}, 10))

const event1 = new Event("scroll",{
    bubbles : true 
    
})
document.dispatchEvent(event1)
