// Task 1
const button1 = document.querySelector('div#task1 button')
const input1 = document.querySelector('#task1 input')
const text1 = document.querySelector('#helloText')

//console.log(button1, input1, text1);

button1.addEventListener('click', () => {
    text1.innerText = `Hello ${input1.value}!`
})

console.log(3)
// Task 2
const t2div = document.querySelector('#task2')
const button2 = t2div.querySelector('button')
const input2 = t2div.querySelector('input')
const helloRepeatsDiv = t2div.querySelector('#helloRepeats')

button2.addEventListener('click', ()=> {
    const num = input2.value
    helloRepeatsDiv.innerText = ""
    for (let i = 1; i <= num; i++) {
        const h1 = document.createElement('h1')
        h1.innerText = "Hello World!"
        h1.style.fontSize = `${i*15}px`
        helloRepeatsDiv.append(h1)
    }
})

// Task 3

// Task 4
const links = document.querySelectorAll('#task4 a')
const ul = document.querySelector('#hyperlinksList')

links.forEach(a => {
    ul.innerHTML += `<li><a href="${a.href}">${a.href}</a></li>`
})

// Task 5

// Task 6
//SELECTORS
const inputs = document.querySelectorAll('#task6 input')
const button6 = document.querySelector('#task6 button')

//CONSTANTS
const children = [
    { name: "Anna", class: "3/A", age: 8 },
    { name: "Bence", class: "4/B", age: 9 },
    { name: "Cecilia", class: "2/C", age: 7 },
    { name: "David", class: "5/D", age: 10 },
    { name: "Emma", class: "1/E", age: 6 }
];

//METHODS
const addNewRow = (cname, cclass, cage)=> {
    document.querySelector('#task6 table')
    .innerHTML += `
                        <tr>
                            <td>${cname}</td>
                            <td>${cclass}</td>
                            <td>${cage}</td>
                        </tr>
                    `
}

// INTIATING FUNCTIONS
children.forEach(child => addNewRow(child.name, child.class, child.age))

// EVENTLISTENERS
button6.addEventListener('click', 
            () => addNewRow(
                inputs[0].value, 
                inputs[1].value,
                inputs[2].value)
        )


const cells = document.querySelectorAll('#task6 td')
const table6 = document.querySelector('#task6 table')

table6.addEventListener('click', (e)=> {
    if(!e.target.matches("td")) return;
        
    if(e.shiftKey) {
        e.target.parentElement.style.backgroundColor = "red"
    } else {
        e.target.style.backgroundColor = e.altKey ? "unset" : "blue"
    } 
})

// Task 7
const booksList = [
    {
        author: "J.K. Rowling",
        title: "Harry Potter and the Philosopher's Stone",
        publicationYear: 1997,
        publisher: "Bloomsbury",
        isbn: "978-0747532743"
    },
    {
        author: "George Orwell",
        title: "1984",
        publicationYear: 1949,
        publisher: "Secker & Warburg",
        isbn: "978-0451524935"
    },
    {
        author: "Harper Lee",
        title: "To Kill a Mockingbird",
        publicationYear: 1960,
        publisher: "J. B. Lippincott & Co.",
        isbn: "978-0061120084"
    },
    {
        author: "F. Scott Fitzgerald",
        title: "The Great Gatsby",
        publicationYear: 1869,
        publisher: "Charles Scribner's Sons",
        isbn: "978-0743273565"
    },
    {
        author: "Leo Tolstoy",
        title: "War and Peace",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    },
    {
        author: "Leo Tolstoy",
        title: "Piece and Wore",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    }, 
    {
        author: "Leo Tolstoy",
        title: "Peace and Raw",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    }
];

const input7 = document.querySelector('#task7 input')
const button7 = document.querySelector('#task7 button')
const ul7 = document.querySelector('#task7 ul')

button7.addEventListener('click', ()=> {
    const filteredList = booksList.filter(e => e.publicationYear === parseInt(input7.value))
    ul7.innerHTML = filteredList.map(e=> `<li>${e.title}</li>`).join("")
})
// Task 8
const publishers = new Set(booksList.map(e=> e.publisher))

const select = document.querySelector('#task8 select')
const table8 = document.querySelector('#task8 table')

select.innerHTML = [...publishers].map(e=> `<option>${e}</option>`).join("")

select.addEventListener('input', ()=> {
    table8.children[1].innerHTML = booksList.filter(e => e.publisher === select.value).map(e => `
                        <tr>
                            <td>${e.author}</td>
                            <td>${e.title}</td>
                            <td>${e.publicationYear}</td>
                            <td>${e.isbn}</td>
                        </tr>
                    `).join("")
})
// Task 9

// Task 10
const input10 = document.querySelector('#task10 input')
const button10 = document.querySelector('#task10 button')
const guessList = []

const randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber)

button10.addEventListener('click', ()=> {
    const guessNumber = parseInt(input10.value)
    if(randomNumber === guessNumber) {
        alert("We got it!!!")
    } else if(randomNumber > guessNumber) {
        const li = document.createElement('li')
        li.innerHTML = `Guessed number: ${guessNumber} - the original is higher`
        document.querySelector('#guessList').append(li)
    } else {
        const li = document.createElement('li')
        li.innerHTML = `Guessed number: ${guessNumber} - the original is lower`
        document.querySelector('#guessList').append(li)
    }
})




document.querySelectorAll("ul#menu li a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the page from jumping to the link on click
        const targetId = this.getAttribute("href").substring(1); // Get the value of the "href" attribute without the "#" symbol
        const tasks = document.querySelectorAll(".task");
        tasks.forEach(function(task) {
            if (task.id === targetId) {
                task.classList.add("current");
            } else {
                task.classList.remove("current");
            }
        });
    });
});
