import React from 'react'
import { examplePlaylists } from './../../domain/playlist'
import { FileMusic } from 'lucide-react'

const PlaylistList = ({ setSelectedPlIndex, selectedPlIndex }) => {


    const handleClick = (index) => {
        setSelectedPlIndex(index)
    }

    return (
        <div className="w-full p-2 overflow-hidden md:w-4/12 h-[40vh]">
            <div className="w-full h-full shadow-xl join join-vertical bg-base-300">
                <h2 className="p-3 text-2xl font-bold join-item">Playlists</h2>
                <div className="overflow-y-scroll join join-vertical w-full pl-[0.6rem] h-[calc(100%-4rem)]">
                    {examplePlaylists.map((playlist, index) =>
                        <div key={index} onClick={() => handleClick(index)} className={`items-start p-3 border-0 rounded-lg btn hover:bg-base-200 ${selectedPlIndex == index ? "bg-base-100" : "bg-base-300 " }`}>
                            <div className="flex px-5 w-[100%]">
                                <div className="w-8/12 font-bold text-left">
                                    <FileMusic className='inline-block mr-2'/>{playlist.title}
                                </div>
                                <div className="w-4/12 text-right">{playlist.tracks.length} songs</div>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default PlaylistList
