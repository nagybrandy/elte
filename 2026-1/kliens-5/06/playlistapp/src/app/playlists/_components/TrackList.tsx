import type { Playlist, Track } from "../../../entities"

const TrackList = ({playlist, setTrackId}: {playlist : Playlist, setTrackId : (id:number) => void }) => {

  const handleClick = (key: number) => {
    setTrackId(key)
  }
  return (
    <div className="w-full h-[40vh] overflow-x-hidden shadow-xl join join-vertical bg-base-300">
    <h2 className="p-3 text-2xl font-bold join-item">{playlist.title}</h2>
    <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem] h-[calc(100%-4rem)]">
       
        {playlist.tracks.map((track : Track, key: number,) => 
        <div key={key} className="items-start p-3 border-0 rounded-lg btn hover:bg-base-200 bg-base-200" onClick={()=> handleClick(key)}>
            <div className="flex px-5 w-[100%]">
                <div className="w-8/12 font-bold text-left">
                    <i className="mr-2 fas fa-music"></i>{track.title}
                </div>
                <div className="w-4/12 text-right">{track.artist}</div>
            </div>
        </div>
        )}
    
    </div>
</div>
  )
}

export default TrackList