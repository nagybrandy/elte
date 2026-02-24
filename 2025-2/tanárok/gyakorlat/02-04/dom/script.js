// Task 1
const div1 = document.querySelector('#task1')
const textH3 = div1.querySelector('h3#helloText')
const input1 = div1.querySelector('input')
const button1 = div1.querySelector('button')

button1.addEventListener('click', () => {
    textH3.innerText = `Hello ${input1.value}!`
})

textH3.innerText = "Hello Bendi!"

// Task 2
const div2 = document.querySelector('#task2')
const helloRepeatsDiv = div2.querySelector('#helloRepeats')
const input2 = div2.querySelector('input')
const button2 = div2.querySelector('button')

button2.addEventListener('click', () => {
    helloRepeatsDiv.innerHTML = ""
    const num = parseInt(input2.value)
    for (let i = 0; i < num; i++) {
        const h1 = document.createElement('h1')
        h1.innerText = "Hello World!"
        h1.style.fontSize = `${i*5+9}px`
        helloRepeatsDiv.append(h1)
    }
})
// Task 3

// Task 4
const links = document.querySelectorAll("#task4 a")
const ul = document.querySelector("#task4 ul")

console.log(links)
links.forEach(e => {
    ul.innerHTML += `<li>
                        <a href="${e.href}">
                            ${e.href}
                        <a/>
                    </li>`
})

// Task 5

// Task 6
const children = [
    { name: "Anna", class: "3/A", age: 8 },
    { name: "Bence", class: "4/B", age: 9 },
    { name: "Cecilia", class: "2/C", age: 7 },
    { name: "David", class: "5/D", age: 10 },
    { name: "Emma", class: "1/E", age: 6 }
];

const t6div = document.querySelector('#task6')
const table = t6div.querySelector('table')
const inputs = t6div.querySelectorAll('input')

console.log(inputs)

const addNewRow = (cname, cclass, cage) => {
    table.innerHTML += `
                            <tr>
                                <td>${cname}</td>
                                <td>${cclass}</td>
                                <td>${cage}</td>
                            </tr>
                        `
} 

children.forEach(child => addNewRow(child.name, child.class, child.age))

t6div.querySelector('button')
     .addEventListener(
        'click', 
        () => addNewRow(inputs[0].value, inputs[1].value, inputs[2].value)
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

document.querySelectorAll("ul li a").forEach(function(link) {
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
