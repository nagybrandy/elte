class TextareaWithLength extends HTMLElement {
  constructor(){
    super()
    this.textarea = this.querySelector('textarea')
    this.span = document.createElement('span')
    this.span.innerHTML = '0'
    this.appendChild(this.span)
    this.textarea.addEventListener('input', ()=> {
      this.span.innerHTML = this.textarea.value.length
    })

    this.textarea.dispatchEvent(new Event('input', {
      bubbles: true,
    }))
  }
}

customElements.define('textarea-with-length', TextareaWithLength);