/*$('footer').on('click', ()=> {
  $('footer span').animateNumber({ number: 2023 });
})*/

(function (){
const observer = new IntersectionObserver(onObserve, {
  threshold: 1.0,
})

function onObserve(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      $('footer span').animateNumber({ number: 2023 });
    }
  })
}

observer.observe(document.querySelector("footer span"))
})();