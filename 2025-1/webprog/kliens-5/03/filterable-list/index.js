class FilterableList extends HTMLUListElement {
    constructor() {
        super()
        console.log(this)
        this.inputField = document.createElement('input')
        this.prepend(this.inputField)
        this.addEventListener('input', this.onInput)
        this.data = [...this.querySelectorAll('li')].map(e => e.innerText)
        this.lis = this.querySelectorAll('li')

        console.log(this.data)
    }

    onInput = (e) => {
        console.log(e.target.value)
        this.lis.forEach(word => {
            console.log(word)
            if (word.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                word.hidden = false
            } else {
                 word.hidden = true
            }
        })

    }
}

customElements.define("filterable-list", FilterableList, { extends: "ul" })
