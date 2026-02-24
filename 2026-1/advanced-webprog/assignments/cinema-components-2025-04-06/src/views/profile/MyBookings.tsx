import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MyBookings() {
  // Sample bookings data with real images
  const bookings = [
    {
      id: 1,
      screening: {
        id: 1,
        movie: {
          title: "Dune: Part Two",
          poster_url: "/movies/dune.jpg"
        },
        start_time: "April 15, 2024 6:00 PM",
        room: {
          name: "Room 1"
        }
      },
      seats: [
        { row: 1, number: 5 },
        { row: 1, number: 6 }
      ],
      total_price: 3600
    },
    {
      id: 2,
      screening: {
        id: 2,
        movie: {
          title: "Oppenheimer",
          poster_url: "/movies/oppenheimer.jpg"
        },
        start_time: "April 20, 2024 7:30 PM",
        room: {
          name: "Room 2"
        }
      },
      seats: [
        { row: 3, number: 8 },
        { row: 3, number: 9 },
        { row: 3, number: 10 }
      ],
      total_price: 5700
    },
    {
      id: 3,
      screening: {
        id: 3,
        movie: {
          title: "Poor Things",
          poster_url: "/movies/poor-things.jpg"
        },
        start_time: "April 22, 2024 5:15 PM",
        room: {
          name: "Room 3"
        }
      },
      seats: [
        { row: 2, number: 3 },
        { row: 2, number: 4 }
      ],
      total_price: 4200
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <Card key={booking.id} className="pt-0 overflow-hidden">
            <div className="h-[200px] p-0 overflow-hidden">
              <img 
                src={booking.screening.movie.poster_url} 
                alt={booking.screening.movie.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{booking.screening.movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Date & Time:</span>{' '}
                  {booking.screening.start_time}
                </p>
                <p>
                  <span className="font-medium">Room:</span>{' '}
                  {booking.screening.room.name}
                </p>
                <p>
                  <span className="font-medium">Seats:</span>{' '}
                  {booking.seats.map(seat => `${seat.row}-${seat.number}`).join(', ')}
                </p>
                <p>
                  <span className="font-medium">Total Price:</span>{' '}
                  {booking.total_price} Ft
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 