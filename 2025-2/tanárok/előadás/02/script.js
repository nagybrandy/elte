
const tomb = [3,4,5]

const ujtomb = tomb.map(a => a+5)
let account = {
    iban: "GB93116000060000000012345676",
    owner: "James Bond",
    transactions: [ 2000000, -993, -46000 ],
    balance : () => account.transactions.reduce((prev,current) => prev+current),
    addTransaction: (value) => account.transactions.push(value)
};
console.log(account.balance())
console.log(account.addTransaction(40000000))
console.log(account.balance())

let kutya = {
    kor: 7,
    nev: "Blöki",
    kakil (hanyszor) {
        for (let i = 0; i < hanyszor; i++) {
            console.log(this.nev, "kakil éppen...")
        }
    }
}

console.log(kutya.nev)
kutya.kakil(3)


console.log(tomb)
console.log(ujtomb)



