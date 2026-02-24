import { useEffect, useState } from "react";
import { exampleTracks } from "../../domain/track";

function useTracks() {
    const [tracks, setTracks] = useState(JSON.parse(localStorage.getItem('tracks')) || exampleTracks );
    
    useEffect(()=> {
        localStorage.setItem("tracks", JSON.stringify(tracks))
    }, [tracks]) 
      
    return [tracks, setTracks];
}

export default useTracks;