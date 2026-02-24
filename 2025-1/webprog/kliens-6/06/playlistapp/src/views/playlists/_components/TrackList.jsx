import React from 'react'
import { examplePlaylists } from '../../../domain/playlist'

const TrackList = ({ selectedPlId }) => {

    const selectedPlaylist = examplePlaylists.find(e => e.id == selectedPlId)
    console.log(selectedPlaylist)
    return (
        <div className="w-full h-[40vh] overflow-x-hidden shadow-xl join join-vertical bg-base-300">
            <h2 className="p-3 text-2xl font-bold join-item">Tracks of {selectedPlaylist.title}</h2>
            <div className="overflow-y-scroll w-full join join-vertical pl-[0.6rem] h-[calc(100%-4rem)]">
                {selectedPlaylist.tracks.map(track =>
                    <div key={track.id} className="items-start p-3 border-0 rounded-lg btn hover:bg-base-200 bg-base-300">
                        <div className="flex px-5 w-[100%]">
                            <div className="w-8/12 font-bold text-left">
                                <i className="mr-2 fas fa-music"></i>{track.title}
                            </div>
                            <div className="w-4/12 text-right">{track.artist}</div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default TrackList
