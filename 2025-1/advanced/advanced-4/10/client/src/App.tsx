import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import LandingPage from './views/landing/LandingPage'
import Layout from './views/layout/Layout'
import LoginPage from './views/login/LoginPage'
import MoviePage from './views/movie/MoviePage'
import BookingsPage from './views/bookings/BookingsPage'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/movies" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="*" element={<LandingPage />} />
                <Route path="/bookings" element={<BookingsPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
