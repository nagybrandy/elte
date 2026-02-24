import { Person } from './entities'
import {
  Card as CardUI,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Greeting from './Greeting'

interface CardProps {
  person: Person
}

const Card = ({ person }: CardProps) => {
  return (
    <CardUI>
      <CardHeader>
        <CardTitle>{person.name}</CardTitle>
        <CardDescription><Greeting name={person.name} age={person.age} /></CardDescription>
      </CardHeader>
      <CardContent>
        <div>Name: </div>
        <div>Age: {person.age}</div>
        <div>Email: {person.email}</div>
        <div>City: {person.city}</div>
      </CardContent>
    </CardUI >
  )
}

export default Card
