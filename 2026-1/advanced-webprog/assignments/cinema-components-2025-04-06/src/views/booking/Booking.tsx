import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Booking() {
  // Sample data
  const screening = {
    id: 1,
    movie: {
      title: "Dune: Part Two",
      id: 1,
      image_path: "/movies/dune.jpg",
      description: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
      duration: 166,
      genre: "Sci-Fi"
    },
    start_time: "April 15, 2024 6:00 PM",
    room: {
      name: "Room 1",
      rows: 5,
      seats_per_row: 10
    },
    price: 1800,
    unavailable_seats: [
      { row: 1, seat: 3 },
      { row: 2, seat: 5 },
      { row: 3, seat: 7 }
    ]
  }

  const selectedSeats = [
    { row: 1, number: 5, isSelected: true },
    { row: 1, number: 6, isSelected: true }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <Card>
        <CardContent className="p-6">
          {/* MovieCard and MovieDetails section */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Movie poster (MovieCard) */}
            <div className="rounded-lg overflow-hidden h-[350px]">
              <img 
                src={screening.movie.image_path} 
                alt={screening.movie.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Movie details */}
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold mb-3">{screening.movie.title}</h1>
              <div className="flex gap-3 mb-3">
                <span className="px-2 py-1 bg-secondary rounded text-sm">{screening.movie.genre}</span>
                <span className="px-2 py-1 bg-secondary rounded text-sm">{screening.movie.duration} min</span>
              </div>
              <p className="text-muted-foreground mb-6">{screening.movie.description}</p>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Screening Details</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>Date & Time:</div>
                  <div>{screening.start_time}</div>
                  <div>Room:</div>
                  <div>{screening.room.name}</div>
                  <div>Price per ticket:</div>
                  <div>{screening.price} Ft</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Seat Selection */}
            <div className="flex-1">
              <h3 className="font-semibold mb-4">Select Your Seats</h3>
              <div className="bg-secondary/20 p-4 rounded-lg">
                {Array.from({ length: screening.room.rows }, (_, rowIndex) => {
                  const row = rowIndex + 1
                  return (
                    <div key={row} className="flex justify-center">
                      <span className="mr-2 w-10 text-center">Row {row}</span>
                      {Array.from({ length: screening.room.seats_per_row }, (_, seatIndex) => {
                        const number = seatIndex + 1
                        const isSelected = selectedSeats.some(seat => seat.row === row && seat.number === number)
                        const isUnavailable = screening.unavailable_seats.some(seat => seat.row === row && seat.seat === number)

                        return (
                          <button
                            key={`${row}-${number}`}
                            disabled={isUnavailable}
                            className={`w-8 h-8 m-1 rounded ${
                              isUnavailable
                                ? 'bg-destructive text-destructive-foreground cursor-not-allowed'
                                : isSelected
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-secondary hover:bg-secondary/80'
                            }`}
                          >
                            {number}
                          </button>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-secondary mr-2"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary mr-2"></div>
                  <span>Selected</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-destructive mr-2"></div>
                  <span>Unavailable</span>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-secondary/20 p-4 rounded-lg md:w-80 flex flex-col">
              <h3 className="font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Number of tickets:</span>
                  <span>{selectedSeats.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price per ticket:</span>
                  <span>{screening.price} Ft</span>
                </div>
                <div className="border-t mt-2 pt-2"></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Price:</span>
                  <span>{screening.price * selectedSeats.length} Ft</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-medium">Selected Seats:</h4>
                <ul className="text-sm text-muted-foreground">
                  {selectedSeats.map(seat => (
                    <li key={`${seat.row}-${seat.number}`}>
                      Row {seat.row}, Seat {seat.number}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full text-lg py-6 mt-auto">
                Buy Tickets
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 