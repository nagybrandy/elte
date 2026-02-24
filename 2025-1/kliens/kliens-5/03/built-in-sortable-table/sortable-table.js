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
class SortableTable extends HTMLTableElement {
    constructor() {
        super();

        this.data = [...this.querySelectorAll('tr')].map(tr =>
            [...tr.querySelectorAll('td')].map(e => e.innerText))

        this.headers = this.data.shift()
        this.tbody = this.querySelector('tbody')

        this.querySelector('thead tr').addEventListener('click', this.onClick)
    }

    newTableRow = (array, parent) => {
        const new_headertr = document.createElement('tr')
        array.forEach(e => {
            const td = document.createElement('td')
            td.innerHTML = e
            new_headertr.append(td)
        })
        parent.append(new_headertr)
    }

    onClick = (e) => {
        console.log(this)
        if (e.target.matches('td')) {
            const sortingIndex = [...e.target.parentElement.children].indexOf(e.target)

            const sortedData = this.data.sort((a, b) => a[sortingIndex] > b[sortingIndex] ? 1 : -1)
            this.tbody.innerHTML = ""

            sortedData.forEach(row => this.newTableRow(row, this.tbody))
        }
    }
}

customElements.define("sortable-table", SortableTable, {extends: 'table'})