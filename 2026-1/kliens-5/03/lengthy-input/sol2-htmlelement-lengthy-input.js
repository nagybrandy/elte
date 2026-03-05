class LengthyInput extends HTMLElement {
    constructor() {
        super()

        this.element = this.querySelector('input')
        console.log(this.element.value.length) 
        this.span = document.createElement('span')
        this.span.innerHTML = `${this.element.value.length}/${this.element.maxLength}`
        this.append(this.span)

        this.addEventListener('input', this.onInput)
    }

    onInput = () => {

        this.span.innerHTML = `${this.element.value.length}/${this.element.maxLength}`
    }
}
   
customElements.define("lengthy-input", LengthyInput)
