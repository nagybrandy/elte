import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getAllBookings } from '@/services/useBookings'

interface Booking {
  id: number
  screening: {
    id: number
    movie: {
      title: string
      poster_url: string
    }
    start_time: string
    room: {
      name: string
    }
  }
  seats: Array<{
    row: number
    number: number
  }>
  total_price: number
}

export default function MyBookings() {
  const { data: bookings, isLoading, error } = useQuery({
    queryKey: ['bookings'],
    queryFn: getAllBookings,
    select: (data) => data.data
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading bookings</div>
  }

  if (!bookings?.length) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-gray-500">You haven't made any bookings yet.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking:any) => (
          <Card key={booking.id}>
            <CardHeader>
              <CardTitle>{booking.screening.movie.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Date:</span>{' '}
                  {new Date(booking.screening.start_time).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Time:</span>{' '}
                  {new Date(booking.screening.start_time).toLocaleTimeString()}
                </p>
                <p>
                  <span className="font-medium">Room:</span>{' '}
                  {booking.screening.room.name}
                </p>
                <p>
                  <span className="font-medium">Seats:</span>{' '}
                  {booking.seats.map((seat:any) => `${seat.row}-${seat.number}`).join(', ')}
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