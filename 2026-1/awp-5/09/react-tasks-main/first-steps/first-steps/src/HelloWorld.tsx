
interface HelloWorldProps {
    name: string;
    age?: number;
}

function HelloWorld({ name, age} : HelloWorldProps) {
    console.log(name)
    return (
        <>
            <h1>Hello {name}!</h1>
            {age && <p>You are {age} years old</p>}
        </>
    )
}

export default HelloWorld;