import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Landing from './views/landing/Landing'
import Playlists from './views/playlists/Playlists'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/*       <Landing />*/}     
  <Playlists />
    </>
  )
}

export default App
