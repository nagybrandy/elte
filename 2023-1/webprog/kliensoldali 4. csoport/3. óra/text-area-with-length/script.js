class TextareaWithLength extends HTMLElement {
  constructor(){
    super()
    this.textarea = this.querySelector('textarea')
    const span = document.createElement('span')
    
    span.innerHTML = '0'
    this.appendChild(span)

    this.textarea.addEventListener('input', ()=>{
      span.innerHTML = this.textarea.value.length
    })
    
    this.textarea.dispatchEvent(new Event('input'))

  }
}

customElements.define('textarea-with-length', TextareaWithLength)


