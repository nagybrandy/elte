import { useState } from 'react'
import Home from './views/landing/Home'
import Layout from './views/layout/Layout'
import { Routes, Route } from 'react-router'
import LoginPage from './views/auth/LoginPage'
import MoviePage from './views/movies/MoviePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Home />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
