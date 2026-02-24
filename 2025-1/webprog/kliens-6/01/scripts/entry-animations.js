const options = {
    threshold: 1.0
}

const handleIntersect = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`animate__animated`, `animate__${entry.target.dataset.scrollAnimation}`)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
const animateElements = document.querySelectorAll('[data-scroll]')
animateElements.forEach(e => observer.observe(e))