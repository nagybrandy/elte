import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function MovieDetail() {
  
  // Sample movie data
  const movie = {
    id: 1,
    title: "Dune: Part Two",
    description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    release_year: 2024,
    duration: 166,
    genre: "Sci-Fi",
    director: "Denis Villeneuve",
    image_path: "/movies/dune.jpg",
    screenings: [
      { id: 1, start_time: "2024-04-15T18:00:00", price: 1800 },
      { id: 2, start_time: "2024-04-16T20:30:00", price: 1900 },
      { id: 3, start_time: "2024-04-17T14:00:00", price: 1700 }
    ]
  }

  // Screenings to display
  const currentScreenings = movie.screenings

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center gap-4 mb-4 text-muted-foreground">
            <span className="text-lg">{movie.release_year}</span>
            <span className="text-lg">{movie.duration} minutes</span>
            <span className="text-lg">{movie.genre}</span>
            <span className="text-lg">Director: {movie.director}</span>
          </div>
          <p className="text-lg mb-8 text-muted-foreground">{movie.description}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Screenings</h2>
            <div className="rounded-md border bg-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Book</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentScreenings.map((screening) => (
                    <TableRow key={screening.id}>
                      <TableCell>
                        {screening.start_time}
                      </TableCell>
                      <TableCell>{screening.price} Ft</TableCell>
                      <TableCell>
                        <Button>Book</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              <Button variant="outline" disabled>Previous</Button>
              <span className="flex items-center px-4 text-muted-foreground">
                Page 1 of 1
              </span>
              <Button variant="outline" disabled>Next</Button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={movie.image_path}
            alt={movie.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
} 