const ul = document.querySelector('ul.lista')
ul.addEventListener('click', kattintas)
function kattintas(e){
    if(e.target.matches('li')){
        e.target.classList.toggle('kesz')
}
}
   