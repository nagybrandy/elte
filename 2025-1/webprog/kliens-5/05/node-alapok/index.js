import cowsay from "cowsay"
import hellobello, {subtract, add} from "./math.js"

console.log(cowsay.say({
    text : hellobello+" "+add(5+7),
    e : "xX",
    T : "🍕",
    r: true,
}));

console.log("Hello")