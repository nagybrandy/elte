/*
-klikk esemény
-kiszedni ami benne van, és egy adatszerkezetben eltárolni **
  [
    [Alma, Szabolcs],
    [Alma, Szabolcs],
    [Alma, Szabolcs],
  ]
-rendezünk valami szerint
-visszaírni a táblázatba
*/

const tbody = document.querySelector('tbody')
const data = [...tbody.querySelectorAll('tr')]
              .map(row => [...row.querySelectorAll('td')]
              .map(cell => cell.innerText))

document.querySelector('thead').addEventListener('click', (e)=>{
  const ind = [...e.target.parentElement.children].indexOf(e.target)
  data.sort((a,b)=> a[ind] < b[ind] ? -1 : 1)

  tbody.innerHTML = `
    ${data.map(tr => `
      <tr>
        ${tr.map(celldata => `
          <td>${celldata}</td>
        `).join('')}
      </tr>
    `).join('')}
  `
})

console.log(data)