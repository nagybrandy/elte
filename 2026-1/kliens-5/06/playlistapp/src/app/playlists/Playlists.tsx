import Header from "../layout/_components/Header.tsx"
import PlaylistsList from "./_components/PlaylistsList.tsx"
import { examplePlaylists as playlists } from "../../storage/playlists.ts"

import TrackDetails from "./_components/TrackDetails.tsx"
import TrackList from "./_components/TrackList.tsx"
import { useState } from "react"

const Playlists = () => {
  const [id, setId] = useState(2);
  const [trackId, setTrackId] = useState<number | undefined>(undefined);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-base-200">
        <div className="w-11/12 mx-auto">
            <div className="pb-3 pr-3 mt-5 md:flex">
                <PlaylistsList playlists={playlists} setId={setId} setTrackId={setTrackId}/>
                <TrackList playlist={playlists[id]} setTrackId={setTrackId}/>
            </div>
        </div>

        {trackId != undefined && <TrackDetails track={playlists[id].tracks[trackId]}/>}
    </div>
  )
}

export default Playlists