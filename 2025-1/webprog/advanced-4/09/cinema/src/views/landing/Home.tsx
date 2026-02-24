import MovieCard from "./components/MovieCard"
import movies from "@/assets/movies.json"
  
  function Home() {
    return (
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Now Showing</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Movie 1 */}
            {movies.map(e => <MovieCard movie={e}/>)}
        </div>
      </div>
    )
  }
  
  export default Home
  