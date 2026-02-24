const observingElements = (entries) => {
    entries.forEach(entry => {
        console.log(entry.target.dataset.animated)
        if(entry.target.dataset.animated === 'no' && entry.isIntersecting ) {
            $(entry.target).animateNumber({ number: 2019 })
            entry.target.dataset.animated = 'yes'
        }
    })
}

const options = {
    threshold: 1.0
}

const observer = new IntersectionObserver(observingElements, options)

const spans = $('span[data-number]')
const spansArray = [...spans]

spansArray.forEach(e => observer.observe(e))
