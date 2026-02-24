export interface Movie {
  id: number;
  title: string;
  description: string;
  image_path: string;
  duration: number;
  director: string;
  genre: string;
  release_year: number;
  created_at: string;
  updated_at: string;
  screenings: Screening[];
} 

export interface Room {
  id: number;
  name: string;
  rows: number;
  seats_per_row: number;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Screening {
  id: number
  movie_id: number
  room: Room
  start_time: string
  price: string
  room: Room
  movie: Movie
  unavailable_seats: {
    row: number
    seat: number
  }[]
} 


export interface Booking {
  id: number
  user_id: number
  screening_id: number
  seats: number
  total_price: number
  user?: User
  screening?: Screening
  created_at: string
  updated_at: string
}

interface BookingResponse {
  status: string
  message: string
  data: {
    booking: Booking
  }
}

interface BookingsResponse {
  status: string
  message: string
  data: {
    bookings: Booking[]
  }
}

interface Seat {
  row: number
  number: number
}

interface CreateBookingRequest {
  screening_id: number
  number_of_tickets: number
  seats: Seat[]
}