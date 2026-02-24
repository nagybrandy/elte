import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Home() {
  return (
    <div className="container max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Now Showing</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Movie 1 */}
        <div className="cursor-pointer">
          <Card className="overflow-hidden flex flex-col h-full pt-0 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="/movies/dune.jpg"
                alt="Dune: Part Two"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="line-clamp-2 text-xl">Dune: Part Two</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">
                Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.
              </CardDescription>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground mt-auto">
              <div className="flex justify-between items-center w-full">
                <Badge variant="secondary" className="shrink-0">
                  Sci-Fi
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm gap-1">
                  <Clock className="h-4 w-4" />
                  <span>166 min</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Movie 2 */}
        <div className="cursor-pointer">
          <Card className="overflow-hidden flex flex-col h-full pt-0 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="/movies/oppenheimer.jpg"
                alt="Oppenheimer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="line-clamp-2 text-xl">Oppenheimer</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">
                The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
              </CardDescription>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground mt-auto">
              <div className="flex justify-between items-center w-full">
                <Badge variant="secondary" className="shrink-0">
                  Drama
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm gap-1">
                  <Clock className="h-4 w-4" />
                  <span>180 min</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Movie 3 */}
        <div className="cursor-pointer">
          <Card className="overflow-hidden flex flex-col h-full pt-0 hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="/movies/inception.jpg"
                alt="Inception"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="space-y-1">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="line-clamp-2 text-xl">Inception</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">
                A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
              </CardDescription>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground mt-auto">
              <div className="flex justify-between items-center w-full">
                <Badge variant="secondary" className="shrink-0">
                  Sci-Fi
                </Badge>
                <div className="flex items-center text-muted-foreground text-sm gap-1">
                  <Clock className="h-4 w-4" />
                  <span>148 min</span>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home

