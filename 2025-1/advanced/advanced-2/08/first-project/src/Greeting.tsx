interface GreetingProps {
    name: string;
    age: number;
}

const Greeting = ({ name, age } : GreetingProps) => {
    console.log(name)

    return <div>Hello {name}! You are {age} years old.</div>
}

export default Greeting;