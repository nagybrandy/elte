window.addEventListener('scroll', _.throttle(onScroll, 1000))

const nav = document.querySelector('nav')
/* 
let waiting = false
function onScroll(){
  if(window.scrollY > 200){
    nav.classList.add('navbar-scrolled')
  } else {
    nav.classList.remove('navbar-scrolled')
  }
  if(!waiting){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
    console.log('asd')
    waiting = true
    setTimeout(()=> waiting = false, 1000)
  }
} */

function onScroll(){
      nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
  }