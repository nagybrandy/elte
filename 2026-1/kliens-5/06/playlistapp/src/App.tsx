import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./app/home/Home"
import Playlists from "./app/playlists/Playlists"
import Layout from "./app/layout/Layout"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlists" element={<Playlists />} />
              <Route path="*" element={<Home  />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
