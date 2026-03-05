class LengthyInput {
    constructor(element) {
        if(!element.matches("input[type='text']")) {
            return
        }

        this.elem = element

        this.span = document.createElement('span')
        this.span.innerHTML = `${this.elem.value.length}/${this.elem.maxLength}`
        this.elem.parentElement.append(this.span)

        this.elem.addEventListener('input', this.onInput)
    }

    onInput = () => {
        this.span.innerHTML = `${this.elem.value.length}/${this.elem.maxLength}`
    }
}
   
document.querySelectorAll('input').forEach( e => new LengthyInput(e))

