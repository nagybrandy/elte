import Header from "../_components/Header.tsx"
import PlaylistsList from "./_components/PlaylistsList.tsx"
import { examplePlaylists as playlists } from "../../storage/playlists.ts"

import TrackDetails from "./_components/TrackDetails.tsx"
import TrackList from "./_components/TrackList.tsx"
import { useState } from "react"

const Playlists = () => {
  const [id, setId] = useState(2);
  
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-base-200">
        <Header />
        <div className="w-11/12 mx-auto">
            <div className="pb-3 pr-3 mt-5 md:flex">
                <PlaylistsList playlists={playlists} setId={setId}/>
                <TrackList playlist={playlists[id]}/>
            </div>
        </div>
        <TrackDetails />
    </div>
  )
}

export default Playlists