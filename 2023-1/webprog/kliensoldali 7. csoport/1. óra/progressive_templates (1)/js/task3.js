const observer = new IntersectionObserver(onObserve, {
  threshold: 1.0,
})

function onObserve(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
    entry.target.classList.add(
      'animate__animated',
      `animate__${entry.target.dataset.scrollAnimation}`
      )
    }
  })
}

console.log("asd")
document.querySelectorAll('[data-scroll]').forEach(e => observer.observe(e))