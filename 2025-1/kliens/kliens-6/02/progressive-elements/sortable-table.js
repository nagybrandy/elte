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

const table = document.querySelector('table')
const tbody = table.querySelector('tbody')
const thead = table.querySelector('thead')

const data = [...table.querySelectorAll("tr")].map(
    tr => [...tr.querySelectorAll('td')].map(
        td => td.innerText
    )
)
const headers = data.shift()

const newTr = (array, parent) => {
    const new_headertr = document.createElement('tr')
    array.forEach(e => {
        const td = document.createElement('td')
        td.innerHTML = e
        new_headertr.append(td)
    })
    parent.append(new_headertr)
}

thead.addEventListener("click", (e) => {
    if (e.target.matches('td')) {
        const columnIndex = [...e.target.parentElement.children].indexOf(e.target)
        data.sort((a, b) => a[columnIndex] > b[columnIndex] ? 1 : -1)
        tbody.innerHTML = ""
        data.forEach(row => {
            newTr(row, tbody)
        })
    }
})
