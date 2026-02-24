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

class SortableTable extends HTMLTableElement {
  constructor(){
    super()

    /*
    this.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    style.innerHTML = `
      table {
        background-color: lightgreen;
      }
    `
    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(this.table) */
    this.tbody = this.querySelector('tbody')
    this.data = [...this.tbody.querySelectorAll('tr')]
                  .map(row => [...row.querySelectorAll('td')]
                  .map(cell => cell.innerText))
    
    this.querySelector('thead').addEventListener('click', this.onClick)
     
  }
    onClick = (e) => {
      const ind = [...e.target.parentElement.children].indexOf(e.target)
      this.data.sort((a,b)=> a[ind] < b[ind] ? -1 : 1)
      this.tbody.innerHTML = `
        ${this.data.map(tr => `
          <tr>
            ${tr.map(celldata => `
              <td>${celldata}</td>
            `).join('')}
          </tr>
        `).join('')}
      `
  }
}

customElements.define('sortable-table', SortableTable, {extends: 'table'})
