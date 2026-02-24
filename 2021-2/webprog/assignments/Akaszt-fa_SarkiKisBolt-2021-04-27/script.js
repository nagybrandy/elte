
let words = ["mikorleszdndbucsi", "carpetustakaranép", "kajamárnagyonéhes", "whyudodis", "ez", "még", "mindig", "nem", "tíz", "szó", "tavasziszünet"];
let random = Math.floor(Math.random() * (words.length)); 
let megoldas = words[random];
let megoldnyilv = "";
let hibak = 0;
let hibalista = []

for(let i = 0; i < megoldas.length; i++) {
  megoldnyilv += "_";
}
let feladva = document.getElementById("feladv") 
feladva.innerHTML = "A feladvány: " + megoldnyilv

function Tipp(char){
  if(hibalista.indexOf(document.getElementById("megoldas").value) != -1){
    alert("Ezt már egyszer tippelted és akkor sem volt jó! :c")
  } else {
    if(document.getElementById("megoldas").value.length == 1){
      let van = false
      let kar = document.getElementById("megoldas").value;
      for(let i = 0; i < megoldas.length;i++) {
        if(kar == megoldas[i]){
          megoldnyilv = megoldnyilv.substring(0,i) + kar + megoldnyilv.substring(i+1,megoldas.length)
          feladva.innerHTML = "A feladvány: " + megoldnyilv

          van = true;
        }
      }
        if(!van){
        alert("Ez a karakter nem szerepel a szóban!")
        hibalista.push(document.getElementById("megoldas").value)
        let hibalistaelem = document.getElementById("hibalista") 
        hibalistaelem.innerHTML += hibalista[hibak] + ", "
        hibak++
        let hibakelem = document.getElementById("hibak") 
        hibakelem.innerHTML = "Hibás tippek száma: " + hibak
        if(hibak==11){
          alert("Vesztettél! :(")
          document.getElementById("kuldes").disabled = true;
        }
      }
      if(megoldas == megoldnyilv){
            alert("Győztél!")
      }
    
    }
    else {
      alert("Írj be valamit!")
    }
  }
}
