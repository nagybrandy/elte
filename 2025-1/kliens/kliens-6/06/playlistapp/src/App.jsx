import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Playlist from './views/playlists/Playlist'
import Menu from './views/layout/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Playlist />
    </>
  )
}

export default App
