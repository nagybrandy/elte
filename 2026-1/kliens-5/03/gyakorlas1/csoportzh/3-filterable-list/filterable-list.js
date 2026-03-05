class FilterableList extends HTMLUListElement {
    constructor(){
        super()
        this.listItems = this.querySelectorAll('li')
        this.input = document.createElement('input')
        this.prepend(this.input)

        console.log(this.listItems)
        this.input.addEventListener('input', this.onInput)
    }

    onInput = () => {
        let newlist = []
        this.listItems.forEach(e =>  {
            const elem = e.innerText.toLowerCase()
            const search = this.input.value.toLowerCase()
            if(elem.includes(search)) {
                newlist.push(e.innerText)
            }
        })
        this.querySelectorAll('li').forEach(e => this.removeChild(e))
        newlist.forEach(text => {
            const li = document.createElement('li')
            li.innerText = text
            this.append(li)
        })
    }
}

customElements.define("filterable-list", FilterableList, {extends : 'ul'})