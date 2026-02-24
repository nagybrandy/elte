
interface Person {
  id: number
  name: string
  age: number
}

interface GreetingProps {
    person: Person
}

const Greeting = ({ person } : GreetingProps) => {
  return (
    <div>
      Hello {person.name}, you are {person.age} years old!
    </div>
  )
}

export default Greeting
