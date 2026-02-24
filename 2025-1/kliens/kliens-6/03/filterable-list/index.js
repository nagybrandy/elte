class FilterableList extends HTMLUListElement {
    constructor(){
        super()

        this.inputField = document.createElement('input')
        this.prepend(this.inputField)
        this.items = this.querySelectorAll('li')
        
        this.inputField.addEventListener('input', this.onInput)
    }

    onInput = () => {
        const str = this.inputField.value.toLowerCase();

        this.items.forEach(e => {
            e.hidden = !e.innerText.toLowerCase().includes(str)
        })
    }
}

customElements.define('filterable-list', FilterableList, {extends: "ul"})