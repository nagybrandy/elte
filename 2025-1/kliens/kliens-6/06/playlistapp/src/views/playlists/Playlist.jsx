import React from 'react';
import PlaylistList from './_components/PlaylistList';
import TrackList from './_components/TrackList';
import TrackCard from './_components/TrackCard';
import { useState } from 'react';
const Playlist = () => {
    const [selectedPlId, setSelectedPlId] = useState(1);
    return (
        <div className="w-11/12 mx-auto">
            <div className="pb-3 pr-3 mt-5 md:flex">
                <PlaylistList selectedPlId={selectedPlId} setSelectedPlId={setSelectedPlId} />
                <TrackList selectedPlId={selectedPlId} setSelectedPlId={setSelectedPlId} />
            </div>
            <div className="px-3">
                <TrackCard />
            </div>
        </div>
    );
};

export default Playlist;