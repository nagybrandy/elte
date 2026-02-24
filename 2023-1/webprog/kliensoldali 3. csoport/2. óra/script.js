/*
FELADAT: olyan táblázat, ami a fejlécre kattintva rendezhető

1 - tömbbe behúzzuk**
[
  [Alma, Békés]
  [Körte, HD]
  [Szilva, Vas]
]

2 - kattintásra rendezzük **

3. megjelenítjük a rendezzetett
*/

const tbody = document.querySelector('tbody')
const data = [...tbody.querySelectorAll('tr')]
            .map(row => [...row.querySelectorAll('td')]
            .map(cell => cell.innerText))

document.querySelector('thead').addEventListener('click',(e)=>{
  let ind = [...e.target.parentElement.children].indexOf(e.target);
  data.sort((a,b) => a[ind] < b[ind] ? -1 : 1)
  tbody.innerHTML = `
    ${data.map(row => `
      <tr>
        ${row.map(d => `
          <td>${d}</td>
        `).join('')}
      </tr>
    `).join('')}`
})