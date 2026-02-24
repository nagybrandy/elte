import { add } from './math.js';
import * as cowsay from "cowsay"

console.log(cowsay.think({ text: 'Sziamia!!!', e: "xX", r: true }));

console.log(add(10,5))


fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
.then(response => {
    response.json().then(data => {
        fetch(data.results[0].url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    })
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));