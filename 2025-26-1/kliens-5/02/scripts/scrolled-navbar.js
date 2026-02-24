const nav = document.querySelector('nav');

const handleScroll = (e)=> nav.classList.toggle('navbar-scrolled', window.scrollY > 200)

document.addEventListener('scroll', _.throttle(handleScroll, 500))

/*if(window.scrollY > 200) nav.classList.add("navbar-scrolled")
else nav.classList.remove("navbar-scrolled")*/