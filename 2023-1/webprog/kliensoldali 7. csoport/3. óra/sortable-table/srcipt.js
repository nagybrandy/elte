/*
-kinyerjük a táblázatunkból az adatokat
[
  [Alma, Békés],
  [Körte, HD],
  [Szilva, Vas]
]
-ha kattintunk, sortolja az adott oszlop alapján az adatokat
-megjelenítjuk
*/

class SortableTable extends HTMLTableElement {
    constructor(){
      super()
     /*  this.table = this.querySelector('table')
      console.log(this) */
      /* this.attachShadow({mode:"open"})
      const style = document.createElement('style')
      style.innerHTML = `
        table {
          background-color: red
        }
      `
      this.table.appendChild(style)
      this.shadowRoot.appendChild(this.table) */


      
      this.tbody = this.querySelector("tbody")
      this.data = [...this.tbody.querySelectorAll("tr")]
      .map(row=> [...row.querySelectorAll('td')]
      .map(cell => cell.innerText))
      
      this.querySelector('thead').addEventListener('click', this.onClick)
    }

    onClick = (e) => {
      let ind = [...e.target.parentElement.children].indexOf(e.target)
      console.log(this.data)
      this.data.sort((a, b) => a[ind] > b[ind] ? 1 : -1)
    
      this.tbody.innerHTML = this.data.map(row => `
      <tr>
      ${row.map(d => 
        `<td>
          ${d}
        </td>`
      ).join('')}
      </tr>
      `).join('')
    }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})
//document.querySelectorAll('table').forEach(e => new SortableTable(e))