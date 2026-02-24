// 1. feladat
document.querySelector("#hozzaad").addEventListener("click", add)
function add(){
  let classes = ["name", "sikkosszeg", "sikkszama"]
  let classnum = 0
  let tr = document.createElement("tr")
  document.querySelectorAll(".new").forEach(e => {
    let td = document.createElement("td")
    td.innerHTML = e.value
    td.classList.add(classes[classnum])
    ++classnum
    tr.append(td)
  })
  document.querySelector("table").append(tr)
  document.querySelectorAll(".new").forEach(e => {
    e.value = ""
  })
}

// 2. feladat
document.querySelector("table").addEventListener("click", choose)
function choose(e){
  if(e.target.matches("td")){
    let tds = e.target.parentElement.querySelectorAll("td")
    tds.forEach(e => e.classList.toggle("kivalasztott"))
  }
}

// 3. feladat
let sum = 0;
document.querySelector("#lopas").addEventListener("click", sumAll)
function sumAll(){
  let values = document.querySelectorAll(".sikkosszeg.kivalasztott")
  // console.log(values)
  values.forEach(e => sum += parseInt(e.innerHTML))
  document.querySelector("#sum").innerHTML = sum
}

// 4. feladat
document.querySelector("#lopas").addEventListener("click", countAdd)
function countAdd(){
  let values = document.querySelectorAll(".sikkszama.kivalasztott")
  // console.log(values)
  values.forEach(e => e.innerHTML = parseInt(e.innerHTML) + 1)
}