const span = $("span[data-animate-number]")

const observeElement = (entries)=> {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            $(entry.target).animateNumber({number: entry.target.dataset.animateNumber})
        }
    });
}

const options = {
    threshold: 1.0,
}

const observer = new IntersectionObserver(observeElement, options);

observer.observe(span[0])
