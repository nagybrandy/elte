

function Hello({ name = "Anonym", age } : { name?: string, age?: number }) {
    console.log(name)

    return (
        <div className="bg-green-50 border-1 border-green-500 rounded-lg p-4 mb-2">
            <h1>Hello {name}!</h1>
            {age && <p>You are {age} years old.</p>}
        </div>
    )
}

export default Hello;