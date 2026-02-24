const outerdiv = document.createElement('div')
outerdiv.style = "width:100%;height:5px;position: fixed;z-index: 99999;"
const innerdiv = document.createElement('div')
innerdiv.style = "height:5px;width:80%;background-color: #F4623A;"

outerdiv.append(innerdiv)

document.querySelector('body').prepend(outerdiv)

window.addEventListener('scroll', ()=> {
    innerdiv.style.width = `${Math.round(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100)}%`
})

const event2 = new Event("scroll")
window.dispatchEvent(event2)