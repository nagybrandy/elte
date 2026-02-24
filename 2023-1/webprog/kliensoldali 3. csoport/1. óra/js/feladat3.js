const observer = new IntersectionObserver(onObserve, {
  threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 1.0],
})

function onObserve(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add(
        'animate__animated',
        `animate__${entry.target.dataset.dataScrollAnimation}`)
    }
  })
}

document.querySelectorAll('[data-scroll]').forEach(e => observer.observe(e))