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

class SortableTable extends HTMLTableElement {
  constructor(){
    super()
    console.log(this)
    this.tbody = this.querySelector('tbody')
    /*   this.attachShadow({ mode: 'open' })
    
    this.shadowRoot.appendChild(this.querySelector('table'))
    
    const style = document.createElement('style')
    style.innerHTML = `
      table {
        background-color: lightslategray;
      }
      this.table.appendChild(style)
    ` */
    

    this.data = [...this.tbody.querySelectorAll('tr')]
                .map(row => [...row.querySelectorAll('td')]
                .map(cell => cell.innerText))
    this.querySelector('thead').addEventListener('click', this.onClick)

  }
  onClick = (e) => {
    let ind = [...e.target.parentElement.children].indexOf(e.target)
    this.data.sort((a,b) => a[ind] < b[ind] ? -1 : 1)
    
    this.tbody.innerHTML = `
      ${this.data.map(row => `
        <tr>
          ${row.map(d => `
            <td>${d}</td>
          `).join('')}
        </tr>
      `).join('')}`
  }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})

