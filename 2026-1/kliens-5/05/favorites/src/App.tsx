import './App.css'
import Card from './Card'
import musicCards from "./songs.json"
import type { Song } from './entities/song.entity'

function App() {
  return (
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 p-4'>
      {musicCards.map((e : Song, i: number) => <Card key={i} {...e} />)}
    </div>
  )
}

export default App
