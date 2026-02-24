import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import LandingPage from './views/landing/LandingPage'
import Layout from './views/layout/Layout'
import LoginPage from './views/login/LoginPage'
import MoviePage from './views/movie/MoviePage'
function App() {

  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="*" element={<LandingPage />} />
            </Routes>
          </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
