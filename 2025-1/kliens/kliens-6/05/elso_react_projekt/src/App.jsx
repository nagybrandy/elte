import './App.css'
import Greeting from './Greeting'
import people from "./people.json"
import ListItem from './ListItem'
import { useState } from 'react'
import ListContainer from './ListContainer'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="w-8/12 mx-auto mt-10">
      <h1 className='font-bold text-primary text-3xl mb-2'>People</h1>

      <ListContainer className="list bg-base-100 rounded-box shadow-md">
        {people.map((person, i) => <ListItem key={i} id={i} person={person} setSelectedIndex={setSelectedIndex} />)}
      </ListContainer>
      
      <Greeting person={people[selectedIndex]} />
    </div>
  )
}

export default App
