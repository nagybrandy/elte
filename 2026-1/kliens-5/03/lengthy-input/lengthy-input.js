class LengthyInput extends HTMLInputElement {
    constructor() {
        super()

        console.log(this)
        console.log(this.value.length) 
        this.span = document.createElement('span')
        this.span.innerHTML = `${this.value.length}/${this.maxLength}`
        this.parentElement.append(this.span)

        this.addEventListener('input', this.onInput)
    }

    onInput = () => {
        this.span.innerHTML = `${this.value.length}/${this.maxLength}`
    }
}
   
customElements.define("lengthy-input", LengthyInput, {extends : 'input'})
