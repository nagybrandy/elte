import { Person } from "./entities"
import { Button } from "./components/ui/button"
interface PeopleNameContainerProps {
    people: Person[]
    setSelectedPerson: (personIndex: number) => void
}

const PeopleNameContainer = ({people, setSelectedPerson}: PeopleNameContainerProps) => {
  return (
    <div>
      {people.map((e:any, i: number) => <Button key={e.id} onClick={() => setSelectedPerson(i)}>{e.name}</Button>)}
    </div>
  )
}

export default PeopleNameContainer
