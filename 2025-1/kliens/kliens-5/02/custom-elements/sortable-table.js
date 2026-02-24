/*
[
    ["Sör márka", "Típus", "Kiszerelés"],
    ["Soproni IPA", "IPA", "0.5 liter" ],
    ...
]
Sör márka	Típus	Kiszerelés
Soproni IPA	IPA	0.5 liter
Kőbányai	Lager	2 liter
Pécsi Radler	Radler 0.0%	0.5 liter
*/

const table = document.querySelector('table')
const tbody = [...table.querySelectorAll('tr')].map(tr => 
              [...tr.querySelectorAll('td')].map(e => e.innerText))


console.log(tbody)