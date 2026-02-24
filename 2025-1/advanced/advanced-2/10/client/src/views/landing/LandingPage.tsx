import { Movie } from "@/types/entities"
import MovieCard from "./components/MovieCard"
import { useQuery } from "@tanstack/react-query"
import { useMovies } from "@/services/useMovies"
import { AddMovieModal } from "./components/AddNewMovie"
import userStore from "@/store/userStore"
  function LandingPage() {
    const { data: movies, isLoading } = useMovies()

    const { user } = userStore()

    console.log(movies)
    if(isLoading){
      return <div>Loading...</div>
    }
    return (
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Now Showing</h1>
          {(user.role === "admin" || (user.data?.user.role === "admin")) && <AddMovieModal />}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {movies?.map((e: Movie) => <MovieCard movie={e} key={e.id}/>)}
        </div>
      </div>
    )
  }
  
  export default LandingPage
  