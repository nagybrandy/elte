function klikkeltem(){
    document.getElementById("cim").innerHTML = "Hali there"
    document.write(Date())
}

function klikkeltem1(){
    const element = document.getElementById("cim");
    element.innerHTML = "Hali there"
    
}
document.clas
function forma(){
    // document.getElementById("cim").innerHTML = document.getElementById("input").value;
    let betumeret = 50;
    document.querySelectorAll("p.a").forEach( function(e){
        e.innerHTML = document.getElementById("input").value;
        e.style.fontSize = betumeret + 'px'
        betumeret -= 10
    });
}
document.c
function ujsor(){
    //2. rész megcsinálni valamilyen ciklussal, megcsinálni hogy szép tábla legyen css ismétlés
    let newtext1 = document.getElementById("oszlop1").value;
    let newtext2 = document.getElementById("oszlop2").value;
    let newtext3 = document.getElementById("oszlop3").value;
    let table = document.getElementById("tablam");
    let row = table.insertRow(0)
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = newtext1;
    cell2.innerHTML = newtext2;
    cell3.innerHTML = newtext3;

}


// csináljanak egy oldalt, amin van egy kép és egy beviteli mező. A felhasználó képes legyen a kép forrását megváltoztatni
// szorzótábla kiíratása ciklussal
// 3x3 táblázat, új sor gombra kattintva


// document.getElementById(id).attribute = new value

// document.querySelectorAll("p.a").forEach(e => e.style.color = "red");
