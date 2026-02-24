import { useState } from 'react'
import './App.css'
import Greeting from './Greeting'
import people from "./assets/people.json"
import { Button } from './components/ui/button'

function App() {
  const [selectedPerson, setSelectedPerson] = useState(0)

  const handleClick = (ind : number) => {
    setSelectedPerson(ind)
  }

  return (
    <>
      {people.map((person, ind) => <Button onClick={()=>handleClick(ind)} key={person.id}>{person.name}</Button> )}
      <Greeting person={people[selectedPerson]} />
    </>
  )
}

export default App
