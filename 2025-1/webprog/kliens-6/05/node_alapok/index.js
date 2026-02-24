import PI, {add as összeadás, subtract} from "./math.js"
import cowsay from "cowsay"

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "xx",
    T : "🍕 ",
    r: true
}));
console.log(összeadás(5,6))
console.log(subtract(10,6))
console.log(PI)
console.log("Hello World");