import React from 'react'
import { examplePlaylists } from '../../../domain/playlist'

const PlaylistList = ({setSelectedPlId, selectedPlId}) => { 

    const handleClick = (id) => {
        setSelectedPlId(id)
    }

    return (
        <div className="w-full p-2 overflow-hidden md:w-4/12 h-[40vh]">
            <div className="w-full h-full shadow-xl join join-vertical bg-base-300">
                <h2 className="p-3 text-2xl font-bold join-item">Playlists</h2>
                <div className="overflow-y-scroll join join-vertical w-full pl-[0.6rem] h-[calc(100%-4rem)]">
                  {examplePlaylists.map(playlist =>
                    <div onClick={() => handleClick(playlist.id)} key={playlist.id} className={`items-start p-3 border-0 rounded-lg btn hover:bg-base-200 ${selectedPlId === playlist.id ? 'bg-base-100' : 'bg-base-300'}`}>
                        <div className="flex px-5 w-[100%]">
                            <div className="w-8/12 font-bold text-left">
                                <i className="mr-2 fas fa-music"></i>{playlist.title}
                            </div>
                            <div className="w-4/12 text-right">{playlist.tracks.length} songs</div>
                        </div>
                    </div>
                   )}
                </div>
            </div>
        </div>
    )
}

export default PlaylistList
