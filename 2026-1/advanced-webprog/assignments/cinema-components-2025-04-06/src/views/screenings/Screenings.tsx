import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Add a CSS class for mobile layout
const mobileTableCell = 'block md:table-cell';

// Add a CSS class for hiding elements on mobile
const mobileHidden = 'hidden md:table-header-group';

export default function Screenings() {
  // Sample screenings data
  const screenings = [
    {
      id: 1,
      movie: { title: "Dune: Part Two", id: 1 },
      start_time: "April 15, 2024 6:00 PM",
      room: { name: "Room 1" },
      price: 1800
    },
    {
      id: 2,
      movie: { title: "The Batman", id: 2 },
      start_time: "April 15, 2024 7:30 PM",
      room: { name: "Room 2" },
      price: 1900
    },
    {
      id: 3,
      movie: { title: "Oppenheimer", id: 3 },
      start_time: "April 15, 2024 8:45 PM",
      room: { name: "Room 3" },
      price: 2000
    }
  ];

  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Available Screenings</CardTitle>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <Button variant="outline">
                Previous Day
              </Button>
              <span className="font-medium">
                April 15, 2024
              </span>
              <Button variant="outline">
                Next Day
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className={mobileHidden}>
              <TableRow>
                <TableHead>Movie</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {screenings.map((screening) => (
                <TableRow key={screening.id}>
                  <TableCell className={`font-medium ${mobileTableCell}`}>
                    {screening.movie.title}
                  </TableCell>
                  <TableCell className={mobileTableCell}>
                    {screening.start_time}
                  </TableCell>
                  <TableCell className={mobileTableCell}>
                    {screening.room.name}
                  </TableCell>
                  <TableCell className={mobileTableCell}>
                    {screening.price} Ft
                  </TableCell>
                  <TableCell className={mobileTableCell}>
                    <Button>Book Tickets</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 