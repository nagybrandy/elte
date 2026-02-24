import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Button } from "@/components/ui/button"
  import movies from "@/assets/movies.json"

import { useParams } from "react-router"
  
  export default function MoviePage() {
    const { id } = useParams()

    // Sample movie data
    const movie = id ? movies.find(e => e.id === parseInt(id)) : undefined
    
    if(!movie) {
        return <div>Select a movie!</div>
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
              src={`/${movie.image_path}`}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    )
  } 