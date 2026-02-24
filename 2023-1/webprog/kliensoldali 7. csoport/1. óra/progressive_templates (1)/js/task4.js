const div = document.createElement("div");

div.innerHTML = `<div style="position: fixed; z-index: 2000; width: 100%">
  <div style="background-color: red; width: 0%; height: 5px"></div>
</div>`

document.body.prepend(div);

const progressBar = div.querySelector('div div div')

console.log(progressBar, scrollY)

progressBar.style.width = '10%'

window.addEventListener("scroll", 
                        _.throttle(() => {    
                          progressBar.style.width =
                          scrollY / 
                          (document.body.scrollHeight - document.body.clientHeight) 
                          * 100 + "%"}, 10))