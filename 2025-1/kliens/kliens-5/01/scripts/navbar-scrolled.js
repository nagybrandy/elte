const navbar = document.querySelector('nav')

const scrolled = ()=> {
    console.log(window.scrollY)
   /*  if(window.scrollY > 200) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    } */
   navbar.classList.toggle('navbar-scrolled', window.scrollY > 200)

}

document.addEventListener('scroll', _.throttle(scrolled, 500))


