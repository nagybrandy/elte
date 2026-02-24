
let nav = document.querySelector("nav")
window.addEventListener('scroll', _.throttle(onScroll, 3000))

/* function onScroll(e) {
  if(window.scrollY > 200){
    nav.classList.add("navbar-scrolled")
  } else {
    nav.classList.remove("navbar-scrolled")
  }
}
 */

/* let waiting = false;
function onScroll(e) {
  if(!waiting){
    nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
    console.log("már megint")
    waiting = true;
    setTimeout(()=> waiting = false, 100)
    
  }
} */

function onScroll(e) {
    nav.classList.toggle("navbar-scrolled", window.scrollY > 200)
    console.log("lódes")
}