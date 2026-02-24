window.addEventListener('scroll', _.throttle(onScroll, 100))
const nav = document.querySelector('nav')

/* let waiting = false;
function onScroll(){
  if(window.scrollY > 200) {
    nav.classList.add('navbar-scrolled')
  } else {
    nav.classList.remove('navbar-scrolled')
  } 
  if(!waiting){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
    waiting = true
    setTimeout(() => waiting = false, 3000)
  }
} */

function onScroll(){
    nav.classList.toggle('navbar-scrolled', window.scrollY > 200)
}