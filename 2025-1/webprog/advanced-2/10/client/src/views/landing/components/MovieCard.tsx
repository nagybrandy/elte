import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Clock } from "lucide-react"
import { NavLink } from "react-router"

const MovieCard = ({ movie }: any) => {
    return (
        <NavLink to={`/movie/${movie.id}`}>
            <Card className="cursor-pointer overflow-hidden flex flex-col h-full pt-0 hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-[400px] overflow-hidden">
                    <img
                        src={`http://127.0.0.1:8000/storage/${movie.image_path}`}
                        alt="Dune: Part Two"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardHeader className="space-y-1">
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="line-clamp-2 text-xl">{movie.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className="line-clamp-2">
                        {movie.description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground mt-auto">
                    <div className="flex justify-between items-center w-full">
                        <Badge variant="secondary" className="shrink-0">
                            {movie.genre}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-sm gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{movie.duration} min</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        </NavLink>
    )
}

export default MovieCard
