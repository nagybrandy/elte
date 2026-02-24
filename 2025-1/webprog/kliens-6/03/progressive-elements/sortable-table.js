/*
    1. Elmentjük a táblázat tartalmát
    [
    ...
        ["Laura","Dixie", "Béka"],
    ...
    ]
    2. Sortoljuk a kattintás alapján
    3. Új táblának a kigenerálása
*/

class SortableTable extends HTMLTableElement {
    constructor() {
        super()

        this.tbody = this.querySelector('tbody')
        this.thead = this.querySelector('thead')
    
        this.data = [...this.querySelectorAll("tr")].map(
            tr => [...tr.querySelectorAll('td')].map(
                td => td.innerText
            )
        )
        this.headers = this.data.shift()

        this.thead.addEventListener("click", this.onClick)
    }

    newTr = (array, parent) => {
        const new_headertr = document.createElement('tr')
        array.forEach(e => {
            const td = document.createElement('td')
            td.innerHTML = e
            new_headertr.append(td)
        })
        parent.append(new_headertr)
    }

    onClick = (e) => {
        if (e.target.matches('td')) {
            const columnIndex = [...e.target.parentElement.children].indexOf(e.target)
            console.log(this)
            this.data.sort((a, b) => a[columnIndex] > b[columnIndex] ? 1 : -1)
            this.tbody.innerHTML = ""
            this.data.forEach(row => {
                this.newTr(row, this.tbody)
            })
        }
    }
}

customElements.define("sortable-table", SortableTable, {extends: 'table'})