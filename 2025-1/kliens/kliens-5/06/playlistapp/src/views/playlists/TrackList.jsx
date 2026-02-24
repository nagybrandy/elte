import React from 'react'
import { examplePlaylists } from "./../../domain/playlist"
import { PlayCircle } from 'lucide-react'
const TrackList = ({ selectedPlIndex }) => {
    const selectedPlaylist = examplePlaylists[selectedPlIndex]
    return (
        <div className='w-full h-[40vh] overflow-x-hidden p-2 '>
            <div className="w-full h-full shadow-xl join join-vertical bg-base-300">
                <h2 className="p-3 text-2xl font-bold join-item">Tracks of {selectedPlaylist.title}</h2>
                <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem] h-[calc(100%-4rem)]">
                    {selectedPlaylist.tracks.map(e =>
                        <div key={e.id} className=" items-start p-3 border-0 rounded-lg btn hover:bg-base-200 bg-base-300">
                            <div className="flex px-5 w-[100%]">
                                <div className="w-8/12 font-bold text-left flex items-center">
                                    <PlayCircle className='inline-block mr-2' />
                                    <div>{e.title}</div>
                                </div>
                                <div className="w-4/12 text-right">{e.artist}</div>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default TrackList
