const div = document.createElement('div')

div.innerHTML = `
<div style="position: fixed; z-index: 2000; width:100%;height:5px">
  <div style="background-color: #F4623A;width:0%;height:5px"></div>
</div>
`
document.querySelector('body').prepend(div)

const progressBar = div.querySelector('div div div')
progressBar.style.width = "30%"

window.addEventListener('scroll', _.throttle(()=>{
  let h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = `${scrollY / h * 100}%`
}))
