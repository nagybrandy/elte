import MovieDetails from './views/movies/MovieDetail'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import Home from './views/landing/Home'
import Screenings from './views/screenings/Screenings'
import Booking from './views/booking/Booking'
import MyBookings from './views/profile/MyBookings'
import { AddMovieModal } from './views/landing/_components/AddMovieModal'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function App() {
  return (
    <div className="bg-background flex flex-col">
    {/* Background */}
    <div className="z-0 absolute w-full h-full overflow-hidden min-h-screen pointer-events-none">
      <div className="absolute top-0 -left-44 w-[500px] h-[500px] bg-red-700 opacity-15 rounded-full blur-3xl"></div>
      <div className="absolute -top-44 left-64 w-[500px] h-[500px] bg-green-700 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-16 -right-44 w-[500px] h-[500px] bg-blue-700 opacity-10 rounded-full blur-3xl"></div>
    </div>

    {/* Navigation */}
    <nav className="border-b z-50 shadow-lg rounded-full sticky top-5 mx-auto max-w-6xl w-11/12">
      <Card className="lg:p-0 lg:rounded-full rounded-full lg:shadow-lg shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex lg:flex-row flex-col gap-3 justify-between items-center lg:h-16">
            <div className="flex items-center space-x-8">
              <span className="text-xl font-bold">
                Cinema
              </span>
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Screenings
              </span>
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Movies
              </span>
              <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                My Bookings
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground">Welcome, User</span>
              <Button variant="outline">
                Logout
              </Button>
              <Button variant="ghost">Login</Button>
              <Button>Register</Button>
              <button className="bg-background rounded-full flex items-center justify-center w-8 h-8 border">
                🌙
              </button>
            </div>
          </div>
        </div>
      </Card>
    </nav>

    {/* Main Content */}
    <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
        <div className="space-y-20">
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Home Page</h2>
            <Home />
          </div>

          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Add Movie Page</h2>
            <AddMovieModal />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Movie Details Page</h2>
            <MovieDetails />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Screenings Page</h2>
            <Screenings />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Booking Page</h2>
            <Booking />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">My Bookings Page</h2>
            <MyBookings />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Login Page</h2>
            <Login />
          </div>
          
          <div className="border-b pb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Register Page</h2>
            <Register />
          </div>
        </div>
        </main>

      {/* Footer */}
      <footer className="border-t z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Your premier destination for the latest movies and screenings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Movies</li>
                <li>Screenings</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@cinema.com</li>
                <li>Phone: +1 234 567 890</li>
                <li>Address: 123 Movie Street</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Cinema. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
