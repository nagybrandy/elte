import { useState } from 'react'
import './index.css'
import Card from './Card'
import PeopleNameContainer from './PeopleNameContainer'
import people from './assets/people.json'

function App() {
  const [selectedPerson, setSelectedPerson] = useState(0)
  console.log(selectedPerson)
  return (
    <div className='flex flex-col bg-background items-center justify-center h-screen'>
      <PeopleNameContainer people={people} setSelectedPerson={setSelectedPerson}/>
      <Card person={people[selectedPerson]} />
    </div>
  )
}

export default App
