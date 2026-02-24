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
        publicationYear: 1925,
        publisher: "Charles Scribner's Sons",
        isbn: "978-0743273565"
    },
    {
        author: "Leo Tolstoy",
        title: "War and Peace",
        publicationYear: 1869,
        publisher: "The Russian Messenger",
        isbn: "No ISBN"
    }
];

// Task 8

// Task 9

// Task 10

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
