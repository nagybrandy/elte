
class LengthyInput extends HTMLInputElement {
    constructor(){
        super()
        this.div = document.createElement('div')
        this.div.classList.add('label')
        this.span = document.createElement('span')
        this.span.classList.add('label-text-alt')
        this.span.innerText = `Karakterek száma: 0 / ${this.max}`
        this.div.append(this.span)
        this.parentElement.append(this.div)

        this.addEventListener('input', this.onInput)
    }

    onInput = () => {
        console.log(this.max)
        this.span.innerText = `Karakterek száma: ${this.value.length} / ${this.max}`
        this.span.classList.toggle('error',this.value.length > this.max)
    }
}

customElements.define('lengthy-input', LengthyInput, {extends: 'input'})