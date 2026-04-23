import { Link } from "react-router-dom"
import type { Playlist } from "../../../entities"


const PlaylistsList = ({ playlists, setId,setTrackId } : { playlists : Playlist[], setId : (id: number ) => void, setTrackId : (id: number | undefined) => void} ) => {

  const handleClick = (key: number) => {
    setId(key)
    setTrackId(undefined)
  }
  
  return (
    <div className="w-full p-2 overflow-hidden md:w-4/12 h-[40vh]">
    <div className="w-full h-full shadow-xl join join-vertical bg-base-300">
        <h2 className="p-3 text-2xl font-bold join-item">Playlists</h2>
        <div className="overflow-y-scroll join join-vertical w-full pl-[0.6rem] h-[calc(100%-4rem)]">
            {playlists.map((playlist : Playlist, key : number) => 
                <Link to={`/playlists/${key}`} key={key} className="items-start p-3 border-0 rounded-lg btn hover:bg-base-200 bg-base-200" onClick={()=> handleClick(key)}>
                    <div className="flex px-5 w-[100%]">
                        <div className="w-8/12 font-bold text-left">
                            <i className="mr-2 fas fa-music"></i> {playlist.title}
                        </div>
                        <div className="w-4/12 text-right">{playlist.tracks.length} songs</div>
                    </div>
                </Link>
            )}
        </div>
    </div>
    </div>
  )
}

export default PlaylistsList