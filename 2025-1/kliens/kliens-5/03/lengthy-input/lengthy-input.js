class LengthyInput extends HTMLInputElement {
    constructor() {
        super()
        console.log(this)
        
        this.div = document.createElement('div')
        this.div.classList.add("label", "label-length")
        this.span = document.createElement('span')
        this.span.innerText = `A szöveg hossza: ${this.value.length}`
        this.span.classList.add("label-text-alt")
        this.div.append(this.span)
        this.parentElement.append(this.div)

        console.log(this.div)
        this.addEventListener('input', this.onInput)
    }

    onInput = () => {
        this.span.innerText = `A szöveg hossza: ${this.value.length}`
    }
}

customElements.define("lengthy-input", LengthyInput, { extends: "input" })