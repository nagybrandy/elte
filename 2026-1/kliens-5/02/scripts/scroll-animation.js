// 1. Meg kell tudnunk figyelni, hogy mikor görgetünk oda
// 2. Le kell játszani az animációt -> animate classokat rá kell rakni az elemre

const animatedElements = document.querySelectorAll("[data-scroll]")
const options = {
    threshold: 1.0,
}

const animateElement = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("animate__animated", `animate__${entry.target.dataset.scrollAnimation}`)
        }
    })
}

const observer = new IntersectionObserver(animateElement, options)
animatedElements.forEach(e => observer.observe(e))

