import React from 'react'
import Menu from '../layout/Menu'
import PlaylistList from './PlaylistList'
import TrackList from './TrackList'
import TrackCard from './TrackCard'
import { useState } from 'react'

const Playlists = () => {
    const [selectedPlIndex, setSelectedPlIndex] = useState(0);

    return (
        <div className="bg-base-200">
            <Menu />
            <div className="w-11/12 mx-auto">
                <div className="pb-3 pr-3 mt-5 md:flex w-full">
                    <PlaylistList selectedPlIndex={selectedPlIndex} setSelectedPlIndex={setSelectedPlIndex}/>
                    <TrackList selectedPlIndex={selectedPlIndex} />
                </div>
                <TrackCard />
            </div>

        </div>
    )
}

export default Playlists
