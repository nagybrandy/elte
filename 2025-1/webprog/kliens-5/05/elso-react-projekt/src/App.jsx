import Greeting from './Greeting'
import people from "./people.json"
import PeopleContainer from "./PeopleContainer"
import SelectedPerson from "./SelectedPerson"

function App() {

  return (
    <>
      <SelectedPerson />
      <PeopleContainer>
        {people.map((person, i) => <Greeting key={i} name={person.name} age={person.age} />)}
      </PeopleContainer>
    </>
  )
}

export default App
